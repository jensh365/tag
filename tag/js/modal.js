// ملف: js/modal.js

// دالة لفتح المودال وتحديث ID الجهاز
function openInvoiceBofeihModal(deviceId) {
    const modal = document.getElementById('invoiceBofeihModal');
    const deviceIdSpan = modal.querySelector('.device-id-in-modal');

    // تحديث ID الجهاز في المودال
    if (deviceIdSpan) {
        deviceIdSpan.textContent = deviceId;
    }

    modal.classList.add('active'); // إضافة الكلاس 'active' لإظهار المودال
    document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
}

// دالة لإغلاق المودال
function closeInvoiceBofeihModal() {
    const modal = document.getElementById('invoiceBofeihModal');
    modal.classList.remove('active'); // إزالة الكلاس 'active' لإخفاء المودال
    document.body.style.overflow = ''; // استعادة التمرير في الخلفية
}

document.addEventListener('DOMContentLoaded', () => {
    // ربط زر "الفاتورة والبوفيه" في كل بطاقة جهاز بفتح المودال
    // سيتم استهداف الأزرار داخل البطاقات التي تحتوي على الكلاس 'unavailable' فقط
    const invoiceBofeihButtons = document.querySelectorAll('.device-card.unavailable .btn-invoice-bofeih');
    invoiceBofeihButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.device-card');
            if (card) {
                const deviceId = card.querySelector('.device-id').textContent.trim();
                openInvoiceBofeihModal(deviceId); // لا حاجة لتمرير event هنا
            }
        });
    });

    // ربط زر 'X' للإغلاق وزر 'إلغاء' السفلي للمودال
    const closeBtn = document.querySelector('#invoiceBofeihModal .close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeInvoiceBofeihModal);
    }

    // إغلاق المودال عند الضغط خارج محتواه
    const modalOverlay = document.getElementById('invoiceBofeihModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            // تأكد أن النقر كان على الخلفية المعتمة وليس داخل محتوى المودال
            if (event.target === modalOverlay) {
                closeInvoiceBofeihModal();
            }
        });
    }

    const cancelBtnBottom = document.querySelector('#invoiceBofeihModal .btn-cancel-bottom');
    if (cancelBtnBottom) {
        cancelBtnBottom.addEventListener('click', closeInvoiceBofeihModal);
    }

    // ربط أزرار التعديل وعرض الفاتورة داخل المودال (للتوضيح)
    const editMessageBtn = document.getElementById('editInvoiceMessageBtn');
    if (editMessageBtn) {
        editMessageBtn.addEventListener('click', () => {
            alert('سيتم فتح نافذة لتعديل رسالة الفاتورة');
        });
    }

    const editBofeihBtn = document.getElementById('editBofeihBtn');
    if (editBofeihBtn) {
        editBofeihBtn.addEventListener('click', () => {
        });
    }

    const viewInvoiceBtn = document.querySelector('.btn-view-invoice');
    if (viewInvoiceBtn) {
        viewInvoiceBtn.addEventListener('click', () => {
        });
    }
});