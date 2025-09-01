// --- Данные категорий ---
const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'relay', name: 'Блоки управления' },
    { id: 'switch', name: 'Выключатели' },
    { id: 'sensor', name: 'Датчики' },
    { id: 'gateway', name: 'Сервер умного дома' },
    { id: 'other', name: 'Сопутствующие товары' }
];

// --- Данные товаров с категориями ---
const products = [
    { id: 1, name: "Сервер умного дома", price: 9980, image: "https://www.hite-pro.ru/wp-content/uploads/2024/11/525AB693-2B9C-42E1-BBAA-7FE8F6E88F1B-1.webp", category: 'gateway' },
    { id: 2, name: "Блок управления Relay-4M", price: 9980, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/product_14_2.webp", category: 'relay' },
    { id: 3, name: "Блок управления Relay-1", price: 3080, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/product_6_3.webp", category: 'relay' },
    { id: 4, name: "Радиовыключатель LE-1", price: 1480, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/product_38_1.webp", category: 'switch' },
    { id: 5, name: "Радиовыключатель LE-2", price: 1780, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/product_35_1.webp", category: 'switch' },
    { id: 6, name: "Блок управления Relay-2", price: 4780, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/product_6_3.webp", category: 'relay' },
    { id: 7, name: "Блок управления Relay-16А", price: 3480, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/product_6_3.webp", category: 'relay' },
    { id: 8, name: "Радиовыключатель SN-R1", price: 2980, image: "https://www.hite-pro.ru/wp-content/uploads/2021/11/product_33_v4_1.webp", category: 'switch' },
    { id: 9, name: "Сервопривод электротермический Valtec", price: 2880, image: "https://www.hite-pro.ru/wp-content/uploads/2022/07/new_product_7_1.webp", category: 'other' },
    { id: 10, name: "Контактор модульный КМ 63А 2NО (2 мод.) EKF PROxima", price: 3641, image: "https://www.hite-pro.ru/wp-content/uploads/2022/02/new_product_9_2.webp", category: 'other' }
];

// --- Состояние ---
let cart = [];
let currentCategory = 'all'; // По умолчанию показываем все товары

// --- DOM элементы ---
const categoriesList = document.getElementById('categoriesList');
const productGrid = document.getElementById('productGrid');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItems = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutButton = document.getElementById('checkoutButton');

// --- Инициализация ---
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts(); // Отображаем товары при загрузке (по умолчанию 'all')
    updateCartUI();
});

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
        categoryButton.addEventListener('click', () => {
            selectCategory(category.id);
        });
        categoriesList.appendChild(categoryButton);
    });
}

// --- Выбор категории ---
function selectCategory(categoryId) {
    currentCategory = categoryId;
    renderCategories(); // Перерисовываем кнопки, чтобы выделить активную
    renderProducts();   // Перерисовываем товары с учетом фильтра
}

// --- Рендеринг товаров (с фильтрацией) ---
function renderProducts() {
    productGrid.innerHTML = '';

    // Фильтруем товары
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
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price.toLocaleString('ru-RU')} ₽</div>
                <div class="button-container" id="button-container-${product.id}">
                    <!-- Кнопка будет заменена скриптом -->
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    updateAllProductButtons();
}

// --- Функция для обновления кнопки конкретного товара ---
function updateProductButton(productId) {
    const container = document.getElementById(`button-container-${productId}`);
    if (!container) return;

    const cartItem = cart.find(item => item.id === productId);
    const quantity = cartItem ? cartItem.quantity : 0;

    if (quantity > 0) {
        container.innerHTML = `
            <div class="quantity-control">
                <button class="quantity-btn-small decrease-local" data-id="${productId}">-</button>
                <span class="quantity-value-local">${quantity}</span>
                <button class="quantity-btn-small increase-local" data-id="${productId}">+</button>
            </div>
        `;
        container.querySelector('.decrease-local').addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            changeQuantity(id, -1);
        });
        container.querySelector('.increase-local').addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            changeQuantity(id, 1);
        });
    } else {
        container.innerHTML = `<button class="add-to-cart-button" data-id="${productId}">В корзину</button>`;
        container.querySelector('.add-to-cart-button').addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });
    }
}

// --- Функция для обновления всех кнопок товаров ---
function updateAllProductButtons() {
    // Обновляем кнопки только для отображаемых товаров
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }

    filteredProducts.forEach(product => {
        updateProductButton(product.id);
    });
}


// --- Функции корзины ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    updateProductButton(productId);
    console.log(`Товар ${product.name} добавлен в корзину.`);
}

function removeFromCart(productId) {
    const initialLength = cart.length;
    cart = cart.filter(item => item.id !== productId);
    
    if (cart.length !== initialLength) {
        updateCartUI();
        updateAllProductButtons(); 
    }
}

function changeQuantity(productId, amount) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
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
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item" data-id="${item.id}">&times;</button>
        `;
        cartItems.appendChild(cartItemElement);
    });

    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            changeQuantity(id, -1);
        });
    });

    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            changeQuantity(id, 1);
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            removeFromCart(id);
        });
    });

    cartTotalPrice.textContent = getCartTotal().toLocaleString('ru-RU');
}

// --- Обработчики событий для модального окна ---
cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderCartItems();
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// --- Оформление заказа ---
checkoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    const total = getCartTotal();
    const itemCount = getCartItemCount();
    alert(`Заказ оформлен! Количество товаров: ${itemCount}, на сумму: ${total.toLocaleString('ru-RU')} ₽`);
    cart = [];
    updateCartUI();
    updateAllProductButtons();
    cartModal.style.display = 'none';
});
