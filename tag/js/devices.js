// devices.js

// دالة لتبديل بين تبويبات "الأجهزة" و "فواتير الأجهزة"
function switchDevicesTab(tab) {
    const devicesTabBtn = document.getElementById("devices-tab");
    const deviceInvoicesTabBtn = document.getElementById("device-invoices-tab");
    const devicesContent = document.getElementById("devices-content"); // هذا هو devices-sections-container الآن
    const deviceInvoicesContent = document.getElementById("device-invoices-content");

    if (tab === 'devices') {
        devicesTabBtn.classList.add("active");
        deviceInvoicesTabBtn.classList.remove("active");
        devicesContent.style.display = "flex"; // استخدام flex هنا لترتيب الأقسام عمودياً
        devicesContent.style.flexDirection = "column";
        deviceInvoicesContent.style.display = "none";
    } else {
        devicesTabBtn.classList.remove("active");
        deviceInvoicesTabBtn.classList.add("active");
        devicesContent.style.display = "none";
        deviceInvoicesContent.style.display = "block";
    }
}

// دالة لفتح مودال "إضافة جهاز جديد"
function openAddDeviceModal() {
    document.getElementById("addDeviceModal").classList.add("active");
}

// دالة لفتح مودال "بيانات الجهاز"
function openDeviceDetailsModal(deviceId, deviceType, deviceStatus) {
    document.getElementById("deviceDetailsId").innerText = deviceId;
    document.getElementById("deviceDetailsType").innerText = deviceType;
    document.getElementById("deviceDetailsStatus").innerText = deviceStatus;
    document.getElementById("deviceDetailsModal").classList.add("active");
}

// دالة عامة لإغلاق أي مودال (تم نقلها من money.js لتكون هنا أو يمكن وضعها في ملف مشترك)
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
    // يمكن إضافة منطق لإعادة ضبط حقول النموذج هنا إذا لزم الأمر
    const form = document.getElementById(modalId).querySelector('form');
    if (form) {
        form.reset();
    }
}

// ** منطق المؤقتات للأجهزة المشغولة **
const deviceTimers = {}; // كائن لتخزين مؤقتات كل جهاز

// دالة لبدء مؤقت لجهاز معين
function startDeviceTimer(deviceId) {
    const deviceCard = document.querySelector(`.device-card[data-device-id="${deviceId}"]`);
    if (!deviceCard) return;

    // تغيير حالة الجهاز من متاح إلى غير متاح
    deviceCard.classList.remove('available');
    deviceCard.classList.add('unavailable');

    // إزالة أزرار "ابدأ وقت" من البطاقة وتحويلها لبطاقة غير متاحة
    const actionsContainer = deviceCard.querySelector('.device-actions');
    actionsContainer.innerHTML = `
        <button class="btn-device-details" onclick="openDeviceDetailsModal(${deviceId}, 'PS4', 'يعمل')"><span class="material-icons">info</span> بيانات الجهاز</button>
        <button class="btn-invoice-bofeih"><span class="material-icons">receipt_long</span> الفاتورة والبوفيه</button>
    `;

    // إضافة قسم المؤقت بالهيكل الجديد
    const timerSectionHTML = `
        <div class="timer-section">
            <div class="timer-item m-icon-wrapper">
                <span class="material-icons m-icon">M</span>
            </div>
            <div class="timer-item">
                <div class="timer-circle minutes-circle">
                    <span class="time-value" id="device${deviceId}-minutes">00</span>
                </div>
                <span class="time-label">دقيقة</span>
            </div>
            <div class="timer-item">
                <div class="timer-circle hours-circle">
                    <span class="time-value" id="device${deviceId}-hours">00</span>
                </div>
                <span class="time-label">ساعة</span>
            </div>
        </div>
    `;
    // قم بإدخال قسم المؤقت في المكان الصحيح (قبل actionsContainer)
    actionsContainer.insertAdjacentHTML('beforebegin', timerSectionHTML);

    // تعيين وقت البدء الحالي
    const startTime = Date.now();
    deviceCard.dataset.startTime = startTime; // حفظ وقت البدء في dataset

    // نقل البطاقة إلى قسم الأجهزة غير المتاحة
    const unavailableContainer = document.querySelector('.unavailable-devices-section .device-cards-container');
    if (unavailableContainer) {
        unavailableContainer.appendChild(deviceCard);
    }


    // بدء المؤقت الفعلي
    deviceTimers[deviceId] = setInterval(() => {
        const elapsedMilliseconds = Date.now() - startTime;
        const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        document.getElementById(`device${deviceId}-hours`).innerText = String(hours).padStart(2, '0');
        document.getElementById(`device${deviceId}-minutes`).innerText = String(minutes).padStart(2, '0');
    }, 1000); // تحديث كل ثانية
}

// دالة لإيقاف مؤقت لجهاز معين (سيتم ربطها بزر "الفاتورة والبوفيه" لاحقًا)
function stopDeviceTimer(deviceId) {
    if (deviceTimers[deviceId]) {
        clearInterval(deviceTimers[deviceId]);
        delete deviceTimers[deviceId];
        
        const deviceCard = document.querySelector(`.device-card[data-device-id="${deviceId}"]`);
        if (deviceCard) {
            // إزالة قسم المؤقت إذا كان موجودًا
            const timerSection = deviceCard.querySelector('.timer-section');
            if (timerSection) {
                timerSection.remove();
            }

            deviceCard.classList.remove('unavailable');
            deviceCard.classList.add('available');

            // إعادة أزرار الحالة المتاحة
            const actionsContainer = deviceCard.querySelector('.device-actions');
            actionsContainer.innerHTML = `
                <button class="btn-start-time" onclick="startDeviceTimer(${deviceId})"><span class="material-icons">play_arrow</span> ابدأ وقت</button>
                <button class="btn-device-details" onclick="openDeviceDetailsModal(${deviceId}, 'PS4', 'متاح')"><span class="material-icons">info</span> بيانات الجهاز</button>
            `;
            // نقل البطاقة إلى قسم الأجهزة المتاحة
            const availableContainer = document.querySelector('.available-devices-section .device-cards-container');
            if (availableContainer) {
                availableContainer.appendChild(deviceCard);
            }
        }
    }
}

// وظائف لإجراءات الأزرار
document.addEventListener('DOMContentLoaded', () => {
    // تبديل التبويب الافتراضي عند تحميل الصفحة
    switchDevicesTab('devices');

    // إضافة معالج حدث لزر "أضف جهاز جديد"
    const addDeviceBtn = document.querySelector('.add-device-btn');
    if (addDeviceBtn) {
        addDeviceBtn.addEventListener('click', openAddDeviceModal);
    }

    // معالجة زر "حفظ الجهاز" داخل مودال إضافة جهاز
    const saveDeviceBtn = document.querySelector('#addDeviceModal .btn-save');
    if (saveDeviceBtn) {
        saveDeviceBtn.addEventListener('click', (event) => {
            event.preventDefault(); // منع إرسال النموذج الافتراضي
            const deviceName = document.getElementById('deviceName').value.trim();
            if (deviceName) {
                alert('تم حفظ الجهاز: ' + deviceName);
                closeModal('addDeviceModal');
                // هنا يمكن إضافة منطق لإضافة الجهاز فعليًا إلى DOM (بشكل متاح مبدئياً)
                // ويفضل أن يكون ذلك بعد الاتصال بقاعدة البيانات.
                // مثال مبسط:
                const allDeviceCards = document.querySelectorAll('.device-card');
                let maxDeviceId = 0;
                allDeviceCards.forEach(card => {
                    const id = parseInt(card.dataset.deviceId);
                    if (id > maxDeviceId) {
                        maxDeviceId = id;
                    }
                });
                const newDeviceId = maxDeviceId + 1; // معرف مؤقت يزيد عن الأكبر الحالي
                
                const newDeviceCardHTML = `
                    <div class="device-card available" data-device-id="${newDeviceId}">
                        <div class="device-id-container">
                            <span class="device-id-label">ID:</span><span class="device-id">${newDeviceId}</span>
                        </div>
                        <div class="device-header">
                            <img src="../uploads/ps4_logo.png" alt="PS4 Logo" class="device-logo">
                            <span class="device-type">${deviceName}</span>
                        </div>
                        <div class="device-actions available-actions">
                            <button class="btn-start-time" onclick="startDeviceTimer(${newDeviceId})"><span class="material-icons">play_arrow</span> ابدأ وقت</button>
                            <button class="btn-device-details" onclick="openDeviceDetailsModal(${newDeviceId}, '${deviceName}', 'متاح')"><span class="material-icons">info</span> بيانات الجهاز</button>
                        </div>
                    </div>
                `;
                document.querySelector('.available-devices-section .device-cards-container').insertAdjacentHTML('beforeend', newDeviceCardHTML);
            } else {
                alert('الرجاء إدخال اسم الجهاز.');
            }
        });
    }

    // معالجة أزرار "بيانات الجهاز" و "الفاتورة والبوفيه"
    document.addEventListener('click', (event) => {
        const target = event.target.closest('.btn-device-details, .btn-invoice-bofeih');
        if (target) {
            const deviceCard = target.closest('.device-card');
            const deviceId = deviceCard.dataset.deviceId;
            const deviceType = deviceCard.querySelector('.device-type').innerText;
            const deviceStatus = deviceCard.classList.contains('unavailable') ? 'يعمل' : 'متاح';

            if (target.classList.contains('btn-device-details')) {
                openDeviceDetailsModal(deviceId, deviceType, deviceStatus);
            } else if (target.classList.contains('btn-invoice-bofeih')) {
                // يمكنك هنا عرض فاتورة أو إجراءات البوفيه
                alert(`فاتورة وبوفيه للجهاز ID: ${deviceId}`);
                // استدعاء stopDeviceTimer(deviceId) لإيقاف المؤقت وإعادة البطاقة للحالة المتاحة
                stopDeviceTimer(deviceId);
            }
        }
    });
});