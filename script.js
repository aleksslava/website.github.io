// --- Инициализация Telegram Web App ---
let tg = window.Telegram?.WebApp;
let urlParams = { bonuses: 0, userId: null }; // Объект для хранения параметров из URL

if (tg) {
    tg.expand();
    tg.ready();
    console.log("Telegram Web App SDK инициализирован.");
    console.log("TG Init Data:", tg.initData);
    console.log("TG User:", tg.initDataUnsafe?.user);
} else {
    console.warn("Telegram Web App SDK не найден. Работаем в обычном режиме.");
}

// --- Получение бонусов и ID из URL ---
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const bonusParam = urlParams.get('bonus');
    const idParam = urlParams.get('id');
    
    return {
        bonuses: bonusParam ? parseInt(bonusParam, 10) : 0,
        userId: idParam || null // ID будет строкой или null, если не задан
    };
}

// --- Отправка данных в Telegram Bot ---
function sendToTelegramBot(data) {
    if (tg && tg.sendData) {
        try {
            // Преобразуем объект данных в JSON строку
            const jsonData = JSON.stringify(data);
            console.log("Отправка данных в Telegram:", jsonData);
            tg.sendData(jsonData);
            // alert("Данные отправлены в бот!"); // Для тестирования
        } catch (error) {
            console.error("Ошибка при отправке данных в Telegram:", error);
            alert("Не удалось отправить данные в бот. Попробуйте еще раз.");
        }
    } else {
        // Для тестирования в браузере
        console.log("Отправка данных (браузер):", data);
        alert("Данные для отправки:\n" + JSON.stringify(data, null, 2));
    }
}

// --- Данные категорий ---
const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'relay', name: 'Блоки управления' },
    { id: 'switch', name: 'Радиовыключатели' },
    { id: 'server', name: 'Сервер умного дома' },
    { id: 'other', name: 'Сопутствующие' }
];

// --- Данные товаров с модификациями (без остатков) и описанием ---
const products = [
    {
        id: 1, name: "Сервер умного дома Gateway", price: 9980, image: "https://www.hite-pro.ru/wp-content/uploads/2024/11/525AB693-2B9C-42E1-BBAA-7FE8F6E88F1B-1-140x140.webp", category: 'server',
        description: "Сервер умного дома используется для беспроводного управления через приложение HiTE PRO или голосовых помощников Алиса, Siri, Маруся, Салют и Google Assistant. Все блоки управления и датчики HiTE PRO можно связать с сервером Gateway.",
        modifications: [
            { id: '1-server', name: 'Сервер умного дома Gateway', price: 9980 },
        ]
    },
    {
        id: 2, name: "Блок управления Relay-4M", price: 9980, image: "https://www.hite-pro.ru/wp-content/uploads/2023/03/004-htpr-1-140x140.webp", category: 'relay',
        description: "Мастер-устройство модульной системы. Блок радиореле используется для беспроводного управления 4-мя линиями электрической цепи и имеет шину данных для подключения ведомых устройств HiTE PRO Relay-S. Получая сигнал от передатчиков блок замыкает/размыкает электрическую цепь. Монтируется на DIN-рейку в распределительном щите.",
        modifications: [
            { id: '2-relay4m', name: 'Блок управления Relay-4M', price: 9980 }
        ]
    },
    {
        id: 3, name: "Блок управления Relay-1", price: 3080, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/001-htpr-1-2-1-140x140.webp", category: 'relay',
        description: "Компактный одноканальный блок радиореле Relay-1 подключается к светильнику или другому электроприбору, которым нужно управлять с помощью передатчиков или сервера умного дома HiTE PRO. Получая от них сигнал блок Relay-1 замыкает/размыкает электрическую цепь.",
        modifications: [
            { id: '3-220V', name: '220 В', price: 3080 },
            { id: '3-220VC', name: '12 В', price: 3080 },
            { id: '3-12V', name: '220 В сухой контакт', price: 3080 },
            { id: '3-12VC', name: '12 В сухой контакт', price: 3080 }
        ]
    },
    {
        id: 4, name: "Радиовыключатель Base-1", price: 1880, image: "https://www.hite-pro.ru/wp-content/uploads/2023/07/21-800x800.jpg", category: 'switch',
        description: "Одноканальный беспроводной выключатель без фиксации клавиши (звонкового типа).",
        modifications: [
            { id: '4-white', name: 'Белый', price: 1880 },
            { id: '4-yellow', name: 'Бежевый', price: 1880 },
            { id: '4-grey', name: 'Серый', price: 2380 },
            { id: '4-black', name: 'Черный', price: 2380 }
        ]
    },
    {
        id: 5, name: "Радиовыключатель Base-2", price: 2280, image: "https://www.hite-pro.ru/wp-content/uploads/2023/07/18-800x800.jpg", category: 'switch',
        description: "Двухканальный беспроводной выключатель без фиксации клавиши (звонкового типа).",
        modifications: [
            { id: '5-white', name: 'Белый', price: 2280 },
            { id: '5-yellow', name: 'Бежевый', price: 2280 },
            { id: '5-grey', name: 'Серый', price: 2780 },
            { id: '5-black', name: 'Черный', price: 2780 }
        ]
    }
];

// --- Состояние ---
let cart = [];
let currentCategory = 'all';

// --- DOM элементы ---
const categoriesList = document.getElementById('categoriesList');
const productGrid = document.getElementById('productGrid');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItems = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');

// --- Элементы для отображения бонусов ---
const bonusesDisplay = document.getElementById('bonusesDisplay');
const bonusValue = document.getElementById('bonusValue');

// --- Новые DOM элементы для формы корзины ---
// Переключатель
const orderTypeToggle = document.getElementById('orderTypeToggle');
const kpLabel = document.getElementById('kpLabel');
const orderLabel = document.getElementById('orderLabel');
// Секция полей заказа
const orderFieldsSection = document.getElementById('orderFieldsSection');
// Кнопки
const generateKpButton = document.getElementById('generateKpButton');
const checkoutButton = document.getElementById('checkoutButton');

// Поля внутри секции заказа
const recipientPhone = document.getElementById('recipientPhone');
const deliveryMethod = document.getElementById('deliveryMethod');
const deliveryAddressSection = document.getElementById('deliveryAddressSection');
const deliveryAddress = document.getElementById('deliveryAddress');
const deliveryAddressNote = document.getElementById('deliveryAddressNote');
const pickupAddressSection = document.getElementById('pickupAddressSection');
const paymentMethod = document.getElementById('paymentMethod');
const cardPaymentNote = document.getElementById('cardPaymentNote');
const legalInfoSection = document.getElementById('legalInfoSection');
const organizationInn = document.getElementById('organizationInn');
const organizationAddress = document.getElementById('organizationAddress');
const organizationBik = document.getElementById('organizationBik');
const organizationAccount = document.getElementById('organizationAccount');

// --- Новые DOM элементы для модального окна описания ---
const detailsModal = document.getElementById('detailsModal');
const closeDetailsModal = document.getElementById('closeDetailsModal');
const detailsModalImage = document.getElementById('detailsModalImage');
const detailsModalTitle = document.getElementById('detailsModalTitle');
const detailsModalDescription = document.getElementById('detailsModalDescription');

// --- Инициализация ---
document.addEventListener('DOMContentLoaded', () => {
    // Получаем параметры из URL (бонусы и ID пользователя)
    urlParams = getUrlParams();
    // Отображаем бонусы из URL-параметров
    bonusValue.textContent = urlParams.bonuses.toLocaleString('ru-RU');

    renderCategories();
    renderProducts();
    updateCartUI();
    
    deliveryMethod.addEventListener('change', handleDeliveryMethodChange);
    paymentMethod.addEventListener('change', handlePaymentMethodChange);
    recipientPhone.addEventListener('input', formatPhoneNumber);
    orderTypeToggle.addEventListener('change', handleOrderTypeToggleChange);
    generateKpButton.addEventListener('click', handleGenerateKp);
    checkoutButton.addEventListener('click', handleCheckout);
    closeDetailsModal.addEventListener('click', closeProductDetailsModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) {
            closeProductDetailsModal();
        }
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});

// --- Простая маска для телефона ---
function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('7') || value.startsWith('8')) {
        value = value.substring(1);
    }
    value = value.substring(0, 10);

    let formattedValue = '+7 ';
    if (value.length > 0) {
        formattedValue += '(' + value.substring(0, 3);
    }
    if (value.length >= 3) {
        formattedValue += ') ' + value.substring(3, 6);
    }
    if (value.length >= 6) {
        formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length >= 8) {
        formattedValue += '-' + value.substring(8, 10);
    }
    
    e.target.value = formattedValue;
}

// --- Обработчик изменения способа доставки ---
function handleDeliveryMethodChange() {
    const selectedMethod = deliveryMethod.value;
    
    deliveryAddressSection.style.display = 'none';
    pickupAddressSection.style.display = 'none';
    deliveryAddressNote.textContent = '';

    if (selectedMethod === 'courier' || selectedMethod === 'pickup_point') {
        deliveryAddressSection.style.display = 'block';
        if (selectedMethod === 'pickup_point') {
            deliveryAddressNote.textContent = 'Выберите пункт выдачи СДЭК или Яндекс на карте.';
        } else {
            deliveryAddressNote.textContent = '';
        }
        deliveryAddress.placeholder = selectedMethod === 'courier' ? 'Введите адрес доставки' : 'Введите адрес пункта выдачи';
        deliveryAddress.value = '';
    } else if (selectedMethod === 'pickup') {
        pickupAddressSection.style.display = 'block';
    }
}

// --- Обработчик изменения способа оплаты ---
function handlePaymentMethodChange() {
    const selectedMethod = paymentMethod.value;
    
    if (selectedMethod === 'card') {
        cardPaymentNote.style.display = 'block';
    } else {
        cardPaymentNote.style.display = 'none';
    }
    
    if (selectedMethod === 'invoice') {
        legalInfoSection.style.display = 'block';
    } else {
        legalInfoSection.style.display = 'none';
    }
}

// --- Обработчик изменения переключателя КП/Заказ ---
function handleOrderTypeToggleChange() {
    if (orderTypeToggle.checked) {
        orderFieldsSection.style.display = 'block';
        generateKpButton.style.display = 'none';
        checkoutButton.style.display = 'block';
        kpLabel.style.fontWeight = 'normal';
        kpLabel.style.color = 'var(--tg-theme-hint-color)';
        orderLabel.style.fontWeight = 'bold';
        orderLabel.style.color = 'var(--tg-theme-text-color)';
    } else {
        orderFieldsSection.style.display = 'none';
        generateKpButton.style.display = 'block';
        checkoutButton.style.display = 'none';
        kpLabel.style.fontWeight = 'bold';
        kpLabel.style.color = 'var(--tg-theme-text-color)';
        orderLabel.style.fontWeight = 'normal';
        orderLabel.style.color = 'var(--tg-theme-hint-color)';
    }
    resetCartFormFields();
}

// --- Рендеринг категорий ---
function renderCategories() {
    categoriesList.innerHTML = '';
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.className = 'category-button';
        if (category.id === currentCategory) {
            categoryButton.classList.add('active');
        }
        categoryButton.dataset.categoryId = category.id;
        categoryButton.textContent = category.name;
        categoryButton.addEventListener('click', () => selectCategory(category.id));
        categoriesList.appendChild(categoryButton);
    });
}

// --- Выбор категории ---
function selectCategory(categoryId) {
    currentCategory = categoryId;
    renderCategories();
    renderProducts();
}

// --- Рендеринг товаров ---
function renderProducts() {
    productGrid.innerHTML = '';

    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products-message">Товары в этой категории не найдены.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.productId = product.id;

        let modificationsHtml = '';
        if (product.modifications && product.modifications.length > 0) {
            modificationsHtml = `
                <div class="modifications-section">
                    <label class="modification-label">Модификация:</label>
                    <select class="modification-select" id="mod-select-${product.id}">
                        ${product.modifications.map(mod =>
                            `<option value="${mod.id}">${mod.name} - ${mod.price.toLocaleString('ru-RU')} ₽</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        }

        const detailsButtonHtml = `<button class="details-button" data-id="${product.id}">Подробнее</button>`;

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price" id="price-${product.id}">${product.price.toLocaleString('ru-RU')} ₽</div>
                ${modificationsHtml}
                <div class="button-container" id="button-container-${product.id}">
                </div>
                ${detailsButtonHtml}
            </div>
        `;
        productGrid.appendChild(productCard);

        if (product.modifications && product.modifications.length > 0) {
            const modSelect = document.getElementById(`mod-select-${product.id}`);
            modSelect.addEventListener('change', () => {
                updateProductPrice(product.id);
                updateProductButton(product.id);
            });
            updateProductPrice(product.id);
        }

        const detailsButton = productCard.querySelector('.details-button');
        detailsButton.addEventListener('click', () => {
            openProductDetailsModal(product.id);
        });
    });

    updateAllProductButtons();
}

// --- Обновление цены товара ---
function updateProductPrice(productId) {
    const product = products.find(p => p.id == productId);
    if (!product || !product.modifications || product.modifications.length === 0) return;

    const selectElement = document.getElementById(`mod-select-${productId}`);
    if (!selectElement) return;

    const selectedModId = selectElement.value;
    const selectedMod = product.modifications.find(mod => mod.id === selectedModId);

    const priceElement = document.getElementById(`price-${productId}`);
    if (priceElement && selectedMod) {
        priceElement.textContent = `${selectedMod.price.toLocaleString('ru-RU')} ₽`;
    }
}

// --- Получение ID выбранной модификации ---
function getSelectedModificationId(productId) {
    const product = products.find(p => p.id == productId);
    if (!product || !product.modifications || product.modifications.length === 0) {
        return null;
    }
    const selectElement = document.getElementById(`mod-select-${productId}`);
    return selectElement ? selectElement.value : product.modifications[0].id;
}

// --- Функция для обновления кнопки товара ---
function updateProductButton(productId) {
    const container = document.getElementById(`button-container-${productId}`);
    if (!container) return;

    const selectedModId = getSelectedModificationId(productId);
    if (!selectedModId) {
        const cartItem = cart.find(item => item.productId == productId && !item.modificationId);
        const quantity = cartItem ? cartItem.quantity : 0;
        renderQuantityOrAddButton(container, productId, null, quantity);
        return;
    }

    const cartItem = cart.find(item => item.productId == productId && item.modificationId === selectedModId);
    const quantity = cartItem ? cartItem.quantity : 0;
    renderQuantityOrAddButton(container, productId, selectedModId, quantity);
}

// --- Рендеринг кнопки/контрола количества ---
function renderQuantityOrAddButton(container, productId, modificationId, quantity) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    if (quantity > 0) {
        container.innerHTML = `
            <div class="quantity-control">
                <button class="quantity-btn-small decrease-local" data-id="${productId}" data-mod-id="${modificationId || ''}">-</button>
                <span class="quantity-value-local">${quantity}</span>
                <button class="quantity-btn-small increase-local" data-id="${productId}" data-mod-id="${modificationId || ''}">+</button>
            </div>
        `;
        addLocalButtonListeners(productId, modificationId);
    } else {
        container.innerHTML = `
            <button class="add-to-cart-button" 
                    data-id="${productId}" 
                    data-mod-id="${modificationId || ''}">
                В корзину
            </button>
        `;
        container.querySelector('.add-to-cart-button').addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            addToCart(id, modId);
        });
    }
}

// --- Добавление слушателей кнопок +/- ---
function addLocalButtonListeners(productId, modificationId) {
    const container = document.getElementById(`button-container-${productId}`);
    if (!container) return;

    const decreaseBtn = container.querySelector('.decrease-local');
    const increaseBtn = container.querySelector('.increase-local');

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeQuantity(productId, modificationId, -1);
        });
    }
    if (increaseBtn) {
        increaseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            changeQuantity(productId, modificationId, 1);
        });
    }
}

// --- Обновление всех кнопок товаров ---
function updateAllProductButtons() {
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }

    filteredProducts.forEach(product => {
        updateProductButton(product.id);
    });
}

// --- Функции корзины ---
function addToCart(productId, modificationId = null) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    let existingItemIndex = cart.findIndex(item =>
        item.productId == productId && item.modificationId === modificationId
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        const selectedMod = modificationId ? product.modifications.find(m => m.id === modificationId) : null;
        const newItem = {
            productId: product.id,
            modificationId: modificationId,
            name: product.name,
            price: selectedMod ? selectedMod.price : product.price,
            image: product.image,
            quantity: 1,
            modificationName: selectedMod ? selectedMod.name : null
        };
        cart.push(newItem);
    }

    updateCartUI();
    updateProductButton(productId);
    console.log(`Товар ${product.name} добавлен в корзину.`);
}

function removeFromCart(productId, modificationId = null) {
    const initialLength = cart.length;
    cart = cart.filter(item =>
        !(item.productId == productId && item.modificationId === modificationId)
    );
    
    if (cart.length !== initialLength) {
        updateCartUI();
        updateAllProductButtons(); 
    }
}

function changeQuantity(productId, modificationId, amount) {
    const itemIndex = cart.findIndex(item =>
        item.productId == productId && item.modificationId === modificationId
    );
    
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        const newQuantity = item.quantity + amount;

        if (newQuantity <= 0) {
            removeFromCart(productId, modificationId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            updateProductButton(productId);
        }
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// --- Обновление UI корзины ---
function updateCartUI() {
    const itemCount = getCartItemCount();
    cartCount.textContent = itemCount;

    if (cartModal.style.display === 'block') {
        renderCartItems();
    }
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
        cartTotalPrice.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    cart.forEach(item => {
        let displayName = item.name;
        if (item.modificationName) {
            displayName += ` (${item.modificationName})`;
        }

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="item-info">
                <div class="item-name">${displayName}</div>
                <div class="item-price">${item.price.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn decrease" data-id="${item.productId}" data-mod-id="${item.modificationId || ''}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.productId}" data-mod-id="${item.modificationId || ''}">+</button>
            </div>
            <button class="remove-item" data-id="${item.productId}" data-mod-id="${item.modificationId || ''}">&times;</button>
        `;
        cartItems.appendChild(cartItemElement);
    });

    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            changeQuantity(id, modId, -1);
        });
    });

    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            changeQuantity(id, modId, 1);
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const modId = e.target.dataset.modId || null;
            removeFromCart(id, modId);
        });
    });

    cartTotalPrice.textContent = getCartTotal().toLocaleString('ru-RU');
}

// --- Обработчики событий для модального окна корзины ---
cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderCartItems();
    resetCartForm();
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'none';
});

// --- Сброс формы корзины ---
function resetCartForm() {
    orderTypeToggle.checked = false;
    handleOrderTypeToggleChange();
    resetCartFormFields();
}

function resetCartFormFields() {
    recipientPhone.value = '';
    deliveryMethod.value = '';
    deliveryAddress.value = '';
    deliveryAddressNote.textContent = '';
    pickupAddressSection.style.display = 'none';
    deliveryAddressSection.style.display = 'none';
    paymentMethod.value = '';
    cardPaymentNote.style.display = 'none';
    legalInfoSection.style.display = 'none';
    organizationInn.value = '';
    organizationAddress.value = '';
    organizationBik.value = '';
    organizationAccount.value = '';
}

// --- Валидация формы корзины ---
function validateCartForm(isKp = false) {
    // Если это КП, валидация не нужна
    if (isKp) return true;

    let isValid = true;
    let errorMessage = '';

    const phone = recipientPhone.value.trim();
    const delivery = deliveryMethod.value;
    const payment = paymentMethod.value;
    const address = deliveryAddress.value.trim();

    if (!phone) {
        isValid = false;
        errorMessage += 'Укажите телефон получателя.\n';
    } else if (phone.replace(/\D/g, '').length !== 11 || !phone.startsWith('+7')) {
         isValid = false;
         errorMessage += 'Введите корректный номер телефона (+7 ...).\n';
    }

    if (!delivery) {
        isValid = false;
        errorMessage += 'Выберите способ доставки.\n';
    } else if ((delivery === 'courier' || delivery === 'pickup_point') && !address) {
        isValid = false;
        errorMessage += 'Укажите адрес доставки или пункт выдачи.\n';
    }

    if (!payment) {
        isValid = false;
        errorMessage += 'Выберите способ оплаты.\n';
    }

    if (payment === 'invoice') {
        const inn = organizationInn.value.trim();
        const address = organizationAddress.value.trim();
        const bik = organizationBik.value.trim();
        const account = organizationAccount.value.trim();

        if (!inn) {
            isValid = false;
            errorMessage += 'Укажите ИНН организации.\n';
        }
        if (!address) {
            isValid = false;
            errorMessage += 'Укажите юридический адрес организации.\n';
        }
        if (!bik) {
            isValid = false;
            errorMessage += 'Укажите БИК банка.\n';
        }
        if (!account) {
            isValid = false;
            errorMessage += 'Укажите расчетный счет.\n';
        }
    }

    if (!isValid) {
        alert('Пожалуйста, исправьте следующие ошибки:\n' + errorMessage);
    }

    return isValid;
}

// --- Обработчик кнопки "Сформировать КП" ---
function handleGenerateKp(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    // Валидация не требуется для КП
    if (!validateCartForm(true)) {
        return;
    }

    // Подготавливаем данные для отправки
    const kpPayload = {
        type: "commercial_offer", // Тип запроса
        bonuses: urlParams.bonuses, // Бонусы из URL
        userId: urlParams.userId,   // ID пользователя из URL
        items: cart.map(item => ({
            productId: item.productId,
            modificationId: item.modificationId,
            name: item.name,
            modificationName: item.modificationName,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity
        })),
        total: getCartTotal(),
        itemCount: getCartItemCount()
    };

    // Отправляем данные в Telegram бот
    sendToTelegramBot(kpPayload);
    
    // Для демонстрации также показываем alert
    let itemsList = "Товары в коммерческом предложении:\n";
    kpPayload.items.forEach(item => {
        let displayName = item.name;
        if (item.modificationName) {
            displayName += ` (${item.modificationName})`;
        }
        itemsList += `- ${displayName} x ${item.quantity} = ${item.total.toLocaleString('ru-RU')} ₽\n`;
    });
    let kpSummary = `${itemsList}\n---\n`;
    kpSummary += `Итого: ${kpPayload.itemCount} товар(ов) на сумму ${kpPayload.total.toLocaleString('ru-RU')} ₽\n`;
    kpSummary += `Ваши бонусы: ${kpPayload.bonuses.toLocaleString('ru-RU')}\n`;
    if (kpPayload.userId) {
        kpSummary += `ID пользователя: ${kpPayload.userId}\n`;
    }
    kpSummary += "\nКоммерческое предложение сформировано и отправлено в бот!";
    alert(kpSummary);
}

// --- Обработчик кнопки "Оформить заказ" ---
function handleCheckout(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    // Валидация формы заказа
    if (!validateCartForm(false)) {
        return;
    }

    // Подготавливаем данные заказа для отправки
    const orderPayload = {
        type: "order", // Тип запроса
        bonuses: urlParams.bonuses, // Бонусы из URL
        userId: urlParams.userId,   // ID пользователя из URL
        items: cart.map(item => ({
            productId: item.productId,
            modificationId: item.modificationId,
            name: item.name,
            modificationName: item.modificationName,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity
        })),
        total: getCartTotal(),
        itemCount: getCartItemCount(),
        phone: recipientPhone.value,
        deliveryMethod: deliveryMethod.options[deliveryMethod.selectedIndex].text,
        deliveryAddress: (deliveryMethod.value === 'courier' || deliveryMethod.value === 'pickup_point') ? deliveryAddress.value : '',
        pickupAddress: deliveryMethod.value === 'pickup' ? 'г. Москва, ул. Берзарина, д.36, стр.10' : '',
        paymentMethod: paymentMethod.options[paymentMethod.selectedIndex].text,
        paymentDiscountNote: paymentMethod.value === 'card' ? 'Скидка уменьшена на 2% из-за оплаты картой.' : '',
        organizationInn: paymentMethod.value === 'invoice' ? organizationInn.value.trim() : '',
        organizationAddress: paymentMethod.value === 'invoice' ? organizationAddress.value.trim() : '',
        organizationBik: paymentMethod.value === 'invoice' ? organizationBik.value.trim() : '',
        organizationAccount: paymentMethod.value === 'invoice' ? organizationAccount.value.trim() : ''
    };

    // Отправляем данные в Telegram бот
    sendToTelegramBot(orderPayload);
    
    // Для демонстрации также показываем alert
    let itemsList = "Товары в заказе:\n";
    orderPayload.items.forEach(item => {
        let displayName = item.name;
        if (item.modificationName) {
            displayName += ` (${item.modificationName})`;
        }
        itemsList += `- ${displayName} x ${item.quantity} = ${item.total.toLocaleString('ru-RU')} ₽\n`;
    });
    
    let orderSummary = `${itemsList}\n---\n`;
    orderSummary += `Итого: ${orderPayload.itemCount} товар(ов) на сумму ${orderPayload.total.toLocaleString('ru-RU')} ₽\n`;
    orderSummary += `Ваши бонусы: ${orderPayload.bonuses.toLocaleString('ru-RU')}\n`;
    if (orderPayload.userId) {
        orderSummary += `ID пользователя: ${orderPayload.userId}\n`;
    }
    orderSummary += `\nТелефон получателя: ${orderPayload.phone}\n`;
    orderSummary += `Способ доставки: ${orderPayload.deliveryMethod}\n`;
    if (orderPayload.deliveryAddress) {
        orderSummary += `Адрес: ${orderPayload.deliveryAddress}\n`;
    }
    if (orderPayload.pickupAddress) {
        orderSummary += `Адрес самовывоза: ${orderPayload.pickupAddress}\n`;
    }
    orderSummary += `Способ оплаты: ${orderPayload.paymentMethod}\n`;
    if (orderPayload.paymentDiscountNote) {
        orderSummary += `\n${orderPayload.paymentDiscountNote}\n`;
    }
    if (orderPayload.paymentMethod === 'Счет на оплату') {
        orderSummary += `\n---\nДанные организации для счета:\n`;
        orderSummary += `ИНН: ${orderPayload.organizationInn}\n`;
        orderSummary += `Юридический адрес: ${orderPayload.organizationAddress}\n`;
        orderSummary += `БИК: ${orderPayload.organizationBik}\n`;
        orderSummary += `Расчетный счет: ${orderPayload.organizationAccount}\n`;
    }
    orderSummary += "\nЗаказ оформлен и отправлен в бот!";
    alert(orderSummary);
    
    // Очищаем корзину и форму
    cart = [];
    updateCartUI();
    updateAllProductButtons();
    resetCartForm();
    cartModal.style.display = 'none';
}

// --- Функция открытия модального окна с описанием товара ---
function openProductDetailsModal(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    detailsModalImage.src = product.image;
    detailsModalImage.alt = product.name;
    detailsModalTitle.textContent = product.name;
    detailsModalDescription.textContent = product.description;

    detailsModal.style.display = 'block';
}

// --- Функция закрытия модального окна с описанием товара ---
function closeProductDetailsModal() {
    detailsModal.style.display = 'none';
}
