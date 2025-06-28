<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الأجهزة</title>
    <link rel="stylesheet" href="../css/money.css">
    <link rel="stylesheet" href="../css/devices.css">
    <link rel="stylesheet" href="../css/devices-extra.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="../css/modal.css">
</head>
<body>
    <div class="overlay"></div>

    <div id="sidebar" class="sidebar">
        <div class="logo">
            <img src="uploads/logo.png" alt="Logo" width="100"> </div>
        <ul>
            <li><a href="money.php"><span class="material-icons">account_balance_wallet</span>النقدية</a></li>
            <li><a href="devices.php"><span class="material-icons">computer</span>الأجهزة</a></li>
            <li><a href="tables.html"><span class="material-icons">restaurant</span>التربيزات</a></li>
            <li><a href="orders.html"><span class="material-icons">shopping_cart</span>الأوردرات</a></li>
            <li><a href="inventory.html"><span class="material-icons">store</span>المخزن والأسعار</a></li>
            <li><a href="customers.html"><span class="material-icons">person</span>العملاء</a></li>
            <li><a href="employees.html"><span class="material-icons">people</span>الموظفين</a></li>
            <li><a href="settings.html"><span class="material-icons">settings</span>الإعدادات</a></li>
            <li><a href="reports.html"><span class="material-icons">assessment</span>التقارير</a></li>
        </ul>
        <div class="employee-info">
            <img src="uploads/employee.jpg" alt="Employee" width="50">
            <span>Mohamed Hamed</span>
            <button>خروج</button>
        </div>
    </div>


    <button class="sidebar-toggle">
        <i class="fas fa-bars"></i>
    </button>

    <main class="content">

        <div class="devices-top-controls">
            <h1 class="page-title">إدارة الأجهزة</h1>
            <button class="add-device-btn" id="addDeviceBtn">
                <i class="fas fa-plus-circle"></i> إضافة جهاز جديد
            </button>
        </div>

        <div class="devices-tab-controls">
            <button class="devices-tab active" data-tab-target="#devices-list-section">الأجهزة</button>
            <button class="devices-tab" data-tab-target="#device-invoices-section">فواتير الأجهزة</button>
        </div>

        <div id="devices-list-section" class="tab-content-section">
            <div class="devices-sections-container">
                <div class="devices-section">
                    <h2 class="section-title unavailable-title">الأجهزة غير المتاحة</h2>
                    <div class="device-cards-container">
                        <div class="device-card unavailable">
                            <div class="device-id-container">
                                <span class="device-id-label">ID:</span>
                                <span class="device-id">001</span>
                            </div>
                            <div class="device-header">
                                <img src="path/to/device-logo.png" alt="شعار الجهاز" class="device-logo">
                                <span class="device-type">بلاي ستيشن 5</span>
                            </div>
                            <div class="timer-section">
                                <div class="m-icon-wrapper">
                                    <span class="m-icon">M</span>
                                </div>
                                <div class="timer-item">
                                    <div class="timer-circle hours-circle"><span class="time-value">01</span></div>
                                    <span class="time-label">ساعة</span>
                                </div>
                                <div class="timer-item">
                                    <div class="timer-circle minutes-circle"><span class="time-value">30</span></div>
                                    <span class="time-label">دقيقة</span>
                                </div>
                            </div>
                            <div class="device-actions">
                                <button class="btn-invoice-bofeih"><i class="fas fa-receipt"></i> الفاتورة والبوفيه</button>
                                <button class="btn-device-details"><i class="fas fa-info-circle"></i> بيانات الجهاز</button>
                            </div>
                        </div>
                        <div class="device-card unavailable">
                            <div class="device-id-container">
                                <span class="device-id-label">ID:</span>
                                <span class="device-id">002</span>
                            </div>
                            <div class="device-header">
                                <img src="path/to/device-logo.png" alt="شعار الجهاز" class="device-logo">
                                <span class="device-type">بلاي ستيشن 4</span>
                            </div>
                            <div class="timer-section">
                                <div class="m-icon-wrapper">
                                    <span class="m-icon">M</span>
                                </div>
                                <div class="timer-item">
                                    <div class="timer-circle hours-circle"><span class="time-value">00</span></div>
                                    <span class="time-label">ساعة</span>
                                </div>
                                <div class="timer-item">
                                    <div class="timer-circle minutes-circle"><span class="time-value">45</span></div>
                                    <span class="time-label">دقيقة</span>
                                </div>
                            </div>
                            <div class="device-actions">
                                <button class="btn-invoice-bofeih"><i class="fas fa-receipt"></i> الفاتورة والبوفيه</button>
                                <button class="btn-device-details"><i class="fas fa-info-circle"></i> بيانات الجهاز</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="devices-section">
                    <h2 class="section-title available-title">الأجهزة المتاحة</h2>
                    <div class="device-cards-container">
                        <div class="device-card available">
                            <div class="device-id-container">
                                <span class="device-id-label">ID:</span>
                                <span class="device-id">003</span>
                            </div>
                            <div class="device-header">
                                <img src="path/to/device-logo.png" alt="شعار الجهاز" class="device-logo">
                                <span class="device-type">كمبيوتر جيمينج</span>
                            </div>
                            <div class="device-actions">
                                <button class="btn-start-time"><i class="fas fa-play-circle"></i> ابدأ وقت</button>
                                <button class="btn-device-details"><i class="fas fa-info-circle"></i> بيانات الجهاز</button>
                            </div>
                        </div>
                        <div class="device-card available">
                            <div class="device-id-container">
                                <span class="device-id-label">ID:</span>
                                <span class="device-id">004</span>
                            </div>
                            <div class="device-header">
                                <img src="path/to/device-logo.png" alt="شعار الجهاز" class="device-logo">
                                <span class="device-type">بلاي ستيشن 5</span>
                            </div>
                            <div class="device-actions">
                                <button class="btn-start-time"><i class="fas fa-play-circle"></i> ابدأ وقت</button>
                                <button class="btn-device-details"><i class="fas fa-info-circle"></i> بيانات الجهاز</button>
                            </div>
                        </div>
                        <div class="device-card available">
                            <div class="device-id-container">
                                <span class="device-id-label">ID:</span>
                                <span class="device-id">005</span>
                            </div>
                            <div class="device-header">
                                <img src="path/to/device-logo.png" alt="شعار الجهاز" class="device-logo">
                                <span class="device-type">كمبيوتر جيمينج</span>
                            </div>
                            <div class="device-actions">
                                <button class="btn-start-time"><i class="fas fa-play-circle"></i> ابدأ وقت</button>
                                <button class="btn-device-details"><i class="fas fa-info-circle"></i> بيانات الجهاز</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="device-invoices-section" class="tab-content-section hidden-section">
            <div class="invoices-section-content">
                <div class="invoices-controls">
                    <div class="search-container">
                        <label for="invoiceSearch">بحث عن فاتورة:</label>
                        <input type="text" id="invoiceSearch" placeholder="ابحث بالمعرف أو الجهاز...">
                    </div>
                    <div class="date-filter-container">
                        <label for="invoiceDateFilter">تصفية حسب التاريخ:</label>
                        <input type="date" id="invoiceDateFilter">
                    </div>
                </div>

                <div class="invoices-table-container">
                    <table class="main-details-table">
                        <thead>
                            <tr>
                                <th>معرف الفاتورة</th>
                                <th>اسم الجهاز</th>
                                <th>وقت البدء</th>
                                <th>وقت الانتهاء</th>
                                <th>المدة</th>
                                <th>المبلغ (وقت)</th>
                                <th>البوفيه</th>
                                <th>الإجمالي</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#INV001</td>
                                <td>بلاي ستيشن 5 (ID: 001)</td>
                                <td>2024-06-25 10:00</td>
                                <td>2024-06-25 11:30</td>
                                <td>1 ساعة 30 دقيقة</td>
                                <td>30.00 جنيه</td>
                                <td>شاي (5.00), قهوة (10.00)</td>
                                <td>45.00 جنيه</td>
                                <td>
                                    <button class="btn-device-details">عرض</button>
                                    <button class="btn-invoice-bofeih">طباعة</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#INV002</td>
                                <td>كمبيوتر جيمينج (ID: 003)</td>
                                <td>2024-06-25 14:00</td>
                                <td>2024-06-25 16:00</td>
                                <td>2 ساعة 00 دقيقة</td>
                                <td>40.00 جنيه</td>
                                <td>بيبسي (7.00)</td>
                                <td>47.00 جنيه</td>
                                <td>
                                    <button class="btn-device-details">عرض</button>
                                    <button class="btn-invoice-bofeih">طباعة</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#INV003</td>
                                <td>بلاي ستيشن 4 (ID: 002)</td>
                                <td>2024-06-24 18:00</td>
                                <td>2024-06-24 19:45</td>
                                <td>1 ساعة 45 دقيقة</td>
                                <td>35.00 جنيه</td>
                                <td>لا يوجد</td>
                                <td>35.00 جنيه</td>
                                <td>
                                    <button class="btn-device-details">عرض</button>
                                    <button class="btn-invoice-bofeih">طباعة</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </main>

    <div id="addDeviceModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h3>إضافة جهاز جديد</h3>
            <form>
                <div class="input-group">
                    <label for="newDeviceType">نوع الجهاز:</label>
                    <input type="text" id="newDeviceType" placeholder="مثل: بلاي ستيشن 5، كمبيوتر جيمينج" required>
                </div>
                <div class="input-group">
                    <label for="newDeviceID">معرف الجهاز (ID):</label>
                    <input type="text" id="newDeviceID" placeholder="معرف فريد للجهاز" required>
                </div>
                <div class="input-group">
                    <label for="deviceHourlyRate">سعر الساعة:</label>
                    <input type="number" id="deviceHourlyRate" placeholder="سعر الساعة بالجنيه" step="0.01" required>
                </div>
                <div class="modal-buttons">
                    <button type="button" class="btn-exit" id="cancelAddDevice">إلغاء</button>
                    <button type="submit" class="btn-save" id="saveNewDevice">حفظ الجهاز</button>
                </div>
            </form>
        </div>
    </div>

    <div id="deviceDetailsModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h3>تفاصيل الجهاز</h3>
            <p><strong>نوع الجهاز:</strong> <span id="modalDeviceType"></span></p>
            <p><strong>معرف الجهاز:</strong> <span id="modalDeviceID"></span></p>
            <p><strong>سعر الساعة:</strong> <span id="modalDeviceHourlyRate"></span> جنيه</p>
            <div class="modal-buttons">
                <button type="button" class="btn-exit" id="closeDeviceDetailsModal">إغلاق</button>
            </div>
        </div>
    </div>

    <div id="invoiceBofeihModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close-btn">&times;</button>
                <h3>فاتورة وبوفيه</h3>
                <span class="device-id-in-modal"></span>
            </div>

            <div class="modal-section invoice-message-section">
                <div class="edit-button-wrapper">
                    <button class="edit-btn" id="editInvoiceMessageBtn"><i class="fas fa-edit"></i> تعديل</button>
                </div>
                <textarea id="invoiceMessage" placeholder="اكتب رسالة ستظهر في الفاتورة هنا..."></textarea>
            </div>

            <div class="modal-section times-section">
                <div class="time-start-display">
                    <p>وقت البدء</p>
                    <span class="time-value">12:00 PM</span>
                </div>
                <div class="timer-display">
                    <div class="m-icon-wrapper">
                        <span class="m-icon">M</span>
                    </div>
                    <div class="timer-items-row">
                        <div class="timer-item-small">
                            <div class="time-circle-small hours-circle-small"><span class="time-value-small">01</span></div>
                            <span class="time-label-small">ساعة</span>
                        </div>
                        <div class="timer-item-small">
                            <div class="time-circle-small minutes-circle-small"><span class="time-value-small">30</span></div>
                            <span class="time-label-small">دقيقة</span>
                        </div>
                    </div>
                </div>
                <div class="time-type-options">
                    <p>نوع الوقت</p>
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="timeType" value="single" checked> فردي
                        </label>
                        <label>
                            <input type="radio" name="timeType" value="multi"> متعدد
                        </label>
                        <label>
                            <input type="radio" name="timeType" value="vip"> VIP
                        </label>
                    </div>
                </div>
                <div class="edit-button-invoice">
                    <button class="edit-btn" id="editTimesBtn"><i class="fas fa-edit"></i> تعديل الأوقات</button>
                </div>
            </div>

            <div class="modal-section bofeih-section">
                <div class="edit-button-wrapper">
                    <button class="edit-btn" id="editBofeihBtn"><i class="fas fa-edit"></i> تعديل البوفيه</button>
                </div>
                <p>تكلفة البوفيه: <span id="bofeihCost">50.00</span> جنيه</p>
            </div>

            <div class="modal-section time-edit-details hidden-section-time-edit">
                <div class="device-info-header">
                    <span id="editTimeDeviceType">PS4</span>
                    <img id="editTimeDeviceLogo" src="path/to/device-logo.png" alt="شعار الجهاز">
                </div>
                <div class="prices-row">
                    <p>سعر الفردي: <span id="editTimeSinglePrice">15.00</span> ج</p>
                    <p>سعر المالتي: <span id="editTimeMultiPrice">20.00</span> ج</p>
                </div>

                <div class="time-inputs-row">
                    <div class="time-input-group">
                        <label for="editTimeStartTime">بداية الوقت</label>
                        <input type="text" id="editTimeStartTime" value="٣:٥٢ ص" readonly>
                    </div>
                    <div class="timer-display-edit">
                        <div class="m-icon-wrapper">
                            <span class="m-icon">M</span>
                        </div>
                        <div class="timer-items-row">
                            <div class="timer-item-small">
                                <div class="time-circle-small hours-circle-small"><span class="time-value-small" id="editTimeHours">01</span></div>
                                <span class="time-label-small">ساعة</span>
                            </div>
                            <div class="timer-item-small">
                                <div class="time-circle-small minutes-circle-small"><span class="time-value-small" id="editTimeMinutes">35</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="time-input-group">
                        <label for="editTimeEndTime">نهاية الوقت</label>
                        <input type="text" id="editTimeEndTime" value="--:-- ص" readonly>
                    </div>
                </div>

                <div class="time-type-options-edit">
                    <p>نوع الوقت</p>
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="editTimeType" value="single" checked> فردي
                        </label>
                        <label>
                            <input type="radio" name="editTimeType" value="multi"> متعدد
                        </label>
                    </div>
                </div>
                <div class="total-sum">
                    مجموع: <span id="editTimeTotalSum">150</span>
                </div>

                <button class="add-new-time-btn"><i class="fas fa-plus-circle"></i> أضف وقت جديد</button>

                <div class="total-summary-display">
                    <p>إجمالي الوقت: <span id="finalTotalTime">32</span></p>
                </div>
                
                <button class="bottom-cancel-btn" id="cancelEditTimeBtn">إلغاء</button>
            </div>

            <div class="modal-section bofeih-edit-details-old hidden-section-bofeih-edit-old">
                <h4>تعديل عناصر البوفيه (القسم القديم)</h4>
                
                <div class="bofeih-item-input">
                    <input type="text" id="bofeihItemNameOld" placeholder="اسم الصنف">
                    <input type="number" id="bofeihItemPriceOld" placeholder="السعر" step="0.01" min="0">
                    <button class="add-bofeih-item-btn" id="addBofeihItemBtnOld"><i class="fas fa-plus"></i> إضافة صنف</button>
                </div>

                <div class="current-bofeih-items">
                    <h5>العناصر المضافة (القسم القديم):</h5>
                    <ul id="bofeihItemsListOld">
                        <li><span class="item-name">شاي</span> <span class="item-price">5.00 ج</span> <button class="delete-item-btn"><i class="fas fa-trash-alt"></i></button></li>
                        <li><span class="item-name">قهوة</span> <span class="item-price">10.00 ج</span> <button class="delete-item-btn"><i class="fas fa-trash-alt"></i></button></li>
                    </ul>
                </div>

                <div class="bofeih-total-cost">
                    إجمالي تكلفة البوفيه (القسم القديم): <span id="bofeihTotalAmountOld">15.00</span> جنيه
                </div>

                <div class="action-buttons">
                    <button class="btn-cancel" id="cancelEditBofeihBtnOld"><i class="fas fa-times-circle"></i> إلغاء</button>
                    <button class="btn-save" id="saveBofeihChangesBtnOld"><i class="fas fa-save"></i> حفظ التغييرات</button>
                </div>
            </div>
            <div class="modal-footer-buttons">
                <button type="button" class="btn-cancel-bottom"><i class="fas fa-times-circle"></i> إلغاء</button>
                <button type="button" class="btn-view-invoice"><i class="fas fa-print"></i> عرض/طباعة الفاتورة</button>
            </div>
        </div>
    </div>

    <div id="bofeihDetailsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close-btn">&times;</button>
                <h3>بوفيه جهاز <span class="device-id-circle" id="bofeihDeviceIdDisplay">4</span></h3>
            </div>
            
            <div class="bofeih-products-container">
                <table class="bofeih-products-table">
                    <thead>
                        <tr>
                            <th>اسم المنتج</th>
                            <th>السعر</th>
                            <th>الكمية</th>
                            <th>الإجمالي</th>
                            <th>الإجراء</th> </tr>
                    </thead>
                    <tbody id="bofeihProductsTableBody">
                        <tr>
                            <td class="item-name">كوكاكولا</td>
                            <td class="item-price">12.00</td>
                            <td class="item-qty">1</td>
                            <td class="item-total">12.00 ج</td>
                            <td><button class="delete-product-btn"><i class="fas fa-trash-alt"></i></button></td>
                        </tr>
                        <tr>
                            <td class="item-name">شيبسي</td>
                            <td class="item-price">5.00</td>
                            <td class="item-qty">2</td>
                            <td class="item-total">10.00 ج</td>
                            <td><button class="delete-product-btn"><i class="fas fa-trash-alt"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="total-bofeih-display">
                <span>إجمالي البوفيه</span>
                <span class="value" id="bofeihTotalSumDisplay">22.00</span>
            </div>

            <div class="bofeih-action-buttons">
                <button class="action-btn add-products-btn" id="addProductsBtn">
                    <i class="fas fa-plus"></i> أضف منتجات
                </button>
                <button class="action-btn add-return-btn" id="addReturnBtn">
                    <i class="fas fa-undo-alt"></i> أضف مرتجع
                </button>
            </div>

            <div class="bofeih-modal-footer">
                <button class="cancel-btn-bottom" id="cancelBofeihDetailsModalBtn">إلغاء</button>
            </div>
        </div>
    </div>

    <div id="addProductToBofeihModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close-btn">&times;</button>
                <h3>إضافة منتجات لجهاز <span class="device-id-circle" id="addProductDeviceIdDisplay"></span></h3>
            </div>
            
            <div class="product-selection-area">
                <div class="search-and-filter">
                    <input type="text" placeholder="بحث عن منتج..." class="search-product-input">
                    <div class="categories">
                        <button class="category-btn active">عصائر</button>
                        <button class="category-btn">صودا</button>
                        <button class="category-btn">مشروبات ساخنة</button>
                    </div>
                </div>
                <div class="product-display-options">
                    <button><i class="fas fa-th-large"></i></button> <button><i class="fas fa-list"></i></button> </div>
                <div class="product-list">
                    <p>قائمة المنتجات ستظهر هنا.</p>
                </div>
            </div>

            <div class="selected-products-summary">
                <h4>المنتجات المضافة للفاتورة</h4>
                <table class="selected-products-table">
                    <thead>
                        <tr>
                            <th>اسم المنتج</th>
                            <th>السعر</th>
                            <th>الكمية</th>
                            <th>الإجمالي</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="selectedProductsTableBody">
                        </tbody>
                </table>
                <div class="total-selected-products">
                    إجمالي: <span id="totalSelectedProductsAmount">0.00</span> ج
                </div>
                <button class="save-selected-products-btn"><i class="fas fa-save"></i> حفظ التعديلات</button>
            </div>

            <div class="modal-footer">
                <button class="cancel-btn-bottom" id="cancelAddProductModalBtn">إلغاء</button>
            </div>
        </div>
    </div>

    <!-- New Invoice View Modal -->
    <div id="invoiceViewModal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close-btn">&times;</span>
                <h3>جهاز <span class="device-id-circle" id="invoiceViewDeviceId">1</span></h3>
            </div>
            <div class="modal-body">
                <div class="invoice-summary">
                    <div class="invoice-summary-item">
                        <span>اجمالي الوقت</span>
                        <span id="invoiceTotalTime">30.00 ج</span>
                    </div>
                    <div class="invoice-summary-item">
                        <span>اجمالي البوفيه</span>
                        <span id="invoiceTotalBofeih">22.00 ج</span>
                    </div>
                    <div class="invoice-summary-item total">
                        <span>الإجمالي</span>
                        <span id="invoiceGrandTotal">52.00 ج</span>
                    </div>
                </div>
                <div class="invoice-actions">
                    <button class="pay-invoice-btn">
                        <i class="fas fa-money-bill-wave"></i> دفع الفاتورة
                    </button>
                    <button class="close-invoice-btn">
                        <i class="fas fa-times"></i> غلق
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- New Payment Modal -->
    <div id="paymentModal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close-btn">&times;</span>
                <h3>فاتورة جهاز <span class="device-id-circle" id="paymentDeviceId">1</span></h3>
            </div>
            <div class="modal-body">
                <div class="payment-method-section">
                    <h4>اختر وسيلة الدفع</h4>
                    <div class="payment-options">
                        <label class="payment-option">
                            <input type="radio" name="paymentMethod" value="cash" checked> نقدا
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="paymentMethod" value="customerCredit"> رصيد عميل
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="paymentMethod" value="split"> تقسيم مدفوعات
                        </label>
                    </div>
                </div>

                <!-- Customer search section (for customer credit) -->
                <div class="customer-search-section">
                    <input type="text" class="customer-search-input" placeholder="ابحث عن العميل...">
                    <div class="customer-info-display">
                        <p>العميل: <span id="customerNameDisplay">محمد أحمد</span></p>
                        <p>الرصيد الحالي: <span class="customer-balance" id="customerBalanceDisplay">150.00</span> ج</p>
                    </div>
                </div>

                <!-- Split payments section -->
                <div class="split-payments-section">
                    <table class="split-payments-table">
                        <thead>
                            <tr>
                                <th>طريقة الدفع</th>
                                <th>المبلغ</th>
                                <th>إجراء</th>
                            </tr>
                        </thead>
                        <tbody id="splitPaymentsTableBody">
                            <!-- Rows will be added dynamically -->
                        </tbody>
                    </table>
                    <button class="add-split-payment-btn" id="addSplitPaymentBtn">
                        <i class="fas fa-plus"></i> إضافة طريقة دفع
                    </button>
                </div>

                <!-- Cash section -->
                <div class="cash-section">
                    <div class="cash-input-group">
                        <label for="cashAmount">المبلغ المدفوع</label>
                        <input type="number" id="cashAmount" placeholder="المبلغ المدفوع" step="0.01" min="0">
                    </div>
                </div>

                <!-- Discount section -->
                <div class="discount-section">
                    <h4>الخصم</h4>
                    <div class="discount-type-options">
                        <label>
                            <input type="radio" name="discountType" value="fixed" checked> مبلغ ثابت
                        </label>
                        <label>
                            <input type="radio" name="discountType" value="percentage"> نسبة مئوية
                        </label>
                    </div>
                    <div class="discount-input-group">
                        <label for="discountAmount">قيمة الخصم</label>
                        <input type="number" id="discountAmount" placeholder="قيمة الخصم" step="0.01" min="0" value="0">
                    </div>
                </div>

                <div class="total-section">
                    الإجمالي: <span id="paymentTotalAmount">52.00</span> ج
                </div>

                <div class="remaining-section">
                    الباقي: <span id="remainingAmount">0.00</span> ج
                </div>

                <div class="payment-actions">
                    <button class="save-payment-btn" id="savePaymentBtn" disabled>
                        <i class="fas fa-save"></i> حفظ الفاتورة
                    </button>
                    <button class="cancel-payment-btn" id="cancelPaymentBtn">
                        <i class="fas fa-times"></i> الغاء
                    </button>
                </div>

                <!-- Print receipt section -->
                <div class="print-receipt-section">
                    <h4>طباعة الإيصال</h4>
                    <div class="print-receipt-options">
                        <button class="print-receipt-btn" id="printReceiptBtn">
                            <i class="fas fa-print"></i> طباعة الإيصال
                        </button>
                        <button class="print-receipt-btn" id="sendReceiptBtn">
                            <i class="fas fa-paper-plane"></i> إرسال بالبريد
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../js/modal.js"></script> 
    <script src="../js/devices-main.js"></script> 
    </body>
</html>