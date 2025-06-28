      document.addEventListener('DOMContentLoaded', function() {
            // Sidebar toggle logic
            const sidebar = document.querySelector('.sidebar');
            const sidebarToggle = document.querySelector('.sidebar-toggle');
            const overlay = document.querySelector('.overlay');

            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
            });

            overlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });

            // Tabs logic (الأجهزة وفواتير الأجهزة) - تم تصحيح هذا الجزء
            const tabs = document.querySelectorAll('.devices-tab');
            const tabContents = document.querySelectorAll('.tab-content-section');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = document.querySelector(tab.dataset.tabTarget);

                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(tc => tc.classList.remove('active')); // إزالة active من كل المحتويات
                    tabContents.forEach(tc => tc.classList.add('hidden-section')); // إخفاء كل المحتويات

                    tab.classList.add('active');
                    target.classList.remove('hidden-section'); // إظهار المحتوى المستهدف
                    target.classList.add('active'); // إضافة active للمحتوى المستهدف (إذا كنت تستخدمها لتنسيق)
                });
            });

            // Set initial tab active
            const initialActiveTab = document.querySelector('.devices-tab.active');
            if (initialActiveTab) {
                const initialTarget = document.querySelector(initialActiveTab.dataset.tabTarget);
                if (initialTarget) {
                    initialTarget.classList.remove('hidden-section');
                    initialTarget.classList.add('active');
                }
            }


            // Modals
            const addDeviceModal = document.getElementById('addDeviceModal');
            const addDeviceBtn = document.getElementById('addDeviceBtn');
            const cancelAddDevice = document.getElementById('cancelAddDevice');
            const saveNewDevice = document.getElementById('saveNewDevice');

            const deviceDetailsModal = document.getElementById('deviceDetailsModal');
            const closeDeviceDetailsModal = document.getElementById('closeDeviceDetailsModal');

            // Open Add Device Modal
            addDeviceBtn.addEventListener('click', () => {
                addDeviceModal.classList.add('active');
            });

            // Close Add Device Modal (using general close-btn for all modals)
            addDeviceModal.querySelector('.close-btn').addEventListener('click', () => {
                addDeviceModal.classList.remove('active');
            });
            cancelAddDevice.addEventListener('click', () => {
                addDeviceModal.classList.remove('active');
            });

            // Handle Save New Device (Placeholder)
            saveNewDevice.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent form submission
                alert('تم حفظ الجهاز الجديد بنجاح (وظيفة وهمية)');
                addDeviceModal.classList.remove('active');
            });

            // Open Device Details Modal
            document.querySelectorAll('.btn-device-details').forEach(button => {
                button.addEventListener('click', function() {
                    const card = this.closest('.device-card');
                    const deviceType = card.querySelector('.device-type').textContent;
                    const deviceId = card.querySelector('.device-id').textContent.replace('ID:', '').trim();
                    // افتراض سعر ساعة هنا (في التطبيق الحقيقي سيتم جلبه من قاعدة البيانات)
                    const hourlyRate = (deviceId === '001' || deviceId === '004') ? '25.00' : '20.00';

                    document.getElementById('modalDeviceType').textContent = deviceType;
                    document.getElementById('modalDeviceID').textContent = deviceId;
                    document.getElementById('modalDeviceHourlyRate').textContent = hourlyRate;

                    deviceDetailsModal.classList.add('active');
                });
            });

            // Close Device Details Modal
            deviceDetailsModal.querySelector('.close-btn').addEventListener('click', () => {
                deviceDetailsModal.classList.remove('active');
            });
            closeDeviceDetailsModal.addEventListener('click', () => {
                deviceDetailsModal.classList.remove('active');
            });


            // Modals related to Invoice & Bofeih
            const invoiceBofeihModal = document.getElementById('invoiceBofeihModal');
            const invoiceMessageSection = document.querySelector('.invoice-message-section');
            const timesSection = document.querySelector('.times-section');
            const bofeihSection = document.querySelector('.bofeih-section');
            const footerButtons = document.querySelector('.modal-footer-buttons');
            const timeEditDetailsSection = document.querySelector('.time-edit-details');
            const bofeihEditDetailsOldSection = document.querySelector('.bofeih-edit-details-old'); // القسم القديم لتعديل البوفيه


            // Main buttons in Invoice & Bofeih Modal
            const editTimesBtn = document.getElementById('editTimesBtn');
            const editBofeihBtn = document.getElementById('editBofeihBtn');

            // New Bofeih Details Modal (from image)
            const bofeihDetailsModal = document.getElementById('bofeihDetailsModal');
            const bofeihDetailsModalCloseBtn = bofeihDetailsModal.querySelector('.close-btn');
            const cancelBofeihDetailsModalBtn = document.getElementById('cancelBofeihDetailsModalBtn');
            const bofeihDeviceIdDisplay = document.getElementById('bofeihDeviceIdDisplay');
            const bofeihProductsTableBody = document.getElementById('bofeihProductsTableBody');
            const bofeihTotalSumDisplay = document.getElementById('bofeihTotalSumDisplay');
            const addProductsBtn = document.getElementById('addProductsBtn');
            const addReturnBtn = document.getElementById('addReturnBtn');

            // New Invoice View Modal elements
            const invoiceViewModal = document.getElementById('invoiceViewModal');
            const invoiceViewModalCloseBtn = invoiceViewModal.querySelector('.close-btn');
            const invoiceViewDeviceId = document.getElementById('invoiceViewDeviceId');
            const invoiceTotalTime = document.getElementById('invoiceTotalTime');
            const invoiceTotalBofeih = document.getElementById('invoiceTotalBofeih');
            const invoiceGrandTotal = document.getElementById('invoiceGrandTotal');
            const payInvoiceBtn = invoiceViewModal.querySelector('.pay-invoice-btn');
            const closeInvoiceBtn = invoiceViewModal.querySelector('.close-invoice-btn');

            // New Payment Modal elements
            const paymentModal = document.getElementById('paymentModal');
            const paymentModalCloseBtn = paymentModal.querySelector('.close-btn');
            const paymentDeviceId = document.getElementById('paymentDeviceId');
            const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
            const customerSearchSection = document.querySelector('.customer-search-section');
            const customerSearchInput = document.querySelector('.customer-search-input');
            const customerInfoDisplay = document.querySelector('.customer-info-display');
            const customerNameDisplay = document.getElementById('customerNameDisplay');
            const customerBalanceDisplay = document.getElementById('customerBalanceDisplay');
            const splitPaymentsSection = document.querySelector('.split-payments-section');
            const splitPaymentsTableBody = document.getElementById('splitPaymentsTableBody');
            const addSplitPaymentBtn = document.getElementById('addSplitPaymentBtn');
            const cashSection = document.querySelector('.cash-section');
            const cashAmountInput = document.getElementById('cashAmount');
            const discountAmountInput = document.getElementById('discountAmount');
            const paymentTotalAmount = document.getElementById('paymentTotalAmount');
            const remainingAmount = document.getElementById('remainingAmount');
            const remainingSection = document.querySelector('.remaining-section');
            const savePaymentBtn = document.getElementById('savePaymentBtn');
            const cancelPaymentBtn = document.getElementById('cancelPaymentBtn');
            const printReceiptSection = document.querySelector('.print-receipt-section');
            const printReceiptBtn = document.getElementById('printReceiptBtn');
            const sendReceiptBtn = document.getElementById('sendReceiptBtn');

            // Function to open Invoice & Bofeih Modal
            document.querySelectorAll('.btn-invoice-bofeih').forEach(button => {
                button.addEventListener('click', function() {
                    const card = this.closest('.device-card');
                    const deviceId = card.querySelector('.device-id').textContent.replace('ID:', '').trim();

                    invoiceBofeihModal.classList.add('active');
                    // Ensure original sections are visible when modal opens for the first time
                    invoiceMessageSection.classList.remove('hidden-section');
                    timesSection.classList.remove('hidden-section');
                    bofeihSection.classList.remove('hidden-section');
                    footerButtons.classList.remove('hidden-section');
                    // Hide edit sections
                    timeEditDetailsSection.classList.add('hidden-section-time-edit');
                    bofeihEditDetailsOldSection.classList.add('hidden-section-bofeih-edit-old');

                    document.querySelector('.device-id-in-modal').textContent = `جهاز ${deviceId}`;
                    // Here you can fetch and display invoice and bofeih data for this device
                });
            });

            // Close Invoice & Bofeih Modal
            invoiceBofeihModal.querySelector('.close-btn').addEventListener('click', function() {
                invoiceBofeihModal.classList.remove('active');
            });
            document.querySelector('.btn-cancel-bottom').addEventListener('click', function() {
                 invoiceBofeihModal.classList.remove('active');
            });


            // Logic for editing times
            const cancelEditTimeBtn = document.getElementById('cancelEditTimeBtn');

            editTimesBtn.addEventListener('click', function() {
                // Hide other sections in Invoice & Bofeih Modal
                invoiceMessageSection.classList.add('hidden-section');
                bofeihSection.classList.add('hidden-section');
                footerButtons.classList.add('hidden-section');
                this.closest('.times-section').classList.add('hidden-section'); // Hide original times section
                bofeihEditDetailsOldSection.classList.add('hidden-section-bofeih-edit-old'); // Ensure old bofeih section is hidden

                // Show time edit section
                timeEditDetailsSection.classList.remove('hidden-section-time-edit');

                // Update device ID in modal header to match device ID
                const currentDeviceId = document.querySelector('.device-id-in-modal').textContent.replace('جهاز ', '');
                document.querySelector('.modal-header .device-id-in-modal').textContent = `جهاز ${currentDeviceId}`;

                // ... (update time edit section data here) ...
            });

            cancelEditTimeBtn.addEventListener('click', function() {
                // Hide time edit section
                timeEditDetailsSection.classList.add('hidden-section-time-edit');

                // Show original sections
                invoiceMessageSection.classList.remove('hidden-section');
                bofeihSection.classList.remove('hidden-section');
                footerButtons.classList.remove('hidden-section');
                timesSection.classList.remove('hidden-section');
            });


            // Logic for the OLD Bofeih edit section (kept but not actively used by editBofeihBtn)
            // You can uncomment and modify this if you ever need to use this section directly for other purposes
            /*
            const addBofeihItemBtnOld = document.getElementById('addBofeihItemBtnOld');
            const bofeihItemNameInputOld = document.getElementById('bofeihItemNameOld');
            const bofeihItemPriceInputOld = document.getElementById('bofeihItemPriceOld');
            const bofeihItemsListOld = document.getElementById('bofeihItemsListOld');
            const bofeihTotalAmountOldSpan = document.getElementById('bofeihTotalAmountOld');
            const cancelEditBofeihBtnOld = document.getElementById('cancelEditBofeihBtnOld');

            function calculateBofeihTotalOld() {
                let total = 0;
                bofeihItemsListOld.querySelectorAll('li').forEach(itemLi => {
                    const priceText = itemLi.querySelector('.item-price').textContent;
                    const price = parseFloat(priceText.replace(' ج', ''));
                    if (!isNaN(price)) {
                        total += price;
                    }
                });
                bofeihTotalAmountOldSpan.textContent = total.toFixed(2);
            }

            addBofeihItemBtnOld.addEventListener('click', function() {
                const itemName = bofeihItemNameInputOld.value.trim();
                const itemPrice = parseFloat(bofeihItemPriceInputOld.value);

                if (itemName && !isNaN(itemPrice) && itemPrice >= 0) {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <span class="item-name">${itemName}</span>
                        <span class="item-price">${itemPrice.toFixed(2)} ج</span>
                        <button class="delete-item-btn"><i class="fas fa-trash-alt"></i></button>
                    `;
                    bofeihItemsListOld.appendChild(listItem);
                    listItem.querySelector('.delete-item-btn').addEventListener('click', function() {
                        listItem.remove();
                        calculateBofeihTotalOld();
                    });
                    bofeihItemNameInputOld.value = '';
                    bofeihItemPriceInputOld.value = '';
                    calculateBofeihTotalOld();
                } else {
                    alert('يرجى إدخال اسم وسعر صالحين للصنف.');
                }
            });

            bofeihItemsListOld.querySelectorAll('.delete-item-btn').forEach(button => {
                button.addEventListener('click', function() {
                    button.closest('li').remove();
                    calculateBofeihTotalOld();
                });
            });

            cancelEditBofeihBtnOld.addEventListener('click', function() {
                bofeihEditDetailsOldSection.classList.add('hidden-section-bofeih-edit-old');
                invoiceMessageSection.classList.remove('hidden-section');
                timesSection.classList.remove('hidden-section');
                bofeihSection.classList.remove('hidden-section');
                footerButtons.classList.remove('hidden-section');
            });
            */


            // New logic: Open and Close the new Bofeih Details Modal (from image_f0fd1d.png)
            editBofeihBtn.addEventListener('click', function() {
                // Close the main Invoice & Bofeih modal
                invoiceBofeihModal.classList.remove('active');

                // Open the new Bofeih Details modal
                bofeihDetailsModal.classList.add('active');

                // Update device ID in the header of the new Bofeih modal
                const currentDeviceId = document.querySelector('.device-id-in-modal').textContent.replace('جهاز ', '');
                bofeihDeviceIdDisplay.textContent = currentDeviceId;

                // *** Here, you would fetch and display the actual bofeih product data for this device ***
                // For now, we'll populate it with dummy data and calculate the total
                updateBofeihProductsTable([
                    { name: "كوكاكولا", price: 12.00, qty: 1 },
                    { name: "شيبسي", price: 5.00, qty: 2 },
                    { name: "عصير برتقال", price: 8.00, qty: 1 }
                ]);
            });

            // Close the new Bofeih modal (and return to Invoice & Bofeih modal)
            bofeihDetailsModalCloseBtn.addEventListener('click', function() {
                bofeihDetailsModal.classList.remove('active');
                invoiceBofeihModal.classList.add('active'); // Re-open Invoice & Bofeih modal
            });

            cancelBofeihDetailsModalBtn.addEventListener('click', function() {
                bofeihDetailsModal.classList.remove('active');
                invoiceBofeihModal.classList.add('active'); // Re-open Invoice & Bofeih modal
            });

            // Function to update the products table and calculate total
            function updateBofeihProductsTable(products) {
                bofeihProductsTableBody.innerHTML = ''; // Clear table first
                let totalBofeihAmount = 0;

                products.forEach(product => {
                    const row = bofeihProductsTableBody.insertRow();
                    const itemTotal = product.price * product.qty;
                    totalBofeihAmount += itemTotal;

                    row.innerHTML = `
                        <td class="item-name">${product.name}</td>
                        <td class="item-price">${product.price.toFixed(2)}</td>
                        <td class="item-qty">${product.qty}</td>
                        <td class="item-total">${itemTotal.toFixed(2)} ج</td>
                        <td><button class="delete-product-btn"><i class="fas fa-trash-alt"></i></button></td>
                    `;
                    // Add event listener for delete button for each row
                    row.querySelector('.delete-product-btn').addEventListener('click', function() {
                        row.remove();
                        // Recalculate total after deletion
                        updateBofeihTotalDisplay();
                    });
                });
                updateBofeihTotalDisplay(totalBofeihAmount); // Update total after adding all products
            }

            // Separate function to update only the displayed total (used after deletion, for example)
            function updateBofeihTotalDisplay(initialTotal = null) {
                let currentTotal = initialTotal !== null ? initialTotal : 0;
                if (initialTotal === null) {
                    bofeihProductsTableBody.querySelectorAll('tr').forEach(row => {
                        const itemTotalText = row.querySelector('.item-total').textContent;
                        const itemTotal = parseFloat(itemTotalText.replace(' ج', ''));
                        if (!isNaN(itemTotal)) {
                            currentTotal += itemTotal;
                        }
                    });
                }
                bofeihTotalSumDisplay.textContent = currentTotal.toFixed(2);
            }

            // --- START of New Add Product Modal Logic ---
            const addProductToBofeihModal = document.getElementById('addProductToBofeihModal');
            const addProductToBofeihModalCloseBtn = addProductToBofeihModal.querySelector('.close-btn');
            const cancelAddProductModalBtn = document.getElementById('cancelAddProductModalBtn');
            const addProductDeviceIdDisplay = document.getElementById('addProductDeviceIdDisplay');
            const saveSelectedProductsBtn = document.querySelector('.save-selected-products-btn');

            // Elements for product selection area
            const searchProductInput = addProductToBofeihModal.querySelector('.search-product-input');
            const categoryButtons = addProductToBofeihModal.querySelectorAll('.category-btn');
            const productListDiv = addProductToBofeihModal.querySelector('.product-list');
            const selectedProductsTableBody = document.getElementById('selectedProductsTableBody');
            const totalSelectedProductsAmountSpan = document.getElementById('totalSelectedProductsAmount');

            // Dummy Product Data
            const allProducts = [
                // عصائر
                { id: 'juice001', name: 'عصير برتقال', category: 'عصائر', price: 15.00 },
                { id: 'juice002', name: 'عصير تفاح', category: 'عصائر', price: 15.00 },
                { id: 'juice003', name: 'عصير مانجو', category: 'عصائر', price: 20.00 },
                { id: 'juice004', name: 'عصير فراولة', category: 'عصائر', price: 18.00 },
                // صودا
                { id: 'soda001', name: 'كوكاكولا', category: 'صودا', price: 10.00 },
                { id: 'soda002', name: 'بيبسي', category: 'صودا', price: 10.00 },
                { id: 'soda003', name: 'سفن أب', category: 'صودا', price: 9.00 },
                { id: 'soda004', name: 'سبرايت', category: 'صودا', price: 9.00 },
                // مشروبات ساخنة
                { id: 'hot001', name: 'قهوة', category: 'مشروبات ساخنة', price: 12.00 },
                { id: 'hot002', name: 'شاي', category: 'مشروبات ساخنة', price: 8.00 },
                { id: 'hot003', name: 'نسكافيه', category: 'مشروبات ساخنة', price: 15.00 },
                { id: 'hot004', name: 'هوت شوكليت', category: 'مشروبات ساخنة', price: 22.00 }
            ];

            function renderProducts(productsToRender) {
                productListDiv.innerHTML = ''; // Clear current products
                if (productsToRender.length === 0) {
                    productListDiv.innerHTML = '<p style="text-align: center; color: #777;">لا توجد منتجات مطابقة.</p>';
                    return;
                }

                productsToRender.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');
                    productCard.dataset.productId = product.id;
                    productCard.innerHTML = `
                        <p class="product-name">${product.name}</p>
                        <p class="product-price">${product.price.toFixed(2)} ج</p>
                        <button class="add-product-to-selection-btn" 
                                data-product-id="${product.id}"
                                data-product-name="${product.name}"
                                data-product-price="${product.price}">
                            أضف <i class="fas fa-cart-plus"></i>
                        </button>
                    `;
                    productListDiv.appendChild(productCard);
                });

                // Add event listeners for new "Add" buttons
                productListDiv.querySelectorAll('.add-product-to-selection-btn').forEach(button => {
                    button.addEventListener('click', addProductToSelectedList);
                });
            }

            function addProductToSelectedList(event) {
                const productId = event.currentTarget.dataset.productId;
                const productName = event.currentTarget.dataset.productName;
                const productPrice = parseFloat(event.currentTarget.dataset.productPrice);

                // Check if product already exists in selected list
                const existingRow = selectedProductsTableBody.querySelector(`tr[data-product-id="${productId}"]`);

                if (existingRow) {
                    // Increment quantity
                    const qtyInput = existingRow.querySelector('.item-qty input');
                    qtyInput.value = parseInt(qtyInput.value) + 1;
                    updateSelectedProductRowTotal(qtyInput);
                } else {
                    // Add new row
                    const row = selectedProductsTableBody.insertRow();
                    row.dataset.productId = productId;
                    row.innerHTML = `
                        <td class="item-name">${product.name}</td>
                        <td class="item-price">${product.price.toFixed(2)}</td>
                        <td class="item-qty"><input type="number" value="1" min="1" data-product-price="${product.price}" class="qty-input"></td>
                        <td class="item-total">${product.price.toFixed(2)} ج</td>
                        <td><button class="delete-selected-product-btn"><i class="fas fa-trash-alt"></i></button></td>
                    `;

                    // Attach event listeners to new row elements
                    row.querySelector('.qty-input').addEventListener('input', function() {
                        if (this.value < 1) this.value = 1; // Ensure quantity is at least 1
                        updateSelectedProductRowTotal(this);
                    });
                    row.querySelector('.delete-selected-product-btn').addEventListener('click', function() {
                        this.closest('tr').remove();
                        updateSelectedProductsTotal();
                    });
                }
                updateSelectedProductsTotal();
            }

            function updateSelectedProductRowTotal(qtyInput) {
                const row = qtyInput.closest('tr');
                const price = parseFloat(qtyInput.dataset.productPrice);
                const quantity = parseInt(qtyInput.value);
                const itemTotal = price * quantity;
                row.querySelector('.item-total').textContent = `${itemTotal.toFixed(2)} ج`;
                updateSelectedProductsTotal();
            }

            function updateSelectedProductsTotal() {
                let total = 0;
                selectedProductsTableBody.querySelectorAll('tr').forEach(row => {
                    const itemTotalText = row.querySelector('.item-total').textContent;
                    const itemTotal = parseFloat(itemTotalText.replace(' ج', ''));
                    if (!isNaN(itemTotal)) {
                        total += itemTotal;
                    }
                });
                totalSelectedProductsAmountSpan.textContent = total.toFixed(2);
            }

            // Category filtering
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    searchProductInput.value = ''; // Clear search when category changes

                    const category = this.textContent;
                    const filteredProducts = allProducts.filter(product => product.category === category);
                    renderProducts(filteredProducts);
                });
            });

            // Search functionality
            searchProductInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                categoryButtons.forEach(btn => btn.classList.remove('active')); // Deactivate category buttons
                
                const filteredProducts = allProducts.filter(product => 
                    product.name.toLowerCase().includes(searchTerm)
                );
                renderProducts(filteredProducts);
            });


            // Existing addProductsBtn handler (modified)
            addProductsBtn.addEventListener('click', function() {
                bofeihDetailsModal.classList.remove('active'); // Hide the previous bofeih details modal
                addProductToBofeihModal.classList.add('active');

                // Pass device ID
                const currentDeviceId = bofeihDeviceIdDisplay.textContent; // Get ID from the bofeihDetailsModal
                addProductDeviceIdDisplay.textContent = currentDeviceId;

                // Clear previously selected products in the add product modal and reset total
                selectedProductsTableBody.innerHTML = '';
                totalSelectedProductsAmountSpan.textContent = '0.00';
                
                // Render all products initially when opening the modal, and activate the first category
                searchProductInput.value = ''; // Clear search input
                categoryButtons.forEach((btn, index) => {
                    btn.classList.remove('active');
                    if (index === 0) {
                        btn.classList.add('active'); // Activate first category by default
                        renderProducts(allProducts.filter(p => p.category === btn.textContent));
                    }
                });
            });

            // Close Add Product to Bofeih Modal (X button)
            addProductToBofeihModalCloseBtn.addEventListener('click', function() {
                addProductToBofeihModal.classList.remove('active');
                bofeihDetailsModal.classList.add('active'); // Go back to the bofeihDetailsModal
            });

            // Close Add Product to Bofeih Modal (إلغاء button)
            cancelAddProductModalBtn.addEventListener('click', function() {
                addProductToBofeihModal.classList.remove('active');
                bofeihDetailsModal.classList.add('active'); // Go back to the bofeihDetailsModal
            });

            // Save Selected Products (Placeholder)
            if (saveSelectedProductsBtn) {
                saveSelectedProductsBtn.addEventListener('click', function() {
                    const selectedItems = [];
                    selectedProductsTableBody.querySelectorAll('tr').forEach(row => {
                        const productId = row.dataset.productId;
                        const productName = row.querySelector('.item-name').textContent;
                        const productPrice = parseFloat(row.querySelector('.item-price').textContent);
                        const productQty = parseInt(row.querySelector('.item-qty input').value);
                        selectedItems.push({ id: productId, name: productName, price: productPrice, qty: productQty });
                    });

                    alert('تم حفظ المنتجات المضافة (وهمي):\n' + JSON.stringify(selectedItems, null, 2));
                    
                    // Here you would integrate these selectedItems back into the main bofeih data
                    // For now, let's update the bofeihDetailsModal's table with these selected items
                    updateBofeihProductsTable(selectedItems); // This will replace existing items in bofeihDetailsModal
                    
                    addProductToBofeihModal.classList.remove('active');
                    bofeihDetailsModal.classList.add('active'); // Go back to the bofeihDetailsModal
                });
            }
            // --- END of New Add Product Modal Logic ---

            // New Invoice View Modal Logic
            document.querySelector('.btn-view-invoice').addEventListener('click', function() {
                // Close the main Invoice & Bofeih modal
                invoiceBofeihModal.classList.remove('active');
                
                // Get device ID from the modal
                const currentDeviceId = document.querySelector('.device-id-in-modal').textContent.replace('جهاز ', '');
                invoiceViewDeviceId.textContent = currentDeviceId;
                
                // Set dummy values for the invoice (in a real app, these would come from your data)
                invoiceTotalTime.textContent = '30.00 ج';
                invoiceTotalBofeih.textContent = '22.00 ج';
                invoiceGrandTotal.textContent = '52.00 ج';
                
                // Show the invoice view modal
                invoiceViewModal.classList.add('active');
            });

            // Close Invoice View Modal
            invoiceViewModalCloseBtn.addEventListener('click', function() {
                invoiceViewModal.classList.remove('active');
            });

            closeInvoiceBtn.addEventListener('click', function() {
                invoiceViewModal.classList.remove('active');
            });

            // Payment Modal Logic
            payInvoiceBtn.addEventListener('click', function() {
                // Close the invoice view modal
                invoiceViewModal.classList.remove('active');
                
                // Get device ID and total amount from the invoice view
                const deviceId = invoiceViewDeviceId.textContent;
                const totalAmount = invoiceGrandTotal.textContent.replace(' ج', '');
                
                // Open the payment modal
                paymentModal.classList.add('active');
                paymentDeviceId.textContent = deviceId;
                paymentTotalAmount.textContent = totalAmount;
                
                // Reset payment form
                cashAmountInput.value = '';
                discountAmountInput.value = '0';
                remainingSection.classList.remove('active');
                
                // Hide all payment method sections initially
                customerSearchSection.classList.remove('active');
                splitPaymentsSection.classList.remove('active');
                cashSection.classList.remove('active');
                printReceiptSection.classList.remove('active');
                
                // Set focus on cash amount input
                cashAmountInput.focus();
                
                // Disable save button until payment is valid
                savePaymentBtn.disabled = true;
            });

            // Close Payment Modal
            paymentModalCloseBtn.addEventListener('click', function() {
                paymentModal.classList.remove('active');
                invoiceViewModal.classList.add('active'); // Return to invoice view
            });

            cancelPaymentBtn.addEventListener('click', function() {
                paymentModal.classList.remove('active');
                invoiceViewModal.classList.add('active'); // Return to invoice view
            });

            // Payment method selection
            paymentMethodRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    // Hide all sections first
                    customerSearchSection.classList.remove('active');
                    splitPaymentsSection.classList.remove('active');
                    cashSection.classList.remove('active');
                    
                    // Show relevant section based on selected payment method
                    if (this.value === 'cash') {
                        cashSection.classList.add('active');
                    } else if (this.value === 'customerCredit') {
                        customerSearchSection.classList.add('active');
                        customerSearchInput.focus();
                    } else if (this.value === 'split') {
                        splitPaymentsSection.classList.add('active');
                        // Clear any existing split payments
                        splitPaymentsTableBody.innerHTML = '';
                    }
                    
                    // Recalculate payment
                    calculatePayment();
                });
            });
            
            // Customer search functionality (placeholder)
            customerSearchInput.addEventListener('input', function() {
                const searchTerm = this.value.trim();
                if (searchTerm.length > 2) {
                    // In a real app, you would search your database for customers
                    // For demo, we'll just show some dummy results
                    customerInfoDisplay.classList.add('active');
                    customerNameDisplay.textContent = 'محمد أحمد'; // Dummy name
                    customerBalanceDisplay.textContent = '150.00'; // Dummy balance
                    
                    // Enable/disable save button based on customer balance
                    const totalAmount = parseFloat(paymentTotalAmount.textContent);
                    const customerBalance = parseFloat(customerBalanceDisplay.textContent);
                    savePaymentBtn.disabled = customerBalance < totalAmount;
                } else {
                    customerInfoDisplay.classList.remove('active');
                    savePaymentBtn.disabled = true;
                }
            });
            
            // Add split payment
            addSplitPaymentBtn.addEventListener('click', function() {
                // In a real app, you would have a modal or dropdown to select payment method
                // For demo, we'll just add a row with a fixed method
                const row = splitPaymentsTableBody.insertRow();
                row.innerHTML = `
                    <td>
                        <select class="split-payment-method">
                            <option value="cash">نقدا</option>
                            <option value="credit">رصيد عميل</option>
                            <option value="card">بطاقة ائتمان</option>
                        </select>
                    </td>
                    <td><input type="number" class="split-payment-amount" placeholder="المبلغ" step="0.01" min="0"></td>
                    <td><button class="delete-split-payment-btn"><i class="fas fa-trash-alt"></i></button></td>
                `;
                
                // Add event listeners for the new row
                row.querySelector('.split-payment-amount').addEventListener('input', calculatePayment);
                row.querySelector('.delete-split-payment-btn').addEventListener('click', function() {
                    row.remove();
                    calculatePayment();
                });
            });
            
            // Calculate remaining amount when cash amount changes
            cashAmountInput.addEventListener('input', function() {
                calculatePayment();
            });

            // Calculate remaining amount when discount changes
            discountAmountInput.addEventListener('input', function() {
                calculatePayment();
            });
            
            // Discount type change
            document.querySelectorAll('input[name="discountType"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    calculatePayment();
                });
            });

            function calculatePayment() {
                const totalAmount = parseFloat(paymentTotalAmount.textContent);
                let discountAmount = parseFloat(discountAmountInput.value) || 0;
                const discountType = document.querySelector('input[name="discountType"]:checked').value;
                
                // Calculate discount based on type
                if (discountType === 'percentage') {
                    // Ensure percentage is between 0-100
                    discountAmount = Math.min(100, Math.max(0, discountAmount));
                    const discountValue = totalAmount * (discountAmount / 100);
                    discountAmountInput.value = discountAmount; // Show percentage value
                    discountAmount = discountValue; // Use calculated value
                }
                
                const discountedTotal = totalAmount - discountAmount;
                
                // Calculate paid amount based on payment method
                let paidAmount = 0;
                const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
                
                if (paymentMethod === 'cash') {
                    paidAmount = parseFloat(cashAmountInput.value) || 0;
                } 
                else if (paymentMethod === 'customerCredit') {
                    // For customer credit, check if customer is selected and has enough balance
                    if (customerInfoDisplay.classList.contains('active')) {
                        const customerBalance = parseFloat(customerBalanceDisplay.textContent);
                        paidAmount = Math.min(customerBalance, discountedTotal);
                    }
                }
                else if (paymentMethod === 'split') {
                    // Sum all split payments
                    paidAmount = 0;
                    splitPaymentsTableBody.querySelectorAll('.split-payment-amount').forEach(input => {
                        paidAmount += parseFloat(input.value) || 0;
                    });
                }
                
                const remaining = paidAmount - discountedTotal;
                
                // Update UI
                if (!isNaN(remaining)) {
                    remainingAmount.textContent = Math.abs(remaining).toFixed(2);
                    remainingSection.classList.add('active');
                    
                    if (remaining < 0) {
                        remainingSection.classList.add('negative');
                        remainingSection.innerHTML = `المتبقي: <span>${Math.abs(remaining).toFixed(2)}</span> ج`;
                    } else {
                        remainingSection.classList.remove('negative');
                        remainingSection.innerHTML = `الباقي: <span>${remaining.toFixed(2)}</span> ج`;
                    }
                    
                    // Enable/disable save button based on payment completion
                    savePaymentBtn.disabled = remaining < 0;
                } else {
                    remainingSection.classList.remove('active');
                    savePaymentBtn.disabled = true;
                }
                
                // Show print receipt section when payment is complete
                if (remaining >= 0 && paidAmount > 0) {
                    printReceiptSection.classList.add('active');
                } else {
                    printReceiptSection.classList.remove('active');
                }
            }

            // Save Payment (Placeholder)
            savePaymentBtn.addEventListener('click', function() {
                const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
                const totalAmount = parseFloat(paymentTotalAmount.textContent);
                let discountAmount = parseFloat(discountAmountInput.value) || 0;
                const discountType = document.querySelector('input[name="discountType"]:checked').value;
                
                // Recalculate discount for percentage type
                if (discountType === 'percentage') {
                    discountAmount = totalAmount * (discountAmount / 100);
                }
                
                const discountedTotal = totalAmount - discountAmount;
                
                // Collect payment details based on method
                let paymentDetails = {};
                if (paymentMethod === 'cash') {
                    const cashAmount = parseFloat(cashAmountInput.value) || 0;
                    paymentDetails = {
                        method: 'cash',
                        amount: cashAmount,
                        change: cashAmount - discountedTotal
                    };
                } 
                else if (paymentMethod === 'customerCredit') {
                    paymentDetails = {
                        method: 'customerCredit',
                        customerName: customerNameDisplay.textContent,
                        previousBalance: parseFloat(customerBalanceDisplay.textContent),
                        amount: discountedTotal,
                        newBalance: parseFloat(customerBalanceDisplay.textContent) - discountedTotal
                    };
                }
                else if (paymentMethod === 'split') {
                    const splitPayments = [];
                    splitPaymentsTableBody.querySelectorAll('tr').forEach(row => {
                        splitPayments.push({
                            method: row.querySelector('.split-payment-method').value,
                            amount: parseFloat(row.querySelector('.split-payment-amount').value) || 0
                        });
                    });
                    paymentDetails = {
                        method: 'split',
                        payments: splitPayments,
                        total: discountedTotal
                    };
                }
                
                // Here you would process the payment (save to database, etc.)
                alert(`تم حفظ الدفع بنجاح (وظيفة وهمية)\n\nالطريقة: ${paymentMethod}\nالإجمالي: ${totalAmount.toFixed(2)}\nالخصم: ${discountAmount.toFixed(2)}\nالمدفوع: ${discountedTotal.toFixed(2)}\n\nالتفاصيل:\n${JSON.stringify(paymentDetails, null, 2)}`);
                
                // Close all modals
                paymentModal.classList.remove('active');
                invoiceViewModal.classList.remove('active');
                invoiceBofeihModal.classList.remove('active');
            });
            
            // Print receipt button
            printReceiptBtn.addEventListener('click', function() {
                alert('تم إرسال طلب الطباعة إلى الطابعة (وظيفة وهمية)');
                // In a real app, this would generate a printable receipt
            });
            
            // Send receipt button
            sendReceiptBtn.addEventListener('click', function() {
                alert('تم إرسال الإيصال إلى البريد الإلكتروني للعميل (وظيفة وهمية)');
                // In a real app, this would send the receipt via email
            });

            // Placeholder logic for "Add Return" button
            addReturnBtn.addEventListener('click', function() {
                alert('وظيفة "أضف مرتجع" ستضاف هنا!');
                // Here you can implement return logic
            });

            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                // Ctrl+P for print
                if (e.ctrlKey && e.key === 'p') {
                    e.preventDefault();
                    if (printReceiptSection.classList.contains('active')) {
                        printReceiptBtn.click();
                    }
                }
                
                // Enter to save payment when in payment modal
                if (e.key === 'Enter' && paymentModal.classList.contains('active') && !savePaymentBtn.disabled) {
                    savePaymentBtn.click();
                }
            });

        });