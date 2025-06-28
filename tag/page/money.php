<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TAG PS </title>
    <link rel="stylesheet" href="../css/money.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet">
    <script src="../js/money.js"></script>
</head>
<body>
    <div id="overlay" class="overlay" onclick="toggleSidebar()"></div>

    <div class="sidebar-toggle" onclick="toggleSidebar()">
        <span class="material-icons">menu</span> </div>

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

    <div class="content">
        <div class="top-controls">
            <div class="date-selector-box">
                <span class="date-display">الجمعة، 20 يونيو 2025</span>
                <select>
                    <option>اختار اليوم</option>
                    <option>الخميس، 19 يونيو 2025</option>
                    <option>الأربعاء، 18 يونيو 2025</option>
                </select>
            </div>
            <button id="startNewDayBtn" onclick="toggleShift()">بدء يوم جديد</button>
        </div>

        <div class="financial-data">
            <div class="data-box" id="cashBalance">
                <h3>صافي النقدية</h3>
                <p>0.00</p>
            </div>
            <div class="data-box" id="expenses">
                <h3>المصروفات</h3>
                <p>0.00</p>
                </div>
            <div class="data-box" id="revenues">
                <h3>الإيرادات</h3>
                <p>0.00</p>
                </div>
            <div class="data-box" id="notes">
                <h3>ملاحظات</h3>
                </div>
        </div>

        <div class="tab-controls">
            <button id="revenue-tab" class="tab active" onclick="switchTab('revenue')">الإيرادات</button>
            <button id="expense-tab" class="tab" onclick="switchTab('expense')">المصروفات</button>
        </div>

        <div id="revenue-content" class="tab-content">
            <div id="revenue-categories-grid">
                <div id="revenue-order" class="data-box">
                    <h3>الأوردرات</h3>
                    <p>0.00</p>
                </div>
                <div id="revenue-tables" class="data-box">
                    <h3>فواتير التربيزات</h3>
                    <p>0.00</p>
                </div>
                <div id="revenue-devices" class="data-box">
                    <h3>فواتير الأجهزة</h3>
                    <p>0.00</p>
                </div>
            </div>
            <div class="table-container">
                <table class="main-details-table">
                    <thead>
                        <tr>
                            <th>اسم الإيراد</th>
                            <th>قيمة الإيراد</th>
                            <th>الموظف</th>
                            <th>اسم العميل</th>
                            <th>الوقت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="no-data-row">
                            <td colspan="5" class="no-data-cell">لا يوجد بيانات</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>

        <div id="expense-content" class="tab-content" style="display:none;">
            <div id="expense-returns" class="data-box">
                <h3>المرتجعات</h3>
                <p>0.00</p>
            </div>
             <div class="table-container">
                <table class="main-details-table">
                    <thead>
                        <tr>
                            <th>نوع المصروف</th>
                            <th>اسم المصروف</th>
                            <th>القيمة</th>
                            <th>الوقت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="no-data-row">
                            <td colspan="4" class="no-data-cell">لا يوجد بيانات</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    </div>

    <div id="addExpenseModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal('addExpenseModal')">&times;</span>
            <h3>إضافة مصروف</h3>
            <form>
                <div class="input-group">
                    <label for="expenseType">نوع المصروف</label>
                    <div class="radio-options">
                        <input type="radio" id="expenseTypeFixed" name="expenseType" value="مصروف ثابت" onchange="enableSaveButton('addExpenseModal')">
                        <label for="expenseTypeFixed">مصروف ثابت</label>
                        <input type="radio" id="expenseTypeVariable" name="expenseType" value="مصروف متغير" onchange="enableSaveButton('addExpenseModal')">
                        <label for="expenseTypeVariable">مصروف متغير</label>
                    </div>
                </div>
                <div class="input-group">
                    <label for="addExpenseName">اسم المصروف</label>
                    <input type="text" id="addExpenseName" placeholder="مثال: إيجار، كهرباء، رواتب..." onkeyup="enableSaveButton('addExpenseModal')">
                </div>
                <div class="input-group">
                    <label for="addExpenseAmount">المبلغ</label>
                    <input type="number" id="addExpenseAmount" placeholder="0.00" onkeyup="enableSaveButton('addExpenseModal')">
                </div>
                <div class="modal-buttons">
                    <button type="button" class="btn-exit" onclick="closeModal('addExpenseModal')">الغاء</button>
                    <button type="submit" class="btn-save" onclick="saveExpense()" disabled>حفظ</button>
                </div>
            </form>
        </div>
    </div>

    <div id="addRevenueModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal('addRevenueModal')">&times;</span>
            <h3>اضف ايراد</h3>
            <form>
                <div class="input-group">
                    <label for="revenueType">نوع الايراد</label>
                    <div class="radio-options">
                        <input type="radio" id="revenueTypeStore" name="revenueType" value="محل" onchange="toggleCustomerSelect(); enableSaveButton('addRevenueModal');">
                        <label for="revenueTypeStore">محل</label>
                        <input type="radio" id="revenueTypeCustomer" name="revenueType" value="عميل" onchange="toggleCustomerSelect(); enableSaveButton('addRevenueModal');">
                        <label for="revenueTypeCustomer">عميل</label>
                    </div>
                </div>
                <div class="input-group" id="customerSelectContainer">
                    <select id="customerSelect" style="display: none;" onchange="enableSaveButton('addRevenueModal')">
                        <option value="">اختر العميل</option>
                        <option value="عميل 1">عميل 1</option>
                        <option value="عميل 2">عميل 2</option>
                        <option value="عميل 3">عميل 3</option>
                    </select>
                </div>
                <div class="input-group">
                    <label for="addRevenueName">اسم الايراد</label>
                    <input type="text" id="addRevenueName" placeholder="مثال: فاتورة بيع، خدمة..." onkeyup="enableSaveButton('addRevenueModal')">
                </div>
                <div class="input-group">
                    <label for="addRevenueAmount">المبلغ</label>
                    <input type="number" id="addRevenueAmount" placeholder="0.00" onkeyup="enableSaveButton('addRevenueModal')">
                </div>
                <div class="modal-buttons">
                    <button type="button" class="btn-exit" onclick="closeModal('addRevenueModal')">الغاء</button>
                    <button type="submit" class="btn-save" onclick="saveRevenue()" disabled>حفظ</button>
                </div>
            </form>
        </div>
    </div>

    <div id="addNoteModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal('addNoteModal')">&times;</span>
            <h3>اضف ملاحظة</h3>
            <form>
                <div class="input-group">
                    <label for="addNoteTextarea">الملاحظة</label>
                    <textarea id="addNoteTextarea" placeholder="اكتب ملاحظاتك هنا..." onkeyup="enableSaveButton('addNoteModal')"></textarea>
                </div>
                <div class="modal-buttons">
                    <button type="button" class="btn-exit" onclick="closeModal('addNoteModal')">الغاء</button>
                    <button type="submit" class="btn-save" onclick="saveNote()" disabled>حفظ</button>
                </div>
            </form>
        </div>
    </div>

    <div id="initialCashModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal('initialCashModal')">&times;</span>
            <h3 id="initialCashModalTitle"></h3> <form>
                <div class="input-group">
                    <label for="initialCashAmount">المبلغ</label>
                    <input type="number" id="initialCashAmount" placeholder="0.00" onkeyup="enableSaveButton('initialCashModal')">
                </div>
                <div class="modal-buttons">
                    <button type="button" class="btn-exit" onclick="closeModal('initialCashModal')">الغاء</button>
                    <button type="submit" class="btn-save" onclick="saveInitialCash()" disabled>حفظ</button>
                </div>
            </form>
        </div>
    </div>

</body>
</html>