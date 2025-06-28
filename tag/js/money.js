// متغير عالمي لتتبع سياق مربع النقدية المنبثق
let currentModalContext = '';

// دالة لإغلاق المربع المنبثق
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
    // إعادة ضبط حقول النموذج عند الإغلاق
    const form = document.getElementById(modalId).querySelector('form');
    if (form) {
        form.reset();
        const saveButton = form.querySelector('.btn-save');
        if (saveButton) {
            saveButton.classList.remove('enabled');
            saveButton.disabled = true; // تعطيل الزر
        }
        // إخفاء قائمة العملاء إذا كانت ظاهرة
        const customerSelect = document.getElementById('customerSelect');
        if (customerSelect) {
            customerSelect.style.display = 'none';
        }
        // مسح قيم حقول الإدخال عند الإغلاق
        const nameInput = document.getElementById('addExpenseName') || document.getElementById('addRevenueName');
        const amountInput = document.getElementById('addExpenseAmount') || document.getElementById('addRevenueAmount') || document.getElementById('initialCashAmount');
        const noteInput = document.getElementById('addNoteTextarea');

        if (nameInput) nameInput.value = '';
        if (amountInput) amountInput.value = '';
        if (noteInput) noteInput.value = '';
    }
    // إعادة تعيين سياق المودال عند إغلاق مودال النقدية الأولية
    if (modalId === 'initialCashModal') {
        currentModalContext = '';
    }
}

// دالة لإظهار القائمة الجانبية عند الضغط على الأيقونة
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active"); // تفعيل التظليل الخلفي
}

// دالة لتغيير حالة زر "بدء اليوم" حسب حالة الشيفت وتغيير رؤية أيقونات الزائد
function toggleShiftStatus() {
    const startShiftBtn = document.getElementById("startNewDayBtn");
    const shiftStatus = localStorage.getItem("shiftOpen");
    const addIcons = document.querySelectorAll('.add-icon'); // كل أيقونات الزائد

    if (shiftStatus === "true") {
        startShiftBtn.innerText = "قفل الشيفت";
        startShiftBtn.style.backgroundColor = "#e74c3c"; // اللون الأحمر
        // إظهار علامات +
        addIcons.forEach(icon => {
            icon.classList.add('visible');
        });
    } else {
        startShiftBtn.innerText = "بدء يوم جديد";
        startShiftBtn.style.backgroundColor = "#4CAF50"; // اللون الأخضر
        // إخفاء علامات +
        addIcons.forEach(icon => {
            icon.classList.remove('visible');
        });
    }
}

// تغيير حالة الشيفت عند الضغط على زر "بدء اليوم"
function toggleShift() {
    const shiftStatus = localStorage.getItem("shiftOpen");

    if (shiftStatus === "true") {
        // إذا كان الشيفت مفتوحاً، سيتم فتح مودال "النقدية المسلمة" قبل إغلاق الشيفت
        openInitialCashModal('endShift');
    } else {
        // إذا كان الشيفت مغلقاً، سيتم فتح مودال "النقدية المستلمة في بداية اليوم" قبل فتح الشيفت
        openInitialCashModal('startShift');
    }
}

// تنفيذ عند تحميل الصفحة لتحديث حالة الزر وأيقونات الزائد
window.onload = function() {
    // إضافة أيقونات الزائد إلى مربعات البيانات
    const financialDataBoxes = document.querySelectorAll('.financial-data .data-box');
    financialDataBoxes.forEach(box => {
        // لا نضيف أيقونة الزائد لمربع صافي النقدية
        if (box.id !== 'cashBalance') {
            const addIcon = document.createElement('span');
            addIcon.classList.add('material-icons', 'add-icon'); // إزالة 'visible' الافتراضية
            addIcon.innerText = 'add';
            // إضافة معالج حدث لفتح المودال المناسب
            if (box.id === 'expenses') {
                addIcon.onclick = openAddExpenseModal;
            } else if (box.id === 'revenues') {
                addIcon.onclick = openAddRevenueModal;
            } else if (box.id === 'notes') { // إضافة حالة لمربع الملاحظات
                addIcon.onclick = openAddNoteModal;
            }
            box.appendChild(addIcon);
        }
    });
    toggleShiftStatus(); // استدعاء toggleShiftStatus لضبط الرؤية الأولية لأيقونات الزائد
       // عند تحميل الصفحة، تأكد من إظهار محتوى الإيرادات افتراضياً
       switchTab('revenue');
};

// دالة للتنقل بين الإيرادات والمصروفات
function switchTab(tab) {
    const revenueTab = document.getElementById("revenue-tab");
    const expenseTab = document.getElementById("expense-tab");
    const revenueContent = document.getElementById("revenue-content");
    const expenseContent = document.getElementById("expense-content");

    // مربعات الإيرادات
    const revenueOrder = document.getElementById("revenue-order");
    const revenueTables = document.getElementById("revenue-tables");
    const revenueDevices = document.getElementById("revenue-devices");

    // مربع المصروفات (المرتجعات)
    const expenseReturns = document.getElementById("expense-returns");

    if (tab === 'revenue') {
        revenueTab.classList.add("active");
        expenseTab.classList.remove("active");
        revenueContent.style.display = "grid"; // استخدام grid لعرض مربعات الإيرادات
        expenseContent.style.display = "none";
        
        // إظهار مربعات الإيرادات وإخفاء المرتجعات
        revenueOrder.style.display = "block";
        revenueTables.style.display = "block";
        revenueDevices.style.display = "block";
        expenseReturns.style.display = "none";

    } else {
        revenueTab.classList.remove("active");
        expenseTab.classList.add("active");
        revenueContent.style.display = "none";
        expenseContent.style.display = "block";
        
        // إخفاء مربعات الإيرادات وإظهار المرتجعات
        revenueOrder.style.display = "none";
        revenueTables.style.display = "none";
        revenueDevices.style.display = "none";
        expenseReturns.style.display = "block";
    }
}

// دالة لفتح المربع المنبثق لإضافة المصروفات
function openAddExpenseModal() {
    document.getElementById("addExpenseModal").classList.add("active");
}

// دالة لفتح المربع المنبثق لإضافة الإيرادات
function openAddRevenueModal() {
    document.getElementById("addRevenueModal").classList.add("active");
}

// دالة لفتح المربع المنبثق لإضافة ملاحظة
function openAddNoteModal() {
    document.getElementById("addNoteModal").classList.add("active");
}

// دالة لفتح المربع المنبثق لإدخال النقدية المستلمة/المسلمة
function openInitialCashModal(context) {
    currentModalContext = context; // حفظ السياق في المتغير العام
    const modalTitle = document.getElementById('initialCashModalTitle');
    if (context === 'startShift') {
        modalTitle.innerText = "النقدية المستلمة في بداية اليوم";
    } else if (context === 'endShift') {
        modalTitle.innerText = "النقدية المسلمة";
    }
    document.getElementById("initialCashModal").classList.add("active");
}

// دالة لتمكين/تعطيل زر الحفظ بناءً على ملء الحقول
function enableSaveButton(modalId) {
    let isFormValid = false;
    if (modalId === 'addExpenseModal') {
        const expenseName = document.getElementById('addExpenseName').value;
        const expenseAmount = document.getElementById('addExpenseAmount').value;
        const expenseTypeSelected = document.querySelector('input[name="expenseType"]:checked');
        isFormValid = expenseName.trim() !== '' && expenseAmount.trim() !== '' && !isNaN(expenseAmount) && expenseTypeSelected !== null;
    } else if (modalId === 'addRevenueModal') {
        const revenueName = document.getElementById('addRevenueName').value;
        const revenueAmount = document.getElementById('addRevenueAmount').value;
        const revenueType = document.querySelector('input[name="revenueType"]:checked');
        const customerSelect = document.getElementById('customerSelect');

        if (revenueType && revenueType.value === 'عميل') {
            // إذا كان نوع الإيراد "عميل"، يجب اختيار عميل أيضًا
            isFormValid = revenueName.trim() !== '' && revenueAmount.trim() !== '' && !isNaN(revenueAmount) && customerSelect.value !== '';
        } else {
            // إذا كان نوع الإيراد "محل"، لا نحتاج العميل
            isFormValid = revenueName.trim() !== '' && revenueAmount.trim() !== '' && !isNaN(revenueAmount) && revenueType !== null;
        }
    } else if (modalId === 'addNoteModal') { // التحقق لزر حفظ الملاحظة
        const noteTextarea = document.getElementById('addNoteTextarea').value;
        isFormValid = noteTextarea.trim() !== '';
    } else if (modalId === 'initialCashModal') { // التحقق لزر حفظ النقدية الأولية/المسلمة
        const initialCashAmount = document.getElementById('initialCashAmount').value;
        isFormValid = initialCashAmount.trim() !== '' && !isNaN(initialCashAmount);
    }

    const saveButton = document.getElementById(modalId).querySelector('.btn-save');
    if (isFormValid) {
        saveButton.classList.add('enabled');
        saveButton.disabled = false;
    } else {
        saveButton.classList.remove('enabled');
        saveButton.disabled = true;
    }
}

// دالة لإظهار/إخفاء قائمة العملاء في مربع الإيرادات
function toggleCustomerSelect() {
    const customerSelect = document.getElementById('customerSelect');
    const customerRadio = document.getElementById('revenueTypeCustomer');
    if (customerRadio.checked) {
        customerSelect.style.display = 'block';
    } else {
        customerSelect.style.display = 'none';
        customerSelect.value = ''; // مسح القيمة عند الإخفاء
    }
    enableSaveButton('addRevenueModal'); // التحقق من الزر بعد التغيير
}

// وظائف لحفظ المصروفات/الإيرادات/الملاحظات/النقدية الأولية (حالياً مجرد دالات وهمية)
function saveExpense() {
    alert('تم حفظ المصروفات!');
    closeModal('addExpenseModal');
}

function saveRevenue() {
    alert('تم حفظ الإيرادات!');
    closeModal('addRevenueModal');
}

function saveNote() {
    alert('تم حفظ الملاحظة!');
    closeModal('addNoteModal');
}

function saveInitialCash() {
    const amount = document.getElementById('initialCashAmount').value;
    if (amount.trim() !== '' && !isNaN(amount)) {
        if (currentModalContext === 'startShift') {
            alert('تم حفظ النقدية المستلمة في بداية اليوم: ' + amount);
            localStorage.setItem("shiftOpen", "true"); // افتح الشيفت بعد حفظ النقدية
        } else if (currentModalContext === 'endShift') {
            alert('تم حفظ النقدية المسلمة: ' + amount);
            localStorage.setItem("shiftOpen", "false"); // أغلق الشيفت بعد حفظ النقدية
        }
        toggleShiftStatus(); // تحديث حالة الزر وأيقونات الزائد
        closeModal('initialCashModal');
    } else {
        alert('الرجاء إدخال مبلغ صحيح.');
    }
}