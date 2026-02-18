// --- Инициализация Telegram Web App ---
let tg = window.Telegram?.WebApp;
let urlParams = { bonuses: 0, userId: null, discont: 0 }; // Объект для хранения параметров из URL

if (tg) {
    tg.expand();
    tg.ready();
    console.log("Telegram Web App SDK инициализирован.");
    console.log("TG Init Data:", tg.initData);
    console.log("TG User:", tg.initDataUnsafe?.user);
} else {
    console.warn("Telegram Web App SDK не найден. Работаем в обычном режиме.");
}

// --- Получение бонусов, ID и скидки из URL ---
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const bonusParam = urlParams.get('bonus');
    const idParam = urlParams.get('id');
    const discontParam = urlParams.get('discont'); // Новый параметр

    return {
        bonuses: bonusParam ? parseInt(bonusParam, 10) : 0,
        userId: idParam || null, // ID будет строкой или null, если не задан
        discont: discontParam ? parseFloat(discontParam) : 0 // Парсим как число с плавающей точкой
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
    { id: 'Merch', name: 'Мерч'},
    { id: 'relay', name: 'Блоки управления' },
    { id: 'switch', name: 'Выключатели' },
    { id: 'komplekt', name: 'Комплекты' },
    { id: 'datchiki', name: 'Датчики' },
    { id: 'server', name: 'Сервер умного дома' },
    { id: 'warm_floor', name: 'Теплый пол' },
    { id: 'lock', name: 'Умные замки' },
    { id: 'kran', name: 'Шаровые краны' },
    { id: 'other', name: 'Сопутствующее' },
];
let products = [
    {
        "id":79,
        "name":"Заявка на платное живое обучение в офисе HiTE PRO",
        "price":0.0,
        "image":"https://static.tildacdn.com/stor6639-6335-4539-a130-343937363366/99732103.png",
        "category":"other",
        "description":"Оставьте заявку, если хотите обучиться вживую в офисе HiTE PRO",
        "modifications":[
            {
                "id":"300012",
                "name":"Заявка на платное живое обучение в офисе HiTE PRO",
                "price":0.0,
                "image":"https://static.tildacdn.com/stor6639-6335-4539-a130-343937363366/99732103.png",
                "specifications":{
                    "Дата":"Следите за анонсом"
                },
                "description":"Новое обучение запустим, когда соберем достаточное количество желающих. Поэтому оставьте заявку, если хотите поскорее пройти обучение в офисе HiTE PRO.\n\nПрограмма?\n* 1 день (8 часов)\n* Повторение базовой теории;\n* Подбор оборудования под задачу;\n* Монтаж и базовая настройка блоков управления;\n* Подключение выключателей и датчиков;\n* Регистрация сервера, добавление устройств, интеграция с Алисой.\n\nФормат?\n* Практическая лабораторная работа: учебные стенды, методички и наставник от HiTE PRO. Группа — 10 человек (по 2 участника на стенд).\n\nДля кого?\n* Для тех, кто впервые сталкивается с HiTE PRO или хочет закрепить базу.\nВы сможете «пощупать» оборудование, собрать и настроить систему своими руками — под присмотром опытного сотрудника компании.\n",
                "instructions":{
                    "video":"https://clck.ru/3Q4KbA"
                }
            }
        ]
    },
    {
        "id":1,
        "name":"Стартовый набор партнера ЛАЙТ",
        "price":2980.0,
        "image":"https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg",
        "category":"komplekt",
        "description":"Выключатель и реле – протестируйте Хайт Про у себя дома",
        "modifications":[
            {
                "id":"296594",
                "name":"Белый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg",
                "specifications":{
                    "Блок управления":"Relay-1",
                    "Выключатель":"Base-1 (белый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n1. Установите блок управления;\n2. Свяжите радиовыключатель с блоком управления;\n3. Управляйте светом с помощью беспроводного выключателя.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-1-2",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296596",
                "name":"Бежевый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg",
                "specifications":{
                    "Блок управления":"Relay-1",
                    "Выключатель":"Base-1 (бежевый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n1. Установите блок управления;\n2. Свяжите радиовыключатель с блоком управления;\n3. Управляйте светом с помощью беспроводного выключателя.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-1-2",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296598",
                "name":"Белый с Relay-F",
                "price":2980.0,
                "image":"https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg",
                "specifications":{
                    "Блок управления":"Relay-F1",
                    "Выключатель":"Base-1 (белый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n1. Установите блок управления;\n2. Свяжите радиовыключатель с блоком управления;\n3. Управляйте светом с помощью беспроводного выключателя.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-f1",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296600",
                "name":"Бежевый с Relay-F",
                "price":2980.0,
                "image":"https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg",
                "specifications":{
                    "Блок управления":"Relay-F1",
                    "Выключатель":"Base-1 (бежевый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n1. Установите блок управления;\n2. Свяжите радиовыключатель с блоком управления;\n3. Управляйте светом с помощью беспроводного выключателя.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-f1",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            }
        ]
    },
    {
        "id":2,
        "name":"Стартовый набор партнера БЕЙЗ",
        "price":9980.0,
        "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
        "category":"komplekt",
        "description":"Комплект для первого знакомства с устройствами HiTE PRO",
        "modifications":[
            {
                "id":"296440",
                "name":"Белый выкл с датчиком Smart Water",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Water",
                    "Выключатель":"Base-2 (белый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296442",
                "name":"Бежевый выкл  с датчиком Smart Water",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Water",
                    "Выключатель":"Base-2 (бежевый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296720",
                "name":"Белый выкл  с датчиком Smart Air",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Air",
                    "Выключатель":"Base-2 (белый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296714",
                "name":"Бежевый выкл  с датчиком Smart Air",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Air",
                    "Выключатель":"Base-2 (бежевый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296724",
                "name":"Белый выкл  с датчиком Smart Checker",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Checker",
                    "Выключатель":"Base-2 (белый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296718",
                "name":"Бежевый выкл с датчиком Smart Checker",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Checker",
                    "Выключатель":"Base-2 (бежевый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296722",
                "name":"Белый выкл  с датчиком Smart Motion",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Motion",
                    "Выключатель":"Base-2 (белый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            },
            {
                "id":"296716",
                "name":"Бежевый выкл  с датчиком Smart Motion",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
                "specifications":{
                    "Датчик":"Smart Motion",
                    "Выключатель":"Base-2 (бежевый)"
                },
                "description":"Протестируйте устройства HiTE PRO у себя дома!\n\nПорядок подключения набора:\n1. Установите Relay-F2 за проводной выключатель;\n2. Свяжите радиовыключатель Base-2 и радиомодуль UNI с блоком Relay-F2;\n3. Подключите сервер умного дома, создайте учетную запись;\n4. Добавьте в сервер выключатель, реле, радиомодуль и датчик.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video-140176277_456239585?list=ln-zCmQvFQGm9f2f4pwOI"
                }
            }
        ]
    },
    {
        "id":75,
        "name":"Взломостойкий умный замок KEYWAY SL300",
        "price":24800.0,
        "image":"https://static.tildacdn.com/stor6166-3234-4233-b464-366337636437/99455674.jpg",
        "category":"lock",
        "description":"Получите персональный промокод на скидку 30%",
        "modifications":[
            {
                "id":"306210",
                "name":"бэксет 60мм",
                "price":24800.0,
                "image":"https://static.tildacdn.com/stor6166-3234-4233-b464-366337636437/99455674.jpg",
                "specifications":{},
                "description":"Имеет пять способов разблокировки: по отпечатку пальца, с помощью ключ-карты, ввода пароля, механического ключа или через мобильное приложение.\n\nОснащен полупроводниковым датчиком отпечатка пальца со скоростью срабатывания менее 0,5 секунды. Специальная антивандальная конструкция делает замок взломостойким даже при сносе лицевой панели, а предохранительный ригель обеспечивает дополнительную защиту.\n\nКомплектация\n- Наружная панель замка\n- Внутренняя панель замка\n- Врезной замок\n- Личинка\n- Ответная планка\n- Механический ключ (2 шт.)\n- Ключ-карта (2 шт.)\n- Комплект креплений\n- Схема монтажных отверстий\n- Инструкция",
                "instructions":{
                    "pdf":"https://drive.google.com/file/d/1I2OxV8hd3vXxrodRGgrLQvby_q5lMIG8/view?usp=drive_link",
                    "video":"https://keyway.online/"
                }
            },
            {
                "id":"319622",
                "name":"бэксет 70мм",
                "price":26800.0,
                "image":"https://static.tildacdn.com/stor6166-3234-4233-b464-366337636437/99455674.jpg",
                "specifications":{},
                "description":"Имеет пять способов разблокировки: по отпечатку пальца, с помощью ключ-карты, ввода пароля, механического ключа или через мобильное приложение.\n\nОснащен полупроводниковым датчиком отпечатка пальца со скоростью срабатывания менее 0,5 секунды. Специальная антивандальная конструкция делает замок взломостойким даже при сносе лицевой панели, а предохранительный ригель обеспечивает дополнительную защиту.\n\nКомплектация\n- Наружная панель замка\n- Внутренняя панель замка\n- Врезной замок\n- Личинка\n- Ответная планка\n- Механический ключ (2 шт.)\n- Ключ-карта (2 шт.)\n- Комплект креплений\n- Схема монтажных отверстий\n- Инструкция",
                "instructions":{
                    "pdf":"https://drive.google.com/file/d/1I2OxV8hd3vXxrodRGgrLQvby_q5lMIG8/view?usp=drive_link",
                    "video":"https://keyway.online/"
                }
            }
        ]
    },
    {
        "id":76,
        "name":"Умный замок премиум-класса KEYWAY SL500",
        "price":38800.0,
        "image":"https://static.tildacdn.com/stor3466-6330-4939-a461-353530623633/88944724.jpg",
        "category":"lock",
        "description":"Получите персональный промокод на скидку 30%",
        "modifications":[
            {
                "id":"306212",
                "name":"бэксет 60 мм",
                "price":38800.0,
                "image":"https://static.tildacdn.com/stor3466-6330-4939-a461-353530623633/88944724.jpg",
                "specifications":{},
                "description":"Имеет семь способов разблокировки: распознавание по лицу, ладони и отпечатку пальца, а также ввод пароля, считывание ключ-карты, механический ключ и дистанционное управление через мобильное приложение.\n\nОснащен 4х-дюймовым HD-экраном, высокоточной системой сканирования лица и полупроводниковым датчиком отпечатка пальцев. С помощью приложения вы можете отслеживать и контролировать состояние двери в любое время и в любом месте.\n\nКомплектация\n- Наружная панель замка\n- Внутренняя панель замка\n- Врезной замок\n- Личинка\n- Ответная планка\n- Механический ключ (2 шт.)\n- Ключ-карта (2 шт.)\n- Комплект креплений\n- Схема монтажных отверстий\n- Инструкция",
                "instructions":{
                    "pdf":"https://drive.google.com/file/d/1jgRz6uyu0KIlZzOpJ6t6kyWb4RJk2tUm/view",
                    "video":"https://keyway.online/"
                }
            },
            {
                "id":"319626",
                "name":"бэксет 70 мм",
                "price":40800.0,
                "image":"https://static.tildacdn.com/stor3466-6330-4939-a461-353530623633/88944724.jpg",
                "specifications":{},
                "description":"Имеет семь способов разблокировки: распознавание по лицу, ладони и отпечатку пальца, а также ввод пароля, считывание ключ-карты, механический ключ и дистанционное управление через мобильное приложение.\n\nОснащен 4х-дюймовым HD-экраном, высокоточной системой сканирования лица и полупроводниковым датчиком отпечатка пальцев. С помощью приложения вы можете отслеживать и контролировать состояние двери в любое время и в любом месте.\n\nКомплектация\n- Наружная панель замка\n- Внутренняя панель замка\n- Врезной замок\n- Личинка\n- Ответная планка\n- Механический ключ (2 шт.)\n- Ключ-карта (2 шт.)\n- Комплект креплений\n- Схема монтажных отверстий\n- Инструкция",
                "instructions":{
                    "pdf":"https://drive.google.com/file/d/1jgRz6uyu0KIlZzOpJ6t6kyWb4RJk2tUm/view",
                    "video":"https://keyway.online/"
                }
            }
        ]
    },
    {
        "id":82,
        "name":"Адаптер внешних каналов CROSS-F",
        "price":1780.0,
        "image":"https://static.tildacdn.com/stor3539-3431-4433-a162-623538363365/89c88333267d8ca344bcb653bb985eb6.jpg",
        "category":"switch",
        "description":"Позволяет подключить до трёх проводных механических выключателей к одному каналу блока HiTE PRO Relay-F",
        "modifications":[
            {
                "id":"314103",
                "name":"CROSS-F",
                "price":1780.0,
                "image":"https://static.tildacdn.com/stor3539-3431-4433-a162-623538363365/89c88333267d8ca344bcb653bb985eb6.jpg",
                "specifications":{
                    "MAX длина кабеля":"20 метров",
                    "Кол-во каналов":"3 на F1 и 6 на F2",
                    "Тип выключателя":"Клавишный",
                    "Питание":"220 В",
                    "Вес":"13 г",
                    "Габариты":"25 х 23 х 6 мм"
                },
                "description":"Вспомогательное устройство, предназначенное для расширения возможностей блока управления HiTE PRO Relay-F. Адаптер позволяет подключить до трёх проводных механических выключателей к одному зажиму блока HiTE PRO Relay-F, что обеспечивает дополнительные способы ручного управления нагрузкой.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/CROSS-F_180_180.pdf"
                }
            }
        ]
    },
    {
        "id":80,
        "name":"DIN-Gateway",
        "price":10980.0,
        "image":"https://static.tildacdn.com/stor3339-3961-4332-b035-343761386533/78041260.png",
        "category":"server",
        "description":"Сервер умного дома для установки на DIN-рейку",
        "modifications":[
            {
                "id":"312771",
                "name":"DIN-Gateway",
                "price":10980.0,
                "image":"https://static.tildacdn.com/stor3339-3961-4332-b035-343761386533/78041260.png",
                "specifications":{
                    "Варианты подключения к интернету":"WiFi 2.4, RJ-45, USB 3G/4G hilink",
                    "Питание":"12 В DC",
                    "Вес":"80 г",
                    "Габариты":"90 х 36 х 61 мм"
                },
                "description":"Используется для беспроводного управления через приложение HiTE PRO или голосовых помощников Алиса, Siri, Маруся, Салют и Google Assistant. Все блоки управления и датчики HiTE PRO можно связать с сервером Gateway.\n\nВ приложении HiTE PRO вы можете:\n- управлять отдельными устройствами, комнатами или зонами\n- видеть состояние всех устройств, а также график показаний данных с датчиков\n- создавать автоматические сценарии управления светом, климатом, электроприводами и другими электроприборами – по времени, датчикам или событию\n- получать push-уведомления о запуске сценария или изменении состояния устройств, например, датчиков\n- просматривать видео с камер в онлайн-режиме",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/WEB-DIN-GATEWAY.pdf"
                }
            }
        ]
    },
    {
        "id":81,
        "name":"DIN-4.Relay",
        "price":9980.0,
        "image":"https://static.tildacdn.com/stor6133-6231-4230-a433-653462396132/28820715.png",
        "category":"relay",
        "description":"Универсальный блок управления на 4 линии электрической цепи",
        "modifications":[
            {
                "id":"312773",
                "name":"DIN-4.Relay",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor6133-6231-4230-a433-653462396132/28820715.png",
                "specifications":{
                    "MAX нагрузка на канал":"3 500 Вт (16 A / 250 В)",
                    "Кол-во каналов":"4",
                    "Рабочая частота":"868 МГц",
                    "Питание":"12 В DC или 85-265 В, 50 Гц AC",
                    "Вес":"150 г",
                    "Габариты":"90 х 36 х 61 мм"
                },
                "description":"Ключевое отличие от прежней линейки Master-Slave на DIN-рейку — блок можно назначить мастер-устройством, ведомым устройством или следящим резервом. Эта особенность делает скорость работы устройства еще выше, чем раньше, и избавляет от необходимости выбирать между Master и Slave устройствами. Меню настроек стало удобнее. Питание - 220 или 12 В. \n\nПолучая сигнал от передатчиков блок замыкает/размыкает электрическую цепь. Монтируется на DIN-рейку в распределительном щите.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-4M%2074x105mm.pdf"
                }
            }
        ]
    },
    {
        "id":83,
        "name":"Умный замок KEYWAY с установкой",
        "price":34800.0,
        "image":"https://static.tildacdn.com/stor3039-3664-4234-b432-336265323635/58aacb4eac0d7871865b732d38beed52.jpg",
        "category":"lock",
        "description":"Точную цену учтоняйте у менеджера.",
        "modifications":[
            {
                "id":"314667",
                "name":"Умный замок KEYWAY SL300 с установкой",
                "price":34800.0,
                "image":"https://static.tildacdn.com/stor3039-3664-4234-b432-336265323635/58aacb4eac0d7871865b732d38beed52.jpg",
                "specifications":{},
                "description":"Оставьте заявку, если ваш клиент хочет поставить себе умный замок SL300. \n\nМы рассчитаем точную стоимость установки и найдем мастера. Установка и гарантия с нас. С вас — фото и замеры двери.\n\nВам выплатим комиссию за продажу замка.\n\nТолько Москва, СПБ, Казань, Краснодар, Екатеринбург",
                "instructions":{
                    "pdf":"https://drive.google.com/file/d/1I2OxV8hd3vXxrodRGgrLQvby_q5lMIG8/view?usp=drive_link",
                    "video":"https://keyway.online/"
                }
            },
            {
                "id":"314669",
                "name":"Умный замок KEYWAY SL500 с установкой",
                "price":48800.0,
                "image":"https://static.tildacdn.com/stor3039-3664-4234-b432-336265323635/58aacb4eac0d7871865b732d38beed52.jpg",
                "specifications":{},
                "description":"Оставьте заявку, если ваш клиент хочет поставить себе умный замок SL300. \n\nМы рассчитаем точную стоимость установки и найдем мастера. Установка и гарантия с нас. С вас — фото и замеры двери.\n\nВам выплатим комиссию за продажу замка.\n\nТолько Москва, СПБ, Казань, Краснодар, Екатеринбург",
                "instructions":{
                    "pdf":"https://drive.google.com/file/d/1jgRz6uyu0KIlZzOpJ6t6kyWb4RJk2tUm/view",
                    "video":"https://keyway.online/"
                }
            }
        ]
    },
    {
        "id":84,
        "name":"Ключ-карта KEYWAY",
        "price":230.0,
        "image":"https://static.tildacdn.com/stor3039-3530-4631-a139-376366333933/10a0abde88e7e66d1825fd70c093d5fa.png",
        "category":"other",
        "description":"Дополнительная ключ-карта доступа (по умолчанию в комплекте к замкам KEYWAY идут 2 ключ-карты)",
        "modifications":[
            {
                "id":"319584",
                "name":"Ключ-карта KEYWAY",
                "price":230.0,
                "image":"https://static.tildacdn.com/stor3039-3530-4631-a139-376366333933/10a0abde88e7e66d1825fd70c093d5fa.png",
                "specifications":{},
                "description":"Дополнительная ключ-карта доступа (по умолчанию в комплекте к замкам KEYWAY идут 2 ключ-карты)",
                "instructions":{}
            }
        ]
    },
    {
        "id":5,
        "name":"Сервер умного дома Gateway",
        "price":9980.0,
        "image":"https://static.tildacdn.com/stor3461-3031-4532-b539-366236666236/68601724.png",
        "category":"server",
        "description":"Сервер умного дома используется для беспроводного управления через приложение HiTE PRO или голосовых помощников Алиса, Siri, Маруся, Салют и Google Assistant. Все блоки управления и датчики HiTE PRO можно связать с сервером Gateway.\n\nВ приложении HiTE PRO вы можете:\n\nуправлять отдельными устройствами, комнатами или зонами\nвидеть состояние всех устройств, а также график показаний данных с датчиков\nсоздавать автоматические сценарии управления светом, климатом, электроприводами и другими электроприборами – по времени, датчикам или событию\nполучать push-уведомления о запуске сценария или изменении состояния устройств, например, датчиков\nпросматривать видео с камер в онлайн-режиме\nПродается в комплекте с блоком питания.",
        "modifications":[
            {
                "id":"207338",
                "name":"Gateway",
                "price":9980.0,
                "image":"https://static.tildacdn.com/stor3461-3031-4532-b539-366236666236/68601724.png",
                "specifications":{
                    "Варианты подключения к интернету":"WiFi 2.4, RJ-45, USB 3G/4G hilink",
                    "Питание":"5 В (type-c)",
                    "Вес":"70 г",
                    "Габариты":"71 х 73 х 27 мм"
                },
                "description":"Используется для беспроводного управления системой умного дома через приложение HiTE PRO или голосовые помощники Алиса, Маруся, Салют, Siri или Google Assistant.\n\nВсе блоки управления HiTE PRO можно связать с сервером.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/server-umnogo-doma-gateway",
                    "video":"https://vk.com/video/@hite_pro?z=video-140176277_456239543%2Fclub140176277"
                }
            }
        ]
    },
    {
        "id":71,
        "name":"Крепление для Gateway в розетку",
        "price":750.0,
        "image":"https://static.tildacdn.com/stor6231-6230-4530-b363-616634393065/96510516.jpg",
        "category":"server",
        "description":"Сервер умного дома HiTE PRO и его блок питания можно удобно установить в любую розетку с помощью крепления. \n\nТакже у крепления есть фиксатор-усилитель для розетки, чтобы можно было установить его в любом положении.\n\nИзготовлено методом 3D-печати из черного PETG пластика.",
        "modifications":[
            {
                "id":"299132",
                "name":"Крепление для Gateway в розетку",
                "price":750.0,
                "image":"https://static.tildacdn.com/stor6231-6230-4530-b363-616634393065/96510516.jpg",
                "specifications":{
                    "Вес":"30 г"
                },
                "description":"Чтобы аккуратно разместить сервер умного дома HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Gateway_Bracket_1.2.zip"
                }
            }
        ]
    },
    {
        "id":9,
        "name":"Relay-1",
        "price":3080.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Компактный одноканальный блок радиореле Relay-1 подключается к светильнику или другому электроприбору, которым нужно управлять с помощью передатчиков или сервера умного дома HiTE PRO. Получая от них сигнал блок Relay-1 замыкает/размыкает электрическую цепь.\n\nДоступна модификация с «сухим контактом», который не имеет непосредственной связи с источником питания и заземлением, т.е. у блока управления свой провод питания, а у нагрузки свой.",
        "modifications":[
            {
                "id":"206748",
                "name":"220 В",
                "price":3080.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"230 В",
                    "Максимальная нагрузка на 1 канал":"1000 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления, подключается в разрыв фазного и нулевого проводов. Питание 220 В.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2_220%D0%92_web.pdf",
                    "video":"https://clck.ru/3CTajv"
                }
            },
            {
                "id":"208984",
                "name":"12 В",
                "price":3080.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"12 В",
                    "Максимальная нагрузка на 1 канал":"60 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок Relay-1, но с питанием 12 В.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2_12%D0%92_web.pdf",
                    "video":"https://clck.ru/3CTajv"
                }
            },
            {
                "id":"208972",
                "name":"12 В (сухой контакт)",
                "price":3080.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"12 В",
                    "Максимальная нагрузка на 1 канал":"60 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок Relay-1, но с питанием 12 В и выходом \"сухой\" контакт.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2_12%D0%92_Dry_web.pdf",
                    "video":"https://clck.ru/3CTajv"
                }
            },
            {
                "id":"206940",
                "name":"220 В (сухой контакт)",
                "price":3080.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"230 В",
                    "Максимальная нагрузка на 1 канал":"1000 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок Relay-1, но с выходом \"сухой\" контакт.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2_220%D0%92_Dry_web.pdf",
                    "video":"https://clck.ru/3CTajv"
                }
            }
        ]
    },
    {
        "id":10,
        "name":"Relay-2",
        "price":4780.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Компактный двухканальный блок радиореле Relay-2 подключается к светильнику или другому электроприбору, которым нужно управлять с помощью передатчиков или сервера умного дома HiTE PRO. Получая от них сигнал блок Relay-2 замыкает/размыкает электрическую цепь.\n\nДоступна модификация с «сухим контактом», который не имеет непосредственной связи с источником питания и заземлением, т.е. у блока управления свой провод питания, а у нагрузки свой.",
        "modifications":[
            {
                "id":"206750",
                "name":"220 В",
                "price":4780.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"230 В",
                    "Максимальная нагрузка на 1 канал":"1000 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления, подключается в разрыв фазного и нулевого проводов. Питание 220 В.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2_220%D0%92_web.pdf",
                    "video":"https://clck.ru/3CTakL"
                }
            },
            {
                "id":"206942",
                "name":"220 В (сухой контакт)",
                "price":4780.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"230 В",
                    "Максимальная нагрузка на 1 канал":"1000 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок Relay-2, но с выходом \"сухой\" контакт.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2_220%D0%92_Dry_web.pdf",
                    "video":"https://clck.ru/3CTakL"
                }
            }
        ]
    },
    {
        "id":7,
        "name":"Relay-F1",
        "price":3480.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Блок приема сигнала Relay-F1 подключается «в разрыв» фазного провода перед светильником или другим электроприбором, которым нужно управлять. Замыкает / размыкает цепь питания при получении сигнала от передатчиков, с которыми связан. Может быть также подключен к проводному выключателю, что позволяет совместить проводное и беспроводное управление освещением (например, в ситуациях, когда беспроводной выключатель устанавливается в дополнение к проводному). ",
        "modifications":[
            {
                "id":"206954",
                "name":"Relay-F1",
                "price":3480.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"230 В",
                    "Максимальная нагрузка на блок":"440 Вт (2 А)",
                    "Минимальная нагрузка на канал":"10 Вт",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления подключается «в разрыв» фазного провода. То есть нулевой провод не требуется. Удобно установить за проводной выключатель.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-F1-2_web.pdf",
                    "video":"https://clck.ru/3CTaks"
                }
            }
        ]
    },
    {
        "id":8,
        "name":"Relay-F2",
        "price":4980.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Блок приема сигнала Relay-F2 подключается «в разрыв» фазного провода перед светильником или другим электроприбором, которым нужно управлять. Замыкает / размыкает цепь питания при получении сигнала от передатчиков, с которыми связан. Может быть также подключен к проводному выключателю, что позволяет совместить проводное и беспроводное управление освещением (например, в ситуациях, когда беспроводной выключатель устанавливается в дополнение к проводному).",
        "modifications":[
            {
                "id":"207042",
                "name":"Relay-F2",
                "price":4980.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"230 В",
                    "Максимальная нагрузка на блок":"440 Вт (2 А)",
                    "Минимальная нагрузка на канал":"10 Вт",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления подключается «в разрыв» фазного провода. То есть нулевой провод не требуется. Удобно установить за проводной выключатель.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-F1-2_web.pdf",
                    "video":"https://clck.ru/3CTaks"
                }
            }
        ]
    },
    {
        "id":69,
        "name":"Relay-1Q",
        "price":3080.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Бесшумный блок на симисторных ключах (\"твердотельных реле\"), устанавливаемый в разрыв фазного и нулевого провода, с 1 каналом управления.",
        "modifications":[
            {
                "id":"298768",
                "name":"Relay-1Q",
                "price":3080.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"85—265 В",
                    "Максимальная нагрузка на 1 канал":"300 Вт (1,5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Бесшумный блок Relay-1 (но мощность ниже) на симисторных ключах (\"твердотельных реле\"), устанавливаемый в разрыв фазного и нулевого провода.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2Q_220%D0%92_web.pdf"
                }
            }
        ]
    },
    {
        "id":70,
        "name":"Relay-2Q",
        "price":4780.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Бесшумный блок на симисторных ключах (\"твердотельных реле\"), устанавливаемый в разрыв фазного и нулевого провода, с 2 каналами управления.",
        "modifications":[
            {
                "id":"298770",
                "name":"Relay-2Q",
                "price":4780.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"85—265 В",
                    "Максимальная нагрузка на 1 канал":"300 Вт (1,5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Бесшумный блок Relay-2 (но мощность ниже) на симисторных ключах (\"твердотельных реле\"), устанавливаемый в разрыв фазного и нулевого провода.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay1-2Q_220%D0%92_web.pdf"
                }
            }
        ]
    },
    {
        "id":67,
        "name":"Relay-0/1-10V",
        "price":3480.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Компактный одноканальный блок для управления источниками света с аналоговым сигналом 0/1-10 В. Например, диммирования светодиодных лент или ламп, а также управления вентиляторами и другими устройствами, которые поддерживают управление по данному протоколу. Напряжение питания 85 - 265 В Потребляемая мощность 0.17 Вт",
        "modifications":[
            {
                "id":"297600",
                "name":"Relay-0/1-10V",
                "price":3480.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"85—265 В",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок для управления по аналоговым протоколам 0-10 и 1-10 Вольт. Например, диммирования светодиодных лент или ламп, а также управления вентиляторами и другими устройствами, которые поддерживают управление по данному протоколу.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/2024/10/Relay-0-10V_Web.pdf"
                }
            }
        ]
    },
    {
        "id":56,
        "name":"Relay-16A",
        "price":3480.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Компактный блок на 16 Ампер, подходит для теплого пола. Клеммники 2,5 мм2",
        "modifications":[
            {
                "id":"296298",
                "name":"Relay-16A",
                "price":3480.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"85—265 В",
                    "Максимальная нагрузка":"4 000 Вт (16 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления, подключается в разрыв фазного и нулевого проводов. Можно подключить проводной датчик температуры, а также проводной выключатель. Чаще всего используется для управления электрическим теплым полом.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay16A_220%D0%92_web.pdf",
                    "video":"https://clck.ru/3CTaoj"
                }
            }
        ]
    },
    {
        "id":57,
        "name":"Проводной датчик температуры для Relay-16A",
        "price":500.0,
        "image":"https://static.tildacdn.com/stor3435-3430-4563-a365-396663306532/24429073.jpg",
        "category":"other",
        "description":"Блок приема сигнала, устанавливаемый в разрыв фазного и нулевого провода, с 1 каналом управления – Включение / Выключение нагрузки. К нему подходит проводной датчик температуры.",
        "modifications":[
            {
                "id":"296300",
                "name":"Relay-16A",
                "price":500.0,
                "image":"https://static.tildacdn.com/stor3435-3430-4563-a365-396663306532/24429073.jpg",
                "specifications":{
                    "Длина":"3 м",
                    "Толщина":"5 мм",
                    "Сопротивление":"10 кОм"
                },
                "description":"Проводной датчик температуры пола от производителя Rexant — подключается к блоку HiTE PRO Relay-16A — при наличии сервера умного дома Gateway это позволяет настраивать сценарии климатического управления.",
                "instructions":{}
            }
        ]
    },
    {
        "id":22,
        "name":"Relay-LED",
        "price":3480.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"HiTE PRO Relay-LED – это блок приема сигнала с функцией диммирования (светорегулирования) для светодиодных ламп и лент. Получая сигнал от передатчиков HiTE PRO, блок замыкает/размыкает/диммирует электрическую цепь.\n\nОсобенности блока:\nТепловая защита. При срабатывании светодиод блока начинает мигать, а сервер умного дома отображает ошибку на плитке устройства;\nЗащита по току. Аналогичные события происходят при превышении тока 10 А;\nПодключение внешней кнопки с возможностью смены типа: клавишная/кнопочная. С кнопочной можно регулировать свечение. \nВы можете настроить: плавный пуск или мгновенное включение; скорость изменения яркости при управлении с пульта/выключателя; минимальную и максимальную яркость свечения",
        "modifications":[
            {
                "id":"210526",
                "name":"Relay-LED",
                "price":3480.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"10—48 В",
                    "Максимальная нагрузка на блок":"8 А",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления для диммирования светодиодных лент и ламп.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-LED_Web.pdf",
                    "video":"https://clck.ru/3CTamq"
                }
            }
        ]
    },
    {
        "id":39,
        "name":"Relay-DIM",
        "price":3480.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"HiTE PRO Relay-DIM – это одноканальное радиореле с функцией диммирования. По сути является модификацией блока HiTE PRO Relay-1. Подключается к светильнику (или другому прибору), которыми нужно управлять с помощью беспроводных выключателей или ДУ пультов HiTE PRO. Получая сигнал от передатчиков, блок замыкает/размыкает/диммирует электрическую цепь. Работает с диодными лампами с регулировкой яркости, а аткже с лампами накаливания - но на лампах накаливания максимальная мощность 100 Вт. Беспроводное управление электроприборами возможно посредством радиовыключателей, пультов, приложения HiTE PRO для умного дома и голосовых команд “Алисе”.Отличия от старой версии (2020 г.):- защита от пусковых токов и короткого замыкания - работа от нуля и фазы, теперь блок берет себе питание из сети и как следствие не будет никаких миганий / морганий ламп, с этим связанных - подобран профиль управления для диммирования светодиодных ламп (установлен по умолчанию), с ним лампы диммируются равномерно и красиво",
        "modifications":[
            {
                "id":"206924",
                "name":"Relay-DIM",
                "price":3480.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"85—265 В",
                    "Максимальная нагрузка на блок":"300 Вт",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок для управления питанием диодных ламп и ламп накаливания. ",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-DIM_115x105mm.pdf",
                    "video":"https://clck.ru/3CTaoD"
                }
            }
        ]
    },
    {
        "id":59,
        "name":"Relay-RGBW",
        "price":3480.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"Компактный одноканальный блок приема сигнала с функцией диммирования — регулировки яркости света, а также смены цвета и управления цветовой температурой для RGB и RGBW светодиодных лент.<br /><br />Получая сигнал от передатчиков HiTE PRO, блок замыкает/размыкает электрическую цепь и диммирует/меняет цвет.<br /><ul><li data-list=\"bullet\">Тепловая защита. При срабатывании блок прекращает работу, светодиод блока начинает мигать, а сервер умного дома отображает ошибку на плитке устройства в приложении.</li><li data-list=\"bullet\">Защита от короткого замыкания. При срабатывании блок прекращает работу, светодиод блока горит красным цветом, а сервер умного дома отображает ошибку на плитке устройства в приложении.</li><li data-list=\"bullet\">Подключение внешней кнопки с возможностью смены типа: клавишная/кнопочная. С кнопочной можно регулировать свечение.</li></ul><br />Вы можете настроить:<br /><ul><li data-list=\"bullet\">плавный пуск или мгновенное включение</li><li data-list=\"bullet\">скорость изменения яркости и цвета при управлении с пульта/выключателя</li><li data-list=\"bullet\">минимальную и максимальную яркость свечения</li></ul><br />Технический паспорт и видеообзор:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-rgbw\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-rgbw</a>",
        "modifications":[
            {
                "id":"296568",
                "name":"Relay-RGBW",
                "price":3480.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"10—48 В",
                    "Максимальная нагрузка на блок":"15 А",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок для регулировки яркости света, а также смены цвета и управления цветовой температурой для RGB и RGBW светодиодных лент.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-RGBW_Web_v2.pdf",
                    "video":"https://clck.ru/3CWRWe"
                }
            }
        ]
    },
    {
        "id":68,
        "name":"Крепление на DIN-рейку для компактных блоков ",
        "price":250.0,
        "image":"https://static.tildacdn.com/stor6438-3865-4134-a239-393034333538/46878414.jpg",
        "category":"relay",
        "description":"Цена окончательная, скидка уже применена. Любой компактный блок HiTE PRO можно установить на DIN-рейку или плоскость с помощью этого крепления. Корпус крепления выполнен из качественного пластика. Вы можете распечатать крепление самостоятельно на 3D-принтере.",
        "modifications":[
            {
                "id":"298034",
                "name":"Крепление для компактных блоков на DIN-рейку или плоскость",
                "price":250.0,
                "image":"https://static.tildacdn.com/stor6438-3865-4134-a239-393034333538/46878414.jpg",
                "specifications":{
                    "Вес":"20 г",
                    "Габариты":"67 × 56 × 23 мм"
                },
                "description":"Любой компактный блок HiTE PRO можно установить на DIN-рейку или плоскость с помощью этого крепления.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-mount.STL"
                }
            }
        ]
    },
    {
        "id":47,
        "name":"Relay-4M",
        "price":9980.0,
        "image":"https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
        "category":"relay",
        "description":"HiTE PRO Relay-4M – это четырехканальное радиореле, является мастер устройством модульной системы. Используется для беспроводного управления 4-мя линиями электрической цепи и имеет шину данных для подключения ведомых устройств (HiTE PRO Relay-S). Получая сигнал от передатчиков, блок замыкает/размыкает электрическую цепь. Передатчиками являются другие устройства HiTE PRO: беспроводные выключатели, пульты ДУ, датчики, сервер умного дома. Блок монтируется на DIN рейку в распределительном щите. ",
        "modifications":[
            {
                "id":"206944",
                "name":"Relay-4m",
                "price":9980.0,
                "image":"https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
                "specifications":{
                    "MAX нагрузка на канал":"3 500 Вт (16 A / 250 В)",
                    "Кол-во каналов":"4",
                    "Рабочая частота":"868 МГц",
                    "Питание":"85—265 В, 50 Гц",
                    "Вес":"150 г",
                    "Длина":"90 мм",
                    "Ширина":"36 мм",
                    "Высота":"61 мм"
                },
                "description":"Четырехканальный блок управления, является мастер-блоком модульной системы. Используется для управления 4-мя линиями электрической цепи и имеет шину данных для подключения зависимых блоков.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-4M%2074x105mm.pdf",
                    "video":"https://clck.ru/3CTamb"
                }
            }
        ]
    },
    {
        "id":50,
        "name":"Relay-4M(P)",
        "price":12980.0,
        "image":"https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
        "category":"relay",
        "description":"В отличие от модели Relay-4M, проводит измерение текущей потребляемой мощности всех 4 каналов. Эта информация передается на сервер умного дома Gateway и отражается в приложении рядом с иконкой подключенного устройства.<br /><br /><strong>Значения потребляемой мощности видны в мобильном приложении. Поэтому Gateway обязателен!</strong><br /><br />Периодичность отметок потребления зависит от мощности:<br /><br /><ul><li data-list=\"bullet\">0-50 ватт,</li></ul>повторная отправка только в случае изменения мощности более чем на 20%<br /><br /><ul><li data-list=\"bullet\">50-250 ватт – 10%</li></ul><br /><ul><li data-list=\"bullet\">250-500 ватт – 5%</li></ul><br /><ul><li data-list=\"bullet\">больше 500 – 1%</li></ul><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4mp\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/shop/goods/blok-upravleniya-relay-4mp</a>",
        "modifications":[
            {
                "id":"290030",
                "name":"Relay-4M(P)",
                "price":12980.0,
                "image":"https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
                "specifications":{
                    "MAX нагрузка на канал":"3 500 Вт (16 A / 250 В)",
                    "Кол-во каналов":"4",
                    "Рабочая частота":"868 МГц",
                    "Питание":"85—265 В, 50 Гц",
                    "Вес":"150 г",
                    "Длина":"90 мм",
                    "Ширина":"36 мм",
                    "Высота":"61 мм"
                },
                "description":"Блок Relay-4M с измерением потребляемой мощности.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-4M%2074x105mm.pdf",
                    "video":"https://clck.ru/3CTamb"
                }
            }
        ]
    },
    {
        "id":21,
        "name":"Антенна для Relay-4M",
        "price":980.0,
        "image":"https://static.tildacdn.com/tild3134-6363-4436-b562-303038303564/JCXP_3m_RG174_SMA750.jpg",
        "category":"relay",
        "description":"Цена окончательная, скидка уже применена. \nПри установке блока Relay-4 в металлические распределительные щиты может наблюдаться уменьшение дальности приема сигнала блоком от пульта из-за экранирования радиосигнала. Антенна с кабелем длиной 3 метра может быть вынесена за пределы распределительного щита, что позволит значительно увеличить дальность приема сигнала. Крепление антенны осуществляется на двусторонний скотч.\nВысота: 290 мм. Диаметр: 29 мм. Длина кабеля: 3 м",
        "modifications":[
            {
                "id":"207088",
                "name":"Антенна для Relay-4M",
                "price":980.0,
                "image":"https://static.tildacdn.com/tild3134-6363-4436-b562-303038303564/JCXP_3m_RG174_SMA750.jpg",
                "specifications":{},
                "description":"Дополнительная внешняя антенна для блока управления Relay-4M. Обычно используется, если блок установлен в металлическом электрощите, который экранирует радиосигнал — тогда антенну выносят из щита.",
                "instructions":{}
            }
        ]
    },
    {
        "id":58,
        "name":"Relay-4S",
        "price":8980.0,
        "image":"https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category":"relay",
        "description":"HiTE PRO Relay-4S – это четырехканальное реле, является управляемым устройством модульной системы. Внимание! Работает только с Relay-4M! Используется для беспроводного управления 4-мя линиями электрической цепи и имеет шину данных для подключения к радиопередающему устройству (HiTE PRO Relay-M). Получая сигнал от передатчиков, блок замыкает/размыкает электрическую цепь. Передатчиками являются другие устройства HiTE PRO: беспроводные выключатели, пульты ДУ, датчики, сервер умного дома. Блок монтируется на DIN рейку в распределительном щите. ",
        "modifications":[
            {
                "id":"206946",
                "name":"Relay-4S",
                "price":8980.0,
                "image":"https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
                "specifications":{
                    "MAX нагрузка на канал":"3 500 Вт (16 A / 250 В)",
                    "Кол-во каналов":"4",
                    "Рабочая частота":"868 МГц",
                    "Питание":"12 В",
                    "Вес":"150 г",
                    "Длина":"90 мм",
                    "Ширина":"36 мм",
                    "Высота":"61 мм"
                },
                "description":"Четырехканальный зависимый блок модульной системы. Используется для управления 4-мя линиями электрической цепи.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-4S%2074x105mm.pdf",
                    "video":"https://clck.ru/3CTamb"
                }
            }
        ]
    },
    {
        "id":51,
        "name":"Relay-4S(P)",
        "price":11980.0,
        "image":"https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category":"relay",
        "description":"В отличие от модели Relay-4S, проводит измерение текущей потребляемой мощности всех 4 каналов. Эта информация передается на сервер умного дома Gateway и отражается в приложении рядом с иконкой подключенного устройства. Значения потребляемой мощности видны в мобильном приложении. Поэтому Gateway обязателен! Периодичность отметок потребления зависит от мощности: 0-50 ватт, повторная отправка только в случае изменения мощности более чем на 20%, 50-250 ватт – 10%, 250-500 ватт – 5%, больше 500 – 1%.",
        "modifications":[
            {
                "id":"290032",
                "name":"Relay-4S(P)",
                "price":11980.0,
                "image":"https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
                "specifications":{
                    "MAX нагрузка на канал":"3 500 Вт (16 A / 250 В)",
                    "Кол-во каналов":"4",
                    "Рабочая частота":"868 МГц",
                    "Питание":"12 В",
                    "Вес":"150 г",
                    "Длина":"90 мм",
                    "Ширина":"36 мм",
                    "Высота":"61 мм"
                },
                "description":"Блок Relay-4S с измерением потребляемой мощности.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-4S%2074x105mm.pdf",
                    "video":"https://clck.ru/3CTamb"
                }
            }
        ]
    },
    {
        "id":40,
        "name":"Relay-LED3S",
        "price":8980.0,
        "image":"https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category":"relay",
        "description":"HiTE PRO Relay-LED3S – это трехканальное реле является частью#nbsp;модульной системы, используется для беспроводного управления 3-мя линиями электрической цепи (3 одноцветных светодиодных ленты или 1 RGB-лента) и имеет шину данных для подключения к радиопередающему устройству – HiTE PRO Relay-M Внимание! Работает только с Relay-4M!\nС помощью этого блока можно не только включать/выключать, но и регулировать яркость светодиодной/RGB-ленты. \nПередатчиками являются другие устройства HiTE PRO: беспроводные выключатели, пульты ДУ, датчики, сервер умного дома.",
        "modifications":[
            {
                "id":"276780",
                "name":"Relay-LED3S",
                "price":8980.0,
                "image":"https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
                "specifications":{
                    "Кол-во каналов":"1 RGB или 3 LED",
                    "Питание":"12 В",
                    "Максимальная нагрузка на блок":"12/24 В, 25 А",
                    "Максимальная нагрузка на 1 канал":"16 А",
                    "Вес":"43 г",
                    "Габариты":"90 × 36 × 61 мм"
                },
                "description":"Зависимый блок управления модульной системы, используется для управления 3-мя линиями электрической цепи (3 LED-ленты или 1 RGB-лента). Подключается по CAN-шине к мастер-блоку  HiTE PRO Relay-4M. Без 4M работать не будет!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Relay-Led3S%2074x105mm.pdf",
                    "video":"https://clck.ru/3CTan7"
                }
            }
        ]
    },
    {
        "id":6,
        "name":"Умная розетка Smart Socket",
        "price":3080.0,
        "image":"https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg",
        "category":"relay",
        "description":"Блок приема сигнала в виде модуля с розеткой с 1 каналом управления – Включение / Выключение нагрузки. Блок приема устанавливается и подключается к нагрузке, которой надо управлять. Замыкает / размыкает цепь питания при получении сигнала от передатчиков, с которыми связан.",
        "modifications":[
            {
                "id":"207098",
                "name":"Белый",
                "price":3080.0,
                "image":"https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"230 В",
                    "Максимальная нагрузка":"4000 Вт (16 А)",
                    "Вес":"100 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления в виде накладной розетки.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Socket_web.pdf",
                    "video":"https://www.hite-pro.ru/shop/goods/umnaya-rozetka-smart-socket"
                }
            },
            {
                "id":"296964",
                "name":"Черный",
                "price":3080.0,
                "image":"https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"230 В",
                    "Максимальная нагрузка":"4000 Вт (16 А)",
                    "Вес":"100 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок управления в виде накладной розетки.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Socket_web.pdf",
                    "video":"https://www.hite-pro.ru/shop/goods/umnaya-rozetka-smart-socket"
                }
            }
        ]
    },
    {
        "id":11,
        "name":"Пульт DST-1",
        "price":1480.0,
        "image":"https://static.tildacdn.com/tild3530-6662-4763-a233-653838303239/015-HTPR.png",
        "category":"switch",
        "description":"Предназначен для дистанционного управления радиореле HiTE PRO",
        "modifications":[
            {
                "id":"276676",
                "name":"DST-1",
                "price":1480.0,
                "image":"https://static.tildacdn.com/tild3530-6662-4763-a233-653838303239/015-HTPR.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"20 г",
                    "Габариты":"59 × 30 × 13 мм"
                },
                "description":"Пульт-брелок для дистанционного управления блоками HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTawn"
                }
            }
        ]
    },
    {
        "id":12,
        "name":"Пульт DST-4",
        "price":1980.0,
        "image":"https://static.tildacdn.com/tild3031-6261-4265-b335-393135636437/016-HTPR_1.png",
        "category":"switch",
        "description":"Предназначен для дистанционного управления радиореле HiTE PRO",
        "modifications":[
            {
                "id":"274770",
                "name":"DST-4",
                "price":1980.0,
                "image":"https://static.tildacdn.com/tild3031-6261-4265-b335-393135636437/016-HTPR_1.png",
                "specifications":{
                    "Кол-во каналов":"4",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"20 г",
                    "Габариты":"59 × 30 × 13 мм"
                },
                "description":"Пульт-брелок для дистанционного управления блоками HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTawn"
                }
            }
        ]
    },
    {
        "id":15,
        "name":"Relay-DRIVE",
        "price":3980.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"relay",
        "description":"HiTE PRO Relay-DRIVE используется для беспроводного управления электроприводами: например, электрокарнизами, жалюзи, рольставнями, воротами и другими.\n\nПодключается «в разрыв» цепи питания перед электроприводом, которым нужно управлять с помощью беспроводных выключателей, пультов или сервера умного дома HiTE PRO. \n\nУ блока есть модификации на 220 и 12 В, а также с «сухим контактом», который не имеет непосредственной связи с источником питания и заземлением, т.е. у блока управления свой провод питания, а у нагрузки свой.",
        "modifications":[
            {
                "id":"207052",
                "name":"220В",
                "price":3980.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"230 В",
                    "Максимальная нагрузка на блок":"500 Вт (2 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок для беспроводного управления фазными электроприводами: электрокарнизы, шаровые краны, ворота и т.д.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/RelayDrive_220%D0%92_115x105mm.pdf",
                    "video":"https://clck.ru/3CTaoS"
                }
            },
            {
                "id":"207140",
                "name":"12В",
                "price":3980.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"12 В",
                    "Максимальная нагрузка на блок":"60 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок Relay-Drive, но с питанием 12 В.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/RelayDrive_12%D0%92_115x105mm.pdf",
                    "video":"https://clck.ru/3CTaoS"
                }
            },
            {
                "id":"208982",
                "name":"220В (сухой контакт)",
                "price":3980.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"230 В",
                    "Максимальная нагрузка на блок":"500 Вт (2 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок Relay-Drive, но с выходом \"сухой\" контакт.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/RelayDrive_220%D0%92_115x105mm.pdf",
                    "video":"https://clck.ru/3CTaoS"
                }
            },
            {
                "id":"208980",
                "name":"12В (сухой контакт)",
                "price":3980.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"12 В",
                    "Максимальная нагрузка на блок":"60 Вт (5 А)",
                    "Вес":"43 г",
                    "Габариты":"47 × 17 × 37 мм"
                },
                "description":"Блок Relay-Drive, но с питанием 12 В  и выходом \"сухой\" контакт.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/RelayDrive_12%D0%92_115x105mm.pdf",
                    "video":"https://clck.ru/3CTaoS"
                }
            }
        ]
    },
    {
        "id":19,
        "name":"LE-1",
        "price":1480.0,
        "image":"https://static.tildacdn.com/tild3232-6365-4663-a162-393230323539/1le-1.jpg",
        "category":"switch",
        "description":"Кнопочный одноканальный беспроводной выключатель с рамкой серии Legrand Etika. Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку и представлен в двух цветах: белый и слоновая кость.",
        "modifications":[
            {
                "id":"207090",
                "name":"Слоновая кость",
                "price":1480.0,
                "image":"https://static.tildacdn.com/tild3962-6133-4966-b731-656337656262/2le-1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель кнопочный звонкового типа, совместим с рамками Legrand Etika",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf"
                }
            },
            {
                "id":"207044",
                "name":"Белый",
                "price":1480.0,
                "image":"https://static.tildacdn.com/tild3232-6365-4663-a162-393230323539/1le-1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель кнопочный звонкового типа, совместим с рамками Legrand Etika",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf"
                }
            }
        ]
    },
    {
        "id":20,
        "name":"LE-2",
        "price":1780.0,
        "image":"https://static.tildacdn.com/tild6562-3535-4637-b562-313032663962/le-22.jpg",
        "category":"switch",
        "description":"Кнопочный двухканальный беспроводной выключатель с рамкой серии Legrand Etika. Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку и представлен в двух цветах: белый и слоновая кость.",
        "modifications":[
            {
                "id":"207050",
                "name":"Слоновая кость",
                "price":1780.0,
                "image":"https://static.tildacdn.com/tild6562-3535-4637-b562-313032663962/le-22.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель, совместим с рамками Legrand Etika",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf"
                }
            },
            {
                "id":"207092",
                "name":"Белый",
                "price":1780.0,
                "image":"https://static.tildacdn.com/tild6637-3537-4232-b866-343238343761/1le-2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель, совместим с рамками Legrand Etika",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf"
                }
            }
        ]
    },
    {
        "id":52,
        "name":"Base-1 без рамки (без фиксации)",
        "price":1780.0,
        "image":"https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png",
        "category":"switch",
        "description":"Одноканальный беспроводной выключатель без фиксации клавиши (звонкового типа).Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно. Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов. Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.",
        "modifications":[
            {
                "id":"293048",
                "name":"Белый",
                "price":1780.0,
                "image":"https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239295"
                }
            },
            {
                "id":"293050",
                "name":"Бежевый",
                "price":1780.0,
                "image":"https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239296"
                }
            },
            {
                "id":"293052",
                "name":"Серый (грифель)",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor3433-3338-4739-a539-656435383164/91248115.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239297"
                }
            },
            {
                "id":"293054",
                "name":"Черный (карбон)",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor6238-6232-4561-b666-336332626430/88521061.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239298"
                }
            }
        ]
    },
    {
        "id":53,
        "name":"Base-2 без рамки (без фиксации)",
        "price":2180.0,
        "image":"https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png",
        "category":"switch",
        "description":"Двухканальный беспроводной выключатель без фиксации клавиши (звонкового типа). Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно. Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов. Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи. ",
        "modifications":[
            {
                "id":"293064",
                "name":"Белый",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239295"
                }
            },
            {
                "id":"293066",
                "name":"Бежевый",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239296"
                }
            },
            {
                "id":"293068",
                "name":"Серый (грифель)",
                "price":2580.0,
                "image":"https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239297"
                }
            },
            {
                "id":"293070",
                "name":"Черный (карбон)",
                "price":2580.0,
                "image":"https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный звонкового типа (без фиксации клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239298"
                }
            }
        ]
    },
    {
        "id":54,
        "name":"Base-1F без рамки (с фиксацией)",
        "price":1780.0,
        "image":"https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png",
        "category":"switch",
        "description":"Одноканальный беспроводной выключатель с фиксацией клавиши. НЕ ПОДХОДИТ ДЛЯ ДИММИРОВАНИЯ. Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно. Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов. Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.",
        "modifications":[
            {
                "id":"293056",
                "name":"Белый",
                "price":1780.0,
                "image":"https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239295"
                }
            },
            {
                "id":"293058",
                "name":"Бежевый",
                "price":1780.0,
                "image":"https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239296"
                }
            },
            {
                "id":"293060",
                "name":"Серый (грифель)",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor3433-3338-4739-a539-656435383164/91248115.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239297"
                }
            },
            {
                "id":"293062",
                "name":"Черный (карбон)",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor6238-6232-4561-b666-336332626430/88521061.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239298"
                }
            }
        ]
    },
    {
        "id":55,
        "name":"Base-2F без рамки (с фиксацией)",
        "price":2180.0,
        "image":"https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png",
        "category":"switch",
        "description":"Двухканальный беспроводной выключатель с фиксацией клавиши. НЕ ПОДХОДИТ ДЛЯ ДИММИРОВАНИЯ. Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно. Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов. Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.",
        "modifications":[
            {
                "id":"293072",
                "name":"Белый",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239295"
                }
            },
            {
                "id":"293074",
                "name":"Бежевый",
                "price":2180.0,
                "image":"https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239296"
                }
            },
            {
                "id":"293076",
                "name":"Серый (грифель)",
                "price":2580.0,
                "image":"https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239297"
                }
            },
            {
                "id":"293078",
                "name":"Черный (карбон)",
                "price":2580.0,
                "image":"https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"85 × 85 × 13 мм"
                },
                "description":"Радиовыключатель клавишный перекидного типа (с фиксацией клавиш), совместим с рамками Schneider Atlas и IEK Brite. Рамка продается отдельно!",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239298"
                }
            }
        ]
    },
    {
        "id":78,
        "name":"Рамка для Base",
        "price":100.0,
        "image":"https://static.tildacdn.com/stor3666-3862-4530-a664-653931663534/96158079.webp",
        "category":"switch",
        "description":"Рамка для выключателя Base",
        "modifications":[
            {
                "id":"291760",
                "name":"Белая",
                "price":100.0,
                "image":"https://static.tildacdn.com/stor3666-3862-4530-a664-653931663534/96158079.webp",
                "specifications":{
                    "Производитель":"Systeme Electric"
                },
                "description":"Рамка для выключателя Base в стиле Schneider Atlas Design или IEK Brite",
                "instructions":{}
            },
            {
                "id":"291758",
                "name":"Бежевая",
                "price":100.0,
                "image":"https://static.tildacdn.com/stor3635-3863-4337-a330-633239613362/64811909.webp",
                "specifications":{
                    "Производитель":"Systeme Electric"
                },
                "description":"Рамка для выключателя Base в стиле Schneider Atlas Design или IEK Brite",
                "instructions":{}
            },
            {
                "id":"293044",
                "name":"Серая (грифель)",
                "price":200.0,
                "image":"https://static.tildacdn.com/stor3031-6566-4434-b237-656364343566/70237950.webp",
                "specifications":{
                    "Производитель":"Systeme Electric"
                },
                "description":"Рамка для выключателя Base в стиле Schneider Atlas Design или IEK Brite",
                "instructions":{}
            },
            {
                "id":"293046",
                "name":"Черная (карбон)",
                "price":200.0,
                "image":"https://static.tildacdn.com/stor3866-6462-4065-a462-613238663439/39266808.webp",
                "specifications":{
                    "Производитель":"Systeme Electric"
                },
                "description":"Рамка для выключателя Base в стиле Schneider Atlas Design или IEK Brite",
                "instructions":{}
            }
        ]
    },
    {
        "id":41,
        "name":"SN-C",
        "price":2980.0,
        "image":"https://static.tildacdn.com/tild3761-6534-4132-b134-333731313636/---36-455x455.png",
        "category":"switch",
        "description":"Беспроводной сенсорный мебельный выключатель* HiTE PRO SN. Имеет одну сенсорную кнопку и встраивается в мебель в подготовленное отверстие 35х12 мм. Работа от одной батарейки — более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.",
        "modifications":[
            {
                "id":"276786",
                "name":"Черный",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3761-6534-4132-b134-333731313636/---36-455x455.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"20 г",
                    "Габариты":"41 × 41 × 15 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO. Встраивается в мебель в подготовленное отверстие 35х12 мм (диаметр*глубина). В комплекте идёт специальный магнит с отверстием в центре и саморез, чтобы было удобно крепить выключатель и просто менять батарейку. Глубина отверстия указана с учётом магнита.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTawN"
                }
            },
            {
                "id":"276784",
                "name":"Белый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3632-6366-4637-a262-663161323231/---33-455x455.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"20 г",
                    "Габариты":"41 × 41 × 15 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO. Встраивается в мебель в подготовленное отверстие 35х12 мм (диаметр*глубина). В комплекте идёт специальный магнит с отверстием в центре и саморез, чтобы было удобно крепить выключатель и просто менять батарейку. Глубина отверстия указана с учётом магнита.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTawN"
                }
            },
            {
                "id":"276782",
                "name":"Алюминиевый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild6233-3335-4939-a434-613164666465/---34-455x455.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"20 г",
                    "Габариты":"41 × 41 × 15 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO. Встраивается в мебель в подготовленное отверстие 35х12 мм (диаметр*глубина). В комплекте идёт специальный магнит с отверстием в центре и саморез, чтобы было удобно крепить выключатель и просто менять батарейку. Глубина отверстия указана с учётом магнита.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTawN"
                }
            }
        ]
    },
    {
        "id":48,
        "name":"SN-R1",
        "price":2980.0,
        "image":"https://static.tildacdn.com/tild3734-3963-4030-b061-373235646263/bl-snr1.jpg",
        "category":"switch",
        "description":"Сенсорный одноканальный беспроводной выключатель. Выполнен из закаленного стекла в лаконичном современном дизайне. При нажатии издает звук. Работа от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Представлен в 11 цветах.",
        "modifications":[
            {
                "id":"206964",
                "name":"Бежевый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3430-6632-4437-b630-653565393064/sk-snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207032",
                "name":"Черный",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3734-3963-4030-b061-373235646263/bl-snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207034",
                "name":"Белый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3933-6263-4530-b537-623737303932/wh-snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207108",
                "name":"Алюминиевый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild6132-6138-4930-b431-663731656662/al_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207068",
                "name":"Серый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild6339-6339-4737-b534-353631336335/ser_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207076",
                "name":"Графит",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3963-6237-4234-b033-346535393032/graf_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207064",
                "name":"Слоновая кость",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3039-6664-4166-b864-326237353564/slon_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"206968",
                "name":"Светло-серый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild6232-3238-4661-b435-333966323737/svser_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207072",
                "name":"Серо-голубой",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild6131-3036-4666-a230-633064633439/svgol_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207112",
                "name":"Светло-коричневый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3335-6431-4431-b362-353736666666/svkor_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207116",
                "name":"Темно-коричневый",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild3961-6462-4664-b563-356262636238/temnkor_snr1.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            }
        ]
    },
    {
        "id":77,
        "name":"SN-R2",
        "price":3380.0,
        "image":"https://static.tildacdn.com/tild3033-3931-4635-b532-303335346366/sk-snr2.jpg",
        "category":"switch",
        "description":"Сенсорный двухканальный беспроводной выключатель. Выполнен из закаленного стекла в лаконичном современном дизайне. При нажатии издает звук. Работа от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м. Представлен в 11 цветах.",
        "modifications":[
            {
                "id":"206972",
                "name":"Бежевый",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild3033-3931-4635-b532-303335346366/sk-snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207030",
                "name":"Черный",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild3262-3164-4534-a439-336336656434/1snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207028",
                "name":"Белый",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild6239-6235-4630-a330-623030613064/wh-snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207110",
                "name":"Алюминиевый",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild3832-3761-4662-b466-323463323433/al_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207070",
                "name":"Серый",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild6133-3535-4135-a237-643861336265/ser_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207118",
                "name":"Графит",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild6333-6436-4931-a534-653334646139/graf_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207106",
                "name":"Слоновая кость",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild6262-6439-4761-b434-613564613363/slon_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207066",
                "name":"Светло-серый",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild6165-3734-4630-a337-613236366265/svser_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"206978",
                "name":"Серо-голубой",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild3264-6461-4131-b066-316565653439/sergol_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207114",
                "name":"Светло-коричневый",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild6364-3033-4637-b736-323735366237/svkor_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            },
            {
                "id":"207074",
                "name":"Темно-коричневый",
                "price":3380.0,
                "image":"https://static.tildacdn.com/tild3062-3861-4332-b161-613961393161/temnkor_snr2.jpg",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 7 лет",
                    "Вес":"90 г",
                    "Габариты":"81 × 81 × 13 мм"
                },
                "description":"Радиовыключатель сенсорный из закаленного стекла в оригинальном дизайне HiTE PRO.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTavx"
                }
            }
        ]
    },
    {
        "id":13,
        "name":"Радиомодуль UNI",
        "price":1980.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"switch",
        "description":"Подключается к традиционному выключателю и делает его беспроводным",
        "modifications":[
            {
                "id":"207094",
                "name":"UNI",
                "price":1980.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"3",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"3 В (CR2450)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"28 г",
                    "Габариты":"47 × 37 × 17 мм"
                },
                "description":"Трехканальный радиомодуль подключается к проводным выключателям, делая их беспроводными.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf",
                    "video":"https://clck.ru/3CTaw8"
                }
            }
        ]
    },
    {
        "id":45,
        "name":"Влагозащищённый IP65-1",
        "price":3780.0,
        "image":"https://static.tildacdn.com/tild3366-3034-4462-b563-313665666636/65-1-1.png",
        "category":"switch",
        "description":"Клавишный одноканальный выключатель IP65-1 продается в комплекте с радиомодулем HiTE PRO Uni, что делает его беспроводным.\n\nУ выключателя высокий класс влагозащиты. Выключатель полностью непроницаем для пыли и струй воды под давлением.\n\nРадиомодуль HiTE PRO Uni работает от одной батарейки более 7 лет. Частота, на которой работает радиомодуль 868 МГц позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку.\n\nДля работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.",
        "modifications":[
            {
                "id":"279722",
                "name":"IP65-1",
                "price":3780.0,
                "image":"https://static.tildacdn.com/tild3366-3034-4462-b563-313665666636/65-1-1.png",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"90 × 80 × 60 мм"
                },
                "description":"Кнопочный одноканальный выключатель ЭРА продается в комплекте с радиомодулем HiTE PRO Uni внутри, что делает его беспроводным.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf"
                }
            }
        ]
    },
    {
        "id":46,
        "name":"Влагозащищённый IP65-2",
        "price":3980.0,
        "image":"https://static.tildacdn.com/tild6462-6139-4535-a432-616238373764/65-2-1.png",
        "category":"switch",
        "description":"Клавишный двухканальный выключатель IP65-2 продается в комплекте с радиомодулем HiTE PRO Uni, что делает его беспроводным.\n\nУ выключателя высокий класс влагозащиты. Выключатель полностью непроницаем для пыли и струй воды под давлением.\n\nРадиомодуль HiTE PRO Uni работает от одной батарейки более 7 лет. Частота, на которой работает радиомодуль 868 МГц позволяет управлять освещением на расстоянии до 250 м. Имеет квадратную кнопку.\n\nДля работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.",
        "modifications":[
            {
                "id":"279724",
                "name":"IP65-2",
                "price":3980.0,
                "image":"https://static.tildacdn.com/tild6462-6139-4535-a432-616238373764/65-2-1.png",
                "specifications":{
                    "Кол-во каналов":"2",
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 10 лет",
                    "Вес":"90 г",
                    "Габариты":"90 × 80 × 60 мм"
                },
                "description":"Кнопочный двухканальный выключатель ЭРА продается в комплекте с радиомодулем HiTE PRO Uni внутри, что делает его беспроводным.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf"
                }
            }
        ]
    },
    {
        "id":23,
        "name":"Датчик протечки Smart Water",
        "price":2980.0,
        "image":"https://static.tildacdn.com/tild6134-3834-4832-b163-323039653438/Smart_Water1.png",
        "category":"datchiki",
        "description":"Позволяет определять наличие и отсутствие протечки воды.\n\nПри отсутствии протечки датчик отправляет радиосигнал, подтверждающий, что он находится в рабочем состоянии, 1 раз в 2 часа. Если обнаружена протечка воды, датчик начинает отправлять радиосигнал 1 раз в минуту.",
        "modifications":[
            {
                "id":"210496",
                "name":"Smart Water",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild6134-3834-4832-b163-323039653438/Smart_Water1.png",
                "specifications":{
                    "Питание":"3 В (CR2450)",
                    "Расчетное время службы батарейки":"до 5 лет",
                    "Вес":"50 г",
                    "Габариты":"60 × 60 × 25 мм"
                },
                "description":"Датчик протечки.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/SmartPower_Checker_Water_115x105mm.pdf",
                    "video":"https://clck.ru/3CTaqW"
                }
            }
        ]
    },
    {
        "id":16,
        "name":"Датчик движения и освещенности Smart Motion",
        "price":3280.0,
        "image":"https://static.tildacdn.com/tild6463-6231-4164-b366-643964316661/smartm.jpg",
        "category":"datchiki",
        "description":"Предоставляет информацию об уровне освещенности и движениях людей в помещении",
        "modifications":[
            {
                "id":"207054",
                "name":"Smart Motion",
                "price":3280.0,
                "image":"https://static.tildacdn.com/tild6463-6231-4164-b366-643964316661/smartm.jpg",
                "specifications":{
                    "Дальность детектирования движения":"до 5 м",
                    "Угол детектирования":"180°",
                    "Питание":"3 В (CR2450)",
                    "Расчетное время службы батарейки":"до 3 лет",
                    "Вес":"50 г",
                    "Габариты":"60 × 60 × 20 мм"
                },
                "description":"Датчик движения и освещенности — то есть 2 датчика в одном корпусе.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Smart_Motion_115x105mm.pdf",
                    "video":"https://clck.ru/3CTapp"
                }
            }
        ]
    },
    {
        "id":17,
        "name":"Датчик температуры и влажности Smart Air",
        "price":2980.0,
        "image":"https://static.tildacdn.com/tild6266-3938-4565-b863-656632393366/sma.jpg",
        "category":"datchiki",
        "description":"Предоставляет информацию о температуре и влажности помещения",
        "modifications":[
            {
                "id":"207056",
                "name":"Smart Air",
                "price":2980.0,
                "image":"https://static.tildacdn.com/tild6266-3938-4565-b863-656632393366/sma.jpg",
                "specifications":{
                    "Рабочая оотносительная влажность":"10...90%",
                    "Рабочая температура":"0...50 °С",
                    "Питание":"3 В (CR2450)",
                    "Расчетное время службы батарейки":"до 5 лет",
                    "Вес":"50 г",
                    "Габариты":"60 × 60 × 20 мм"
                },
                "description":"Датчик температуры и влажности — то есть 2 датчика в одном корпусе.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/Smart_Air_115x105mm.pdf",
                    "video":"https://clck.ru/3CTapD"
                }
            }
        ]
    },
    {
        "id":18,
        "name":"Датчик открытия Smart Checker",
        "price":1980.0,
        "image":"https://static.tildacdn.com/tild6164-6332-4233-b461-373132663764/check.jpg",
        "category":"datchiki",
        "description":"Позволяет контролировать положение (открыто или закрыто) подвижных элементов",
        "modifications":[
            {
                "id":"206966",
                "name":"Smart Checker",
                "price":1980.0,
                "image":"https://static.tildacdn.com/tild6164-6332-4233-b461-373132663764/check.jpg",
                "specifications":{
                    "Питание":"3 В (CR2032)",
                    "Расчетное время службы батарейки":"до 5 лет",
                    "Вес":"20 г",
                    "Габариты":"45 × 39 × 14 мм"
                },
                "description":"Датчик открытия и закрытия. Обычно ставится на двери и окна. Состоит из 2 частей: радиомодуль и магнит.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/SmartPower_Checker_Water_115x105mm.pdf",
                    "video":"https://clck.ru/3CTaqq"
                }
            }
        ]
    },
    {
        "id":14,
        "name":"Датчик питания Smart Power",
        "price":2480.0,
        "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category":"datchiki",
        "description":"Отправляет радиосигнал при подаче и при снятии напряжения с его клемм",
        "modifications":[
            {
                "id":"209170",
                "name":"Smart Power",
                "price":2480.0,
                "image":"https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
                "specifications":{
                    "Кол-во каналов":"1",
                    "Макс дальность на открытом пространстве":"250 м",
                    "Питание":"85 — 265 В",
                    "Вес":"28 г",
                    "Габариты":"47 × 37 × 17 мм"
                },
                "description":"Передает радиосигнал при подаче питания на клеммы и при снятии питания с клемм.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/manual/SmartPower_Checker_Water_115x105mm.pdf",
                    "video":"https://clck.ru/3CTar2"
                }
            }
        ]
    },
    {
        "id":35,
        "name":"Демонстрационный набор",
        "price":10880.0,
        "image":"https://static.tildacdn.com/stor3162-3465-4830-b330-366230666235/93883933.png",
        "category":"komplekt",
        "description":"Отлично подходит для презентации выключателей HiTE PRO!",
        "modifications":[
            {
                "id":"225982",
                "name":"Демонстрационный набор",
                "price":10880.0,
                "image":"https://static.tildacdn.com/stor3162-3465-4830-b330-366230666235/93883933.png",
                "specifications":{
                    "Вес":"2 кг",
                    "Габариты":"330 × 330 × 45 мм"
                },
                "description":"Набор представляет из себя квадратную коробку из плотного картона с полноцветной печатью и двумя ярусами с ложементами внутри.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1rVhhGuBSO0MmJJ6l0jYfie66rmnOWRn1PIeJ0Gitmc0/edit?usp=sharing",
                    "video":"https://youtube.com/shorts/K8rSB94tIsQ"
                }
            }
        ]
    },
    {
        "id":36,
        "name":"Демонстрационный стенд",
        "price":48180.0,
        "image":"https://static.tildacdn.com/stor3861-3766-4238-b135-386335383633/36501679.png",
        "category":"komplekt",
        "description":"Собранный и настроенный экспонат для демонстрации работы устройств HiTE PRO",
        "modifications":[
            {
                "id":"209812",
                "name":"Демонстрационный стенд",
                "price":48180.0,
                "image":"https://static.tildacdn.com/stor3861-3766-4238-b135-386335383633/36501679.png",
                "specifications":{
                    "Питание":"230 В",
                    "Вес":"7 кг",
                    "Габариты":"1800 × 800 × 50 мм"
                },
                "description":"Стенд демонстрирует возможности беспроводного умного дома HiTE PRO на примере управления освещением.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1m3lzjZX2YSZhvoF5PQrRbdxze5fcHxvP6g8Oa8cw_Ok/edit?usp=sharing",
                    "video":"https://vk.com/video-140176277_456239586?list=ln-DTnKNvNZKwWSUxKPWN"
                }
            }
        ]
    },
    {
        "id":60,
        "name":"Демонстрационный стенд Мини",
        "price":21990.0,
        "image":"https://static.tildacdn.com/stor3364-3036-4362-a562-386163633165/31780867.jpg",
        "category":"komplekt",
        "description":"Компактный стенд, который удобно брать с собой на встречи с заказчиками",
        "modifications":[
            {
                "id":"296638",
                "name":"Демонстрационный стенд Мини",
                "price":21990.0,
                "image":"https://static.tildacdn.com/stor3364-3036-4362-a562-386163633165/31780867.jpg",
                "specifications":{
                    "Питание":"230 В",
                    "Вес":"3 кг",
                    "Габариты":"600 × 650 × 50 мм"
                },
                "description":"Стенд демонстрирует возможности беспроводного умного дома HiTE PRO на примере управления освещением.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1-adKDy0VsckmE6VM7MfrthgszGm-HtgjHNBf5P012sA/edit?usp=sharing",
                    "video":"https://youtu.be/Q49lzaVRzHs"
                }
            }
        ]
    },
    {
        "id":49,
        "name":"Брошюра HiTE PRO",
        "price":10.0,
        "image":"https://static.tildacdn.com/stor6637-3664-4366-a136-363733363839/52026992.jpg",
        "category":"komplekt",
        "description":"Печатная брошюра для клиентов, в которой можно указать свои контакты",
        "modifications":[
            {
                "id":"286416",
                "name":"Брошюра HiTE PRO",
                "price":10.0,
                "image":"https://static.tildacdn.com/stor6637-3664-4366-a136-363733363839/52026992.jpg",
                "specifications":{},
                "description":"Печатная брошюра, в которой можно указать свои контакты.",
                "instructions":{}
            }
        ]
    },
    {
        "id":4,
        "name":"Каталог HiTE PRO",
        "price":200.0,
        "image":"https://static.tildacdn.com/stor3335-3962-4232-a163-353032383535/78693873.jpg",
        "category":"komplekt",
        "description":"Печатный каталог альбомной ориентации. Дарим 1 каталог за каждые 5000 руб суммы заказа.",
        "modifications":[
            {
                "id":"286248",
                "name":"Каталог HiTE PRO",
                "price":200.0,
                "image":"https://static.tildacdn.com/stor3335-3962-4232-a163-353032383535/78693873.jpg",
                "specifications":{},
                "description":"Печатный каталог альбомной ориентации с описанием продукции HiTE PRO.\nКрасивый, приятный на ощупь, идеально подходит для презентации продукции клиентам. \n\nПодарите клиентам каталог HiTE PRO и обязательно оставьте визитку или брошюру, в которой указаны ваши контакты, – когда клиенты будут листать каталог уютным пятничным вечером, укутавшись в плед и попивая горячий чай, они непременно захотят управлять всем домом через мобильное приложение или с помощью голосового помощника, не покидая своего кресла.\n\nВот тут они и увидят ваши контакты – позвонят вам и запланируют встречу, чтобы наконец запустить проект умного дома!\n\nПоэтому не пренебрегайте каталогом, добавляйте его в каждый заказ! Ведь у каждого клиента есть знакомые, которые только планируют сделать ремонт! Они тоже захотят умный дом и обратятся к вам – по рекомендации ;-)",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/katalog"
                }
            }
        ]
    },
    {
        "id":73,
        "name":"Футболка HiTE PRO темно-синяя",
        "price":1880.0,
        "image":"https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
        "category":"Merch",
        "description":"Хлопковая футболка в стиле oversize",
        "modifications":[
            {
                "id":"301122",
                "name":"темно-синяя - S",
                "price":1880.0,
                "image":"https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
                "specifications":{},
                "description":"Хлопковая футболка в стиле oversize с логотипами HiTE PRO.",
                "instructions":{}
            },
            {
                "id":"301124",
                "name":"темно-синяя - M",
                "price":1880.0,
                "image":"https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
                "specifications":{},
                "description":"Хлопковая футболка в стиле oversize с логотипами HiTE PRO.",
                "instructions":{}
            },
            {
                "id":"301126",
                "name":"темно-синяя - L",
                "price":1880.0,
                "image":"https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
                "specifications":{},
                "description":"Хлопковая футболка в стиле oversize с логотипами HiTE PRO.",
                "instructions":{}
            },
            {
                "id":"301128",
                "name":"темно-синяя - XL",
                "price":1880.0,
                "image":"https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
                "specifications":{},
                "description":"Хлопковая футболка в стиле oversize с логотипами HiTE PRO.",
                "instructions":{}
            },
            {
                "id":"301130",
                "name":"темно-синяя - XXL",
                "price":1880.0,
                "image":"https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
                "specifications":{},
                "description":"Хлопковая футболка в стиле oversize с логотипами HiTE PRO.",
                "instructions":{}
            }
        ]
    },
    {
        "id":74,
        "name":"Кепка HiTE PRO темно-синяя",
        "price":1600.0,
        "image":"https://static.tildacdn.com/stor6436-3830-4866-a562-663532633337/28196858.jpg",
        "category":"Merch",
        "description":"Кепка регулируемая onesize",
        "modifications":[
            {
                "id":"301948",
                "name":"Кепка HiTE PRO темно-синяя",
                "price":1600.0,
                "image":"https://static.tildacdn.com/stor6436-3830-4866-a562-663532633337/28196858.jpg",
                "specifications":{},
                "description":"Кепка, регулируемая по размеру и с логотипом HiTE PRO.",
                "instructions":{}
            }
        ]
    },
    {
        "id":72,
        "name":"Комплект для защиты от протечек HiTE PRO на трубу 1/2",
        "price":20432.0,
        "image":"https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg",
        "category":"kran",
        "description":"Сборный комплект устройств: 1-2 шаровых крана, блок управления, датчик протечки",
        "modifications":[
            {
                "id":"301066",
                "name":"2 шт Bugatti 220",
                "price":25540.0,
                "image":"https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg",
                "specifications":{},
                "description":"2 крана Bugatti Pro 220 1/2\n1 датчик протечки Smart Water\n1 блок Relay-Drive",
                "instructions":{}
            },
            {
                "id":"301068",
                "name":"2 шт Profi 220",
                "price":23940.0,
                "image":"https://static.tildacdn.com/stor6530-6464-4333-b036-643565356237/70060083.jpg",
                "specifications":{},
                "description":"2 крана Profi 220 1/2\n1 датчик протечки Smart Water\n1 блок Relay-Drive",
                "instructions":{}
            },
            {
                "id":"301062",
                "name":"1 шт Bugatti 220",
                "price":16250.0,
                "image":"https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg",
                "specifications":{},
                "description":"1 кран Bugatti Pro 220 1/2\n1 датчик протечки Smart Water\n1 блок Relay-Drive",
                "instructions":{}
            },
            {
                "id":"301064",
                "name":"1 шт Profi",
                "price":15450.0,
                "image":"https://static.tildacdn.com/stor6530-6464-4333-b036-643565356237/70060083.jpg",
                "specifications":{},
                "description":"1 кран Profi 220 1/2\n1 датчик протечки Smart Water\n1 блок Relay-Drive",
                "instructions":{}
            }
        ]
    },
    {
        "id":29,
        "name":"Шаровой кран с электроприводом Bugatti Pro 220В",
        "price":7525.0,
        "image":"https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png",
        "category":"kran",
        "description":"Шаровой кран марки Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения",
        "modifications":[
            {
                "id":"224584",
                "name":"Bugatti Pro 220В - 1/2",
                "price":9290.0,
                "image":"https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png",
                "specifications":{
                    "Питание":"230 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"1,4 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"6 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения. ",
                "instructions":{}
            },
            {
                "id":"224586",
                "name":"Bugatti Pro 220В - 3/4",
                "price":9990.0,
                "image":"https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png",
                "specifications":{
                    "Питание":"230 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"1,4 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"6 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения. ",
                "instructions":{}
            },
            {
                "id":"224598",
                "name":"Bugatti Pro 220В - 1",
                "price":13290.0,
                "image":"https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png",
                "specifications":{
                    "Питание":"230 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"1,4 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"6 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения. ",
                "instructions":{}
            }
        ]
    },
    {
        "id":30,
        "name":"Шаровой кран с электроприводом Bugatti Pro 12В",
        "price":8092.0,
        "image":"https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png",
        "category":"kran",
        "description":"Шаровой кран марки Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения",
        "modifications":[
            {
                "id":"224594",
                "name":"Bugatti Pro 12В - 1/2",
                "price":9990.0,
                "image":"https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png",
                "specifications":{
                    "Питание":"12 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"1,4 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"6 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения. ",
                "instructions":{}
            },
            {
                "id":"224586",
                "name":"Bugatti Pro 12В - 3/4",
                "price":10590.0,
                "image":"https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png",
                "specifications":{
                    "Питание":"12 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"1,4 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"6 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения. ",
                "instructions":{}
            },
            {
                "id":"224596",
                "name":"Bugatti Pro 12В - 1",
                "price":11990.0,
                "image":"https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png",
                "specifications":{
                    "Питание":"12 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"1,4 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"6 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения. ",
                "instructions":{}
            }
        ]
    },
    {
        "id":31,
        "name":"Шаровой кран с электроприводом PROFI 220В",
        "price":6877.0,
        "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
        "category":"kran",
        "description":"Шаровой кран марки Neptun с электроприводом серии PROFI для блокировки водоснабжения",
        "modifications":[
            {
                "id":"224608",
                "name":"PROFI 220В - 1/2",
                "price":8490.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"230 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224606",
                "name":"PROFI 220В - 3/4",
                "price":9390.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"230 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224592",
                "name":"PROFI 220В - 1",
                "price":10590.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"230 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224612",
                "name":"PROFI 220В - 1 1/4",
                "price":11290.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"230 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            }
        ]
    },
    {
        "id":32,
        "name":"Шаровой кран с электроприводом PROFI 12В",
        "price":6472.0,
        "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
        "category":"kran",
        "description":"Шаровой кран марки Neptun с электроприводом серии PROFI для блокировки водоснабжения",
        "modifications":[
            {
                "id":"224616",
                "name":"PROFI 12В - 1/2",
                "price":7990.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"12 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224590",
                "name":"PROFI 12В - 3/4",
                "price":8490.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"12 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224614",
                "name":"PROFI 12В - 1",
                "price":10590.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"12 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224600",
                "name":"PROFI 12В - 1 1/4",
                "price":11290.0,
                "image":"https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
                "specifications":{
                    "Питание":"12 В, 50 Гц",
                    "Крутящий момент":"9 Н*м",
                    "Время закрытия":"21 сек",
                    "Материал крана":"Нержавеющая сталь AISI304",
                    "MAX температура раб. среды":"120 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"10 лет"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            }
        ]
    },
    {
        "id":33,
        "name":"Шаровой кран с электроприводом MK 220В",
        "price":4933.0,
        "image":"https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
        "category":"kran",
        "description":"Шаровой кран марки Neptun с электроприводом серии МК для блокировки водоснабжения",
        "modifications":[
            {
                "id":"224604",
                "name":"MK 220В - 1/2",
                "price":6090.0,
                "image":"https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
                "specifications":{
                    "Питание":"230 В",
                    "Крутящий момент":"15 Н*м",
                    "Время закрытия":"15 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"90 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"4 года"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224588",
                "name":"MK 220В - 3/4",
                "price":6590.0,
                "image":"https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
                "specifications":{
                    "Питание":"230 В",
                    "Крутящий момент":"15 Н*м",
                    "Время закрытия":"15 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"90 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"4 года"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224610",
                "name":"MK 220В - 1",
                "price":7990.0,
                "image":"https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
                "specifications":{
                    "Питание":"230 В",
                    "Крутящий момент":"15 Н*м",
                    "Время закрытия":"15 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"90 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"4 года"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            }
        ]
    },
    {
        "id":34,
        "name":"Шаровой кран с электроприводом MK 12В",
        "price":4933.0,
        "image":"https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
        "category":"kran",
        "description":"Шаровой кран марки Neptun с электроприводом серии МК для блокировки водоснабжения",
        "modifications":[
            {
                "id":"224618",
                "name":"MK 12В - 1/2",
                "price":6090.0,
                "image":"https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
                "specifications":{
                    "Питание":"12 В",
                    "Крутящий момент":"15 Н*м",
                    "Время закрытия":"15 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"90 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"4 года"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            },
            {
                "id":"224620",
                "name":"MK 12В - 3/4",
                "price":6590.0,
                "image":"https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
                "specifications":{
                    "Питание":"12 В",
                    "Крутящий момент":"15 Н*м",
                    "Время закрытия":"15 сек",
                    "Материал крана":"Латунь CW617N",
                    "MAX температура раб. среды":"90 °C",
                    "Потребляемая мощность":"10 Вт",
                    "Степень пылевлагозащиты":"IP64",
                    "Ресурс изделия":"100 000 циклов",
                    "Гарантия":"4 года"
                },
                "description":"Шаровой кран Neptun с электроприводом серии PROFI для блокировки водоснабжения.",
                "instructions":{}
            }
        ]
    },
    {
        "id":37,
        "name":"Раздвижной карниз с электроприводом Novo N21",
        "price":0.0,
        "image":"https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
        "category":"karniz",
        "description":"Цену уточняйте с менеджером",
        "modifications":[
            {
                "id":"266210",
                "name":"Novo N21 - 1 м",
                "price":0.0,
                "image":"https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
                "specifications":{
                    "Крутящий момент":"1,2 Нм",
                    "Потребляемая мощность":"36 Вт",
                    "Гарантия":"5 лет",
                    "Степень защиты":"IP 44",
                    "Весовая нагрузка":"60 кг",
                    "Скорость перемещения":"10 – 20 см/сек",
                    "Напряжение питания":"100 – 240 В",
                    "Частота":"868 МГц"
                },
                "description":"Одна из лучших систем горизонтальной раздвижки штор. Бесшумная работа, высокая мощность.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1yVLFqcXi-Hg4ocpcBsVipUecIO1gsPKRZNM-A9A2VAc/edit?usp=sharing"
                }
            },
            {
                "id":"266210",
                "name":"Novo N21 - 2 м",
                "price":0.0,
                "image":"https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
                "specifications":{
                    "Крутящий момент":"1,2 Нм",
                    "Потребляемая мощность":"36 Вт",
                    "Гарантия":"5 лет",
                    "Степень защиты":"IP 44",
                    "Весовая нагрузка":"60 кг",
                    "Скорость перемещения":"10 – 20 см/сек",
                    "Напряжение питания":"100 – 240 В",
                    "Частота":"868 МГц"
                },
                "description":"Одна из лучших систем горизонтальной раздвижки штор. Бесшумная работа, высокая мощность.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1yVLFqcXi-Hg4ocpcBsVipUecIO1gsPKRZNM-A9A2VAc/edit?usp=sharing"
                }
            },
            {
                "id":"266210",
                "name":"Novo N21 - 3 м",
                "price":0.0,
                "image":"https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
                "specifications":{
                    "Крутящий момент":"1,2 Нм",
                    "Потребляемая мощность":"36 Вт",
                    "Гарантия":"5 лет",
                    "Степень защиты":"IP 44",
                    "Весовая нагрузка":"60 кг",
                    "Скорость перемещения":"10 – 20 см/сек",
                    "Напряжение питания":"100 – 240 В",
                    "Частота":"868 МГц"
                },
                "description":"Одна из лучших систем горизонтальной раздвижки штор. Бесшумная работа, высокая мощность.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1yVLFqcXi-Hg4ocpcBsVipUecIO1gsPKRZNM-A9A2VAc/edit?usp=sharing"
                }
            },
            {
                "id":"266210",
                "name":"Novo N21 - 4 м",
                "price":0.0,
                "image":"https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
                "specifications":{
                    "Крутящий момент":"1,2 Нм",
                    "Потребляемая мощность":"36 Вт",
                    "Гарантия":"5 лет",
                    "Степень защиты":"IP 44",
                    "Весовая нагрузка":"60 кг",
                    "Скорость перемещения":"10 – 20 см/сек",
                    "Напряжение питания":"100 – 240 В",
                    "Частота":"868 МГц"
                },
                "description":"Одна из лучших систем горизонтальной раздвижки штор. Бесшумная работа, высокая мощность.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1yVLFqcXi-Hg4ocpcBsVipUecIO1gsPKRZNM-A9A2VAc/edit?usp=sharing"
                }
            },
            {
                "id":"266210",
                "name":"Novo N21 - 5 м",
                "price":0.0,
                "image":"https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
                "specifications":{
                    "Крутящий момент":"1,2 Нм",
                    "Потребляемая мощность":"36 Вт",
                    "Гарантия":"5 лет",
                    "Степень защиты":"IP 44",
                    "Весовая нагрузка":"60 кг",
                    "Скорость перемещения":"10 – 20 см/сек",
                    "Напряжение питания":"100 – 240 В",
                    "Частота":"868 МГц"
                },
                "description":"Одна из лучших систем горизонтальной раздвижки штор. Бесшумная работа, высокая мощность.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1yVLFqcXi-Hg4ocpcBsVipUecIO1gsPKRZNM-A9A2VAc/edit?usp=sharing"
                }
            },
            {
                "id":"266210",
                "name":"Novo N21 - 6 м",
                "price":0.0,
                "image":"https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
                "specifications":{
                    "Крутящий момент":"1,2 Нм",
                    "Потребляемая мощность":"36 Вт",
                    "Гарантия":"5 лет",
                    "Степень защиты":"IP 44",
                    "Весовая нагрузка":"60 кг",
                    "Скорость перемещения":"10 – 20 см/сек",
                    "Напряжение питания":"100 – 240 В",
                    "Частота":"868 МГц"
                },
                "description":"Одна из лучших систем горизонтальной раздвижки штор. Бесшумная работа, высокая мощность.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1yVLFqcXi-Hg4ocpcBsVipUecIO1gsPKRZNM-A9A2VAc/edit?usp=sharing"
                }
            }
        ]
    },
    {
        "id":38,
        "name":"Рулонный карниз Novo K35-TP-6-28",
        "price":0.0,
        "image":"https://static.tildacdn.com/tild3236-6365-4932-b331-376534386130/5ad95401d809d.jpg",
        "category":"karniz",
        "description":"Цену уточняйте с менеджером",
        "modifications":[
            {
                "id":"299196",
                "name":"Внутривальный электропривод для рулонных штор Novo K35-TP-6-28",
                "price":0.0,
                "image":"https://static.tildacdn.com/tild3236-6365-4932-b331-376534386130/5ad95401d809d.jpg",
                "specifications":{
                    "Крутящий момент":"6 Нм",
                    "Потребляемая мощность":"120 Вт",
                    "Степень защиты":"IP 44",
                    "Уровень шума":"28 дБ",
                    "Напряжение питания":"230 В",
                    "Скорость вращения":"28 об/мин",
                    "Диаметр вала":"35 мм"
                },
                "description":"Одна из лучших систем вертикальной раздвижки штор. Бесшумная работа, высокая мощность. Цену уточняйте с менеджером.",
                "instructions":{
                    "pdf":"https://docs.google.com/document/d/1yVLFqcXi-Hg4ocpcBsVipUecIO1gsPKRZNM-A9A2VAc/edit?usp=sharing"
                }
            }
        ]
    },
    {
        "id":43,
        "name":"Сервопривод электротермический Valtec",
        "price":1800.0,
        "image":"https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg",
        "category":"other",
        "description":"Электротермический двухпозиционный сервопривод VT.TE3043 применяется для автоматического управления радиаторным или коллекторным термостатическим клапаном систем водяного отопления (в том числе теплого пола) и охлаждения зданий. Действие привода основано на расширении заполняющего сильфон армированного парафина при протекании электрического тока через встроенный нагревательный элемент по сигналу от комнатного термостата или контроллера.",
        "modifications":[
            {
                "id":"276876",
                "name":"220 В - Нормально-Закрытый",
                "price":2000.0,
                "image":"https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg",
                "specifications":{
                    "MAX коммутируемый ток":"300 мА",
                    "Напряжение питания":"220 В",
                    "Время открытия / закрытия клапана":"180 сек",
                    "Длина подсоеднияемого кабеля":"1 м",
                    "Развиваемое усиле на штоке":"80 Н",
                    "Вес":"50 г",
                    "Длина":"47",
                    "Ширина":"47",
                    "Высота":"58"
                },
                "description":"Нормально-ЗАКРЫТЫЙ – клапан закрыт при отсутствии напряжения.",
                "instructions":{
                    "pdf":"https://valtec.ru/document/technical/VT.TE3043-0220.pdf"
                }
            },
            {
                "id":"276878",
                "name":"24 В - Нормально-Закрытый",
                "price":2000.0,
                "image":"https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg",
                "specifications":{
                    "MAX коммутируемый ток":"500 мА",
                    "Напряжение питания":"24 В",
                    "Время открытия / закрытия клапана":"180 сек",
                    "Длина подсоеднияемого кабеля":"1 м",
                    "Развиваемое усиле на штоке":"80 Н",
                    "Вес":"50 г",
                    "Длина":"47",
                    "Ширина":"47",
                    "Высота":"58"
                },
                "description":"Нормально-ЗАКРЫТЫЙ – клапан закрыт при отсутствии напряжения.",
                "instructions":{
                    "pdf":"https://valtec.ru/document/technical/VT.TE3043-0220.pdf"
                }
            },
            {
                "id":"276874",
                "name":"220 В - Нормально-Открытый",
                "price":2000.0,
                "image":"https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg",
                "specifications":{
                    "MAX коммутируемый ток":"300 мА",
                    "Напряжение питания":"220 В",
                    "Время открытия / закрытия клапана":"180 сек",
                    "Длина подсоеднияемого кабеля":"1 м",
                    "Развиваемое усиле на штоке":"80 Н",
                    "Вес":"50 г",
                    "Длина":"47",
                    "Ширина":"47",
                    "Высота":"58"
                },
                "description":"Нормально-ОТКРЫТЫЙ – клапан открыт при отсутствии напряжения.",
                "instructions":{
                    "pdf":"https://valtec.ru/document/technical/VT.TE3043-0220.pdf"
                }
            },
            {
                "id":"276880",
                "name":"24 В - Нормально-Открытый",
                "price":2000.0,
                "image":"https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg",
                "specifications":{
                    "MAX коммутируемый ток":"500 мА",
                    "Напряжение питания":"24 В",
                    "Время открытия / закрытия клапана":"180 сек",
                    "Длина подсоеднияемого кабеля":"1 м",
                    "Развиваемое усиле на штоке":"80 Н",
                    "Вес":"50 г",
                    "Длина":"47",
                    "Ширина":"47",
                    "Высота":"58"
                },
                "description":"Нормально-ОТКРЫТЫЙ – клапан открыт при отсутствии напряжения.",
                "instructions":{
                    "pdf":"https://valtec.ru/document/technical/VT.TE3043-0220.pdf"
                }
            }
        ]
    },
    {
        "id":24,
        "name":"Антенна HYBRID BOX",
        "price":8140.0,
        "image":"https://static.tildacdn.com/tild3662-3564-4163-a631-616664323864/hybrid-box.jpg",
        "category":"antenna",
        "description":"",
        "modifications":[
            {
                "id":"206754",
                "name":"TS-9",
                "price":8140.0,
                "image":"https://static.tildacdn.com/tild3662-3564-4163-a631-616664323864/hybrid-box.jpg",
                "specifications":{
                    "Коэффициент усиления 4G":"2х16 дБи (на 2600 МГц), 2х13 дБи (на 1800 МГц), 2х8 дБи (на 800 МГц)",
                    "Коэффициент усиления 3G":"2х14 дБи (на 2100 МГц)",
                    "КСВ":"не более 1,5",
                    "Ширина ДН":"H – 26°, V – 26°",
                    "Температурный диапазон":"от -30 до +50 °С",
                    "Рабочие диапазоны частот":"790-960 МГц, 1750-2170 МГц, 2500-2700 МГц",
                    "Интерфейс подключения":"CRC9/TS9",
                    "Технология MIMO":"2х2",
                    "Вес":"1300",
                    "Длина":"250",
                    "Ширина":"250",
                    "Высота":"70"
                },
                "description":"Антенны серии HiTE PRO HYBRID предназначены для усиления сигнала беспроводного\nИнтернета. Они имеют поддержку двух технологий передачи данных: 3G и 4G. Если в\nместе установки еще нет 4G-сигнала, с помощью антенны можно усилить 3G. При\nпоявлении 4G-покрытия антенна автоматически переключится на него.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/2022/03/hybrid.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239050"
                }
            },
            {
                "id":"279368",
                "name":"CRC-9",
                "price":8140.0,
                "image":"https://static.tildacdn.com/tild3662-3564-4163-a631-616664323864/hybrid-box.jpg",
                "specifications":{
                    "Коэффициент усиления 4G":"2х16 дБи (на 2600 МГц), 2х13 дБи (на 1800 МГц), 2х8 дБи (на 800 МГц)",
                    "Коэффициент усиления 3G":"2х14 дБи (на 2100 МГц)",
                    "КСВ":"не более 1,5",
                    "Ширина ДН":"H – 26°, V – 26°",
                    "Температурный диапазон":"от -30 до +50 °С",
                    "Рабочие диапазоны частот":"790-960 МГц, 1750-2170 МГц, 2500-2700 МГц",
                    "Интерфейс подключения":"CRC9/TS9",
                    "Технология MIMO":"2х2",
                    "Вес":"1300",
                    "Длина":"250",
                    "Ширина":"250",
                    "Высота":"70"
                },
                "description":"Антенны серии HiTE PRO HYBRID предназначены для усиления сигнала беспроводного\nИнтернета. Они имеют поддержку двух технологий передачи данных: 3G и 4G. Если в\nместе установки еще нет 4G-сигнала, с помощью антенны можно усилить 3G. При\nпоявлении 4G-покрытия антенна автоматически переключится на него.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/2022/03/hybrid.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239050"
                }
            }
        ]
    },
    {
        "id":25,
        "name":"Антенна DUO BOX",
        "price":10340.0,
        "image":"https://static.tildacdn.com/tild3336-3461-4630-a664-643939333437/duo-box.jpg",
        "category":"antenna",
        "description":"",
        "modifications":[
            {
                "id":"279366",
                "name":"CRC-9",
                "price":10340.0,
                "image":"https://static.tildacdn.com/tild3336-3461-4630-a664-643939333437/duo-box.jpg",
                "specifications":{
                    "Коэффициент усиления 4G":"2х20 дБи (на 2600 МГц), 2х16 дБи (на 1800 МГц), 2х12 дБи (на 800 МГц)",
                    "Коэффициент усиления 3G":"2х18 дБи (на 2100 МГц)",
                    "КСВ":"не более 1,5",
                    "Ширина ДН":"H – 13°, V – 13°",
                    "Температурный диапазон":"от -30 до +50 °С",
                    "Рабочие диапазоны частот":"790-960 МГц, 1750-2170 МГц, 2500-2700 МГц",
                    "Интерфейс подключения":"CRC9/TS9",
                    "Технология MIMO":"2х2",
                    "Вес":"2900",
                    "Длина":"410",
                    "Ширина":"410",
                    "Высота":"30"
                },
                "description":"Антенны серии HiTE PRO DUO предназначены для усиления беспроводного Интернета. Они работают в трех диапазонах LTE(4G) 800/1800/2600 МГц и двух диапазонах UMTS(3G) – 900/2100 МГц.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/2022/03/duo.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239050"
                }
            },
            {
                "id":"206928",
                "name":"TS-9",
                "price":10340.0,
                "image":"https://static.tildacdn.com/tild3336-3461-4630-a664-643939333437/duo-box.jpg",
                "specifications":{
                    "Коэффициент усиления 4G":"2х20 дБи (на 2600 МГц), 2х16 дБи (на 1800 МГц), 2х12 дБи (на 800 МГц)",
                    "Коэффициент усиления 3G":"2х18 дБи (на 2100 МГц)",
                    "КСВ":"не более 1,5",
                    "Ширина ДН":"H – 13°, V – 13°",
                    "Температурный диапазон":"от -30 до +50 °С",
                    "Рабочие диапазоны частот":"790-960 МГц, 1750-2170 МГц, 2500-2700 МГц",
                    "Интерфейс подключения":"CRC9/TS9",
                    "Технология MIMO":"2х2",
                    "Вес":"2900",
                    "Длина":"410",
                    "Ширина":"410",
                    "Высота":"30"
                },
                "description":"Антенны серии HiTE PRO DUO предназначены для усиления беспроводного Интернета. Они работают в трех диапазонах LTE(4G) 800/1800/2600 МГц и двух диапазонах UMTS(3G) – 900/2100 МГц.",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/wp-content/uploads/2022/03/duo.pdf",
                    "video":"https://vkvideo.ru/video-140176277_456239050"
                }
            }
        ]
    },
    {
        "id":26,
        "name":"Кабельная сборка SMA-SMA",
        "price":1100.0,
        "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
        "category":"antenna",
        "description":"",
        "modifications":[
            {
                "id":"207704",
                "name":"5D-FB SMA (male) - SMA (female) 10 метров",
                "price":2600.0,
                "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
                "specifications":{
                    "Тип кабеля":"5D-FB",
                    "Длина кабеля":"10 м",
                    "Разъемы":"Male-Female"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            },
            {
                "id":"207694",
                "name":"5D-FB SMA (male) - SMA (female) 5 метров",
                "price":1500.0,
                "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
                "specifications":{
                    "Тип кабеля":"5D-FB",
                    "Длина кабеля":"5 м",
                    "Разъемы":"Male-Female"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            },
            {
                "id":"207692",
                "name":"5D-FB SMA (male) - SMA (male) 5 метров",
                "price":1500.0,
                "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
                "specifications":{
                    "Тип кабеля":"5D-FB",
                    "Длина кабеля":"5 м",
                    "Разъемы":"Male-Male"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            },
            {
                "id":"210476",
                "name":"Кабель RG-58 SMA (male) - SMA (male) 10 метров",
                "price":1850.0,
                "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
                "specifications":{
                    "Тип кабеля":"RG-58",
                    "Длина кабеля":"10 м",
                    "Разъемы":"Male-Male"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            },
            {
                "id":"210478",
                "name":"Кабель RG-58 с разъемами SMA (male) - SMA (male) 5 метров",
                "price":1100.0,
                "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
                "specifications":{
                    "Тип кабеля":"RG-58",
                    "Длина кабеля":"5 м",
                    "Разъемы":"Male-Male"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            },
            {
                "id":"210472",
                "name":"Кабель RG-58 с разъемами SMA (male) - SMA (female) 10 метров",
                "price":1850.0,
                "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
                "specifications":{
                    "Тип кабеля":"RG-58",
                    "Длина кабеля":"10 м",
                    "Разъемы":"Male-Female"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            },
            {
                "id":"210474",
                "name":"Кабель RG-58 с разъемами SMA (male) - SMA (female) 5 метров",
                "price":1100.0,
                "image":"https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
                "specifications":{
                    "Тип кабеля":"RG-58",
                    "Длина кабеля":"5 м",
                    "Разъемы":"Male-Female"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            }
        ]
    },
    {
        "id":27,
        "name":"Пигтейл CRC9/TS9",
        "price":400.0,
        "image":"https://static.tildacdn.com/tild3733-6439-4735-b031-323238626664/pigtail.jpg",
        "category":"antenna",
        "description":"",
        "modifications":[
            {
                "id":"207428",
                "name":"CRC-9",
                "price":400.0,
                "image":"https://static.tildacdn.com/tild3733-6439-4735-b031-323238626664/pigtail.jpg",
                "specifications":{},
                "description":"Пигтейл для подключения модема к антенне усиления сигнала 3G/4G.",
                "instructions":{}
            },
            {
                "id":"277678",
                "name":"TS-9",
                "price":400.0,
                "image":"https://static.tildacdn.com/tild3733-6439-4735-b031-323238626664/pigtail.jpg",
                "specifications":{},
                "description":"Пигтейл для подключения модема к антенне усиления сигнала 3G/4G.",
                "instructions":{}
            }
        ]
    },
    {
        "id":28,
        "name":"USB-удлинитель на 5 метров",
        "price":490.0,
        "image":"https://static.tildacdn.com/tild3339-6633-4939-b539-373261656265/usb-udlin-10m.jpg",
        "category":"antenna",
        "description":"",
        "modifications":[
            {
                "id":"207542",
                "name":"USB-удлинитель на 5 метров",
                "price":490.0,
                "image":"https://static.tildacdn.com/tild3339-6633-4939-b539-373261656265/usb-udlin-10m.jpg",
                "specifications":{
                    "Длина кабеля":"5 м",
                    "Интерфейс подключения":"USB 2.0"
                },
                "description":"Кабель для антенн усиления сигнала 3G/4G.",
                "instructions":{}
            }
        ]
    },
    {
        "id":42,
        "name":"Контактор модульный КМ 63А 2NО",
        "price":3277.0,
        "image":"https://static.tildacdn.com/tild6539-3532-4363-a166-656566656465/A25DE53A5D1ABF6D4182.jpg",
        "category":"other",
        "description":"Двухмодульный контактор",
        "modifications":[
            {
                "id":"276872",
                "name":"КМ 63А 2NО",
                "price":3277.0,
                "image":"https://static.tildacdn.com/tild6539-3532-4363-a166-656566656465/A25DE53A5D1ABF6D4182.jpg",
                "specifications":{
                    "Напряжение катушки":"230 В (АС)",
                    "Номинальный рабочий ток":"63 А",
                    "Номинальное рабочее напряжение":"230/400 В",
                    "Длина":"36",
                    "Ширина":"85",
                    "Высота":"58"
                },
                "description":"",
                "instructions":{
                    "pdf":"https://www.hite-pro.ru/shop/goods/kontaktor-modulnyj-km-63a-2no-2-mod"
                }
            }
        ]
    },
    {
        "id":85,
        "name":"Механизм замка KEYWAY с бэксетом 70 мм ",
        "price":6000.0,
        "image":"https://static.tildacdn.com/stor3561-6335-4131-a362-356335626264/68d4b851a6d8ca518ba16a6836710a8c.png",
        "category":"lock",
        "description":"На случай, если механизм с бэксетом 60 мм не подходит",
        "modifications":[
            {
                "id":"319614",
                "name":"SL300",
                "price":6000.0,
                "image":"https://static.tildacdn.com/stor3561-6335-4131-a362-356335626264/68d4b851a6d8ca518ba16a6836710a8c.png",
                "specifications":{
                    "Бэксет":"70 мм"
                },
                "description":"На случай, если механизм с бэксетом 60 мм не подходит",
                "instructions":{}
            },
            {
                "id":"319616",
                "name":"SL500",
                "price":6000.0,
                "image":"https://static.tildacdn.com/stor3561-6335-4131-a362-356335626264/68d4b851a6d8ca518ba16a6836710a8c.png",
                "specifications":{
                    "Бэксет":"70 мм"
                },
                "description":"На случай, если механизм с бэксетом 60 мм не подходит",
                "instructions":{}
            }
        ]
    }
]
;

// --- Состояние ---
let cart = [];
let currentCategory = 'all';
let currentSearchQuery = '';

// --- DOM элементы ---
const categoriesList = document.getElementById('categoriesList');
const productGrid = document.getElementById('productGrid');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItems = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');

// --- Элементы для отображения бонусов и скидки ---
const bonusesDisplay = document.getElementById('bonusesDisplay');
const bonusValue = document.getElementById('bonusValue');
const discontDisplay = document.getElementById('discontDisplay');
const discontValue = document.getElementById('discontValue');

// --- Новые DOM элементы для формы корзины ---
// Переключатель
const orderTypeToggle = document.getElementById('orderTypeToggle');
//const kpLabel = document.getElementById('kpLabel');
//const orderLabel = document.getElementById('orderLabel');
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
const deliveryAddressContainer = document.getElementById('deliveryAddressContainer');
const legalInfoContainer = document.getElementById('legalInfoContainer');

// --- НОВЫЕ DOM элементы для чекбокса "Заполнить по прошлому заказу" и контейнеров ---
const usePreviousOrderCheckbox = document.getElementById('usePreviousOrderCheckbox');

// --- Новые DOM элементы для полей КП ---
const kpFieldsSection = document.getElementById('kpFieldsSection');
const kpRecipientPhone = document.getElementById('kpRecipientPhone');

// --- Новые DOM элементы для модального окна описания ---
const detailsModal = document.getElementById('detailsModal');
const closeDetailsModal = document.getElementById('closeDetailsModal');
const detailsModalImage = document.getElementById('detailsModalImage');
const detailsModalTitle = document.getElementById('detailsModalTitle');
// --- Новые элементы для модального окна деталей ---
const detailsModSelectorContainer = document.getElementById('details-mod-selector-container');
const detailsModSelector = document.getElementById('details-mod-selector');

// --- Новые DOM элементы для поиска ---
const searchInput = document.getElementById('searchInput');
const clearSearchButton = document.getElementById('clearSearch');

// --- Инициализация ---
document.addEventListener('DOMContentLoaded', () => {
    // Получаем параметры из URL (бонусы, ID, скидка)
    urlParams = getUrlParams();
    // Отображаем бонусы и скидку из URL-параметров
    bonusValue.textContent = urlParams.bonuses.toLocaleString('ru-RU');
    discontValue.textContent = urlParams.discont.toLocaleString('ru-RU');

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

    // --- Добавляем обработчики событий для поиска ---
    searchInput.addEventListener('input', handleSearchInput);
    clearSearchButton.addEventListener('click', clearSearch);

    // --- Добавляем обработчик события для чекбокса "Заполнить по прошлому заказу" ---
    usePreviousOrderCheckbox.addEventListener('change', handleUsePreviousOrderChange);

    window.addEventListener('click', (event) => {
        if (event.target === detailsModal) {
            closeProductDetailsModal();
        }
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // --- Логика переключения вкладок в модальном окне деталей ---
    document.querySelector('.tabs')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-button')) {
            // Получаем имя вкладки из data-атрибута
            const tabName = e.target.dataset.tab;

            // Убираем класс 'active' у всех кнопок и панелей
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

            // Добавляем класс 'active' к кликнутой кнопке и соответствующей панели
            e.target.classList.add('active');
            document.getElementById(`${tabName}-content`).classList.add('active');
        }
    });
});

// --- Обработчик ввода в поле поиска ---
function handleSearchInput(e) {
    const query = e.target.value.trim();
    currentSearchQuery = query.toLowerCase();

    // Показываем/скрываем кнопку очистки
    clearSearchButton.style.display = query ? 'flex' : 'none';

    // Перерисовываем товары с учетом поиска и категории
    renderProducts();
}

// --- Очистка поиска ---
function clearSearch() {
    searchInput.value = '';
    currentSearchQuery = '';
    clearSearchButton.style.display = 'none';
    renderProducts();
}

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

    // Всегда скрываем внутренние секции
    deliveryAddressSection.style.display = 'none';
    pickupAddressSection.style.display = 'none';
    deliveryAddressNote.textContent = '';

    if (selectedMethod === 'courier' || selectedMethod === 'pickup_point') {
        // Проверяем, не скрыт ли контейнер из-за чекбокса
        if (!usePreviousOrderCheckbox.checked) {
            deliveryAddressContainer.style.display = 'block'; // Показываем контейнер, если чекбокс не отмечен
        }
        deliveryAddressSection.style.display = 'block'; // Показываем само поле адреса
        if (selectedMethod === 'pickup_point') {
            deliveryAddressNote.textContent = 'Введите адрес пункта выдачи Сдек или Яндекс вместе с городом.';
        } else {
            deliveryAddressNote.textContent = '';
        }
        deliveryAddress.placeholder = selectedMethod === 'courier' ? 'Введите адрес доставки с указанием города' : 'Введите адрес пункта выдач с указанием города';
        deliveryAddress.value = '';
    } else if (selectedMethod === 'pickup') {
        // Проверяем, не скрыт ли контейнер из-за чекбокса
        if (!usePreviousOrderCheckbox.checked) {
            deliveryAddressContainer.style.display = 'block'; // Показываем контейнер, если чекбокс не отмечен
        }
        pickupAddressSection.style.display = 'block';
    } else {
        // Если выбран другой способ (например, "Выберите способ"), скрываем контейнер
        deliveryAddressContainer.style.display = 'none';
    }
}

// --- Обработчик изменения способа оплаты ---
function handlePaymentMethodChange() {
    const selectedMethod = paymentMethod.value;

    if (selectedMethod === 'card') {
        cardPaymentNote.style.display = 'block';
        // Скрываем контейнер с реквизитами, так как это не счет
        legalInfoContainer.style.display = 'none';
    } else {
        cardPaymentNote.style.display = 'none';
        if (selectedMethod === 'invoice') {
            // Проверяем, не скрыт ли контейнер из-за чекбокса
            if (!usePreviousOrderCheckbox.checked) {
                legalInfoContainer.style.display = 'block'; // Показываем контейнер, если чекбокс не отмечен
            }
            legalInfoSection.style.display = 'block'; // Показываем само поле реквизитов
        } else {
            // Если выбран другой способ (например, "Выберите способ"), скрываем контейнер
            legalInfoContainer.style.display = 'none';
        }
    }
}

// --- Обработчик изменения переключателя КП/Заказ ---
function handleOrderTypeToggleChange() {
    const selectedOrderMethod = orderTypeToggle.value;
    if (selectedOrderMethod === 'orderLabel') {
        // Если переключено в положение "Оформить заказ"
        orderFieldsSection.style.display = 'block';
        kpFieldsSection.style.display = 'none'; // Скрываем поля КП
        generateKpButton.style.display = 'none';
        checkoutButton.style.display = 'block';

    } else if  (selectedOrderMethod === 'kpLabel') {
        // Если переключено в положение "Сформировать КП"
        orderFieldsSection.style.display = 'none';
        kpFieldsSection.style.display = 'block'; // Показываем поля КП
        generateKpButton.style.display = 'block';
        checkoutButton.style.display = 'none';

    } else {
        kpFieldsSection.style.display = 'none'; // Скрываем все поля
        generateKpButton.style.display = 'none';
        orderFieldsSection.style.display = 'none';
        checkoutButton.style.display = 'none';
    }
    resetCartFormFields();
}

// --- Обработчик изменения чекбокса "Заполнить по прошлому заказу" ---
function handleUsePreviousOrderChange() {
    const isChecked = usePreviousOrderCheckbox.checked;

    if (isChecked) {
        // Если чекбокс отмечен, скрываем поля телефона и адреса
        recipientPhone.closest('.cart-form-section').style.display = 'none';
        deliveryAddressContainer.style.display = 'none'; // Скрываем весь контейнер адреса

        // Если выбран способ оплаты "Счет на оплату", скрываем банковские реквизиты
        if (paymentMethod.value === 'invoice') {
            legalInfoContainer.style.display = 'none'; // Скрываем весь контейнер реквизитов
        }
    } else {
        // Если чекбокс снят, показываем поля телефона
        recipientPhone.closest('.cart-form-section').style.display = 'block';

        // Показываем адрес, если он должен быть виден (в зависимости от способа доставки)
        // Вызываем обработчик доставки, чтобы он сам решил, показывать адрес или нет
        handleDeliveryMethodChange();

        // Показываем банковские реквизиты, если они должны быть видны (в зависимости от способа оплаты)
        // Вызываем обработчик оплаты, чтобы он сам решил, показывать реквизиты или нет
        handlePaymentMethodChange();
    }
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
    if (currentSearchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearchQuery)
        );
    }

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-products-message">Товары не найдены.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.productId = product.id;

        let modificationsHtml = '';
        if (product.modifications && product.modifications.length > 1) {
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

        if (product.modifications && product.modifications.length > 1) {
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

// --- Обновление цены и изображения товара в зависимости от модификации ---
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

    const imageElement = document.querySelector(`.product-card[data-product-id="${productId}"] .product-image`);
    if (imageElement && selectedMod) {
        imageElement.src = selectedMod.image;
        imageElement.alt = `${product.name} - ${selectedMod.name}`;
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
    if (currentSearchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearchQuery)
        );
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
        const itemImage = selectedMod ? selectedMod.image : product.image;

        const newItem = {
            productId: product.id,
            modificationId: modificationId,
            name: product.name,
            price: selectedMod ? selectedMod.price : product.price,
            image: itemImage,
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
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
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
    orderTypeToggle.value = "empty";
    handleOrderTypeToggleChange();
    resetCartFormFields();
    document.querySelector('input[name="discountType"][value="discount_only"]').checked = true;
    searchInput.value = '';
    currentSearchQuery = '';
    clearSearchButton.style.display = 'none';
}

// --- Вспомогательная функция: получение выбранного типа скидки ---
function getSelectedDiscountType() {
    const discountOptions = document.getElementsByName('discountType');
    let selectedValue = 'discount_only'; // Значение по умолчанию
    for (const option of discountOptions) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }
    return selectedValue;
}

// --- Вспомогательная функция: получение выбранного типа скидки ---
function getSelectedDiscountType() {
    return document.querySelector('input[name="discountType"]:checked')?.value || 'discount_only';
}

// --- Валидация формы корзины ---
function validateCartForm(isKp = false) {
    let isValid = true;
    let errorMessage = '';

    // --- Проверки для КП ---
    if (isKp) {
        // Для КП валидируем ТОЛЬКО его собственные поля (теперь только телефон)
        const phone = kpRecipientPhone.value.trim();

        if (!phone) {
            isValid = false;
            errorMessage += '\n- Укажите телефон получателя (для КП).';
        } else if (phone.replace(/\D/g, '').length !== 11 || !phone.startsWith('+7')) {
             isValid = false;
             errorMessage += '\n- Введите корректный номер телефона (+7 ...) (для КП).';
        }
        // Больше никаких проверок для КП не требуется

    } else {
        // --- Проверки для Заказа ---
        // Определяем, используется ли "прошлый заказ"
        const usePrevious = usePreviousOrderCheckbox.checked;

        // Проверки телефона и адреса (если НЕ используется "прошлый заказ")
        if (!usePrevious) {
            const phone = recipientPhone.value.trim();
            if (!phone) {
                isValid = false;
                errorMessage += '\n- Укажите телефон получателя.';
            } else if (phone.replace(/\D/g, '').length !== 11 || !phone.startsWith('+7')) {
                 isValid = false;
                 errorMessage += '\n- Введите корректный номер телефона (+7 ...).';
            }

            const delivery = deliveryMethod.value;
            const address = deliveryAddress.value.trim();

            if (!delivery) {
                isValid = false;
                errorMessage += '\n- Выберите способ доставки.';
            } else if ((delivery === 'courier' || delivery === 'pickup_point') && !address) {
                isValid = false;
                errorMessage += '\n- Укажите адрес доставки или пункт выдачи.';
            }
        } // Конец проверок, зависящих от "прошлого заказа"

        // Проверки оплаты и юр. данных (всегда, если выбран способ оплаты)
        const payment = paymentMethod.value;

        if (!payment) {
            isValid = false;
            errorMessage += '\n- Выберите способ оплаты.';
        }

        // Проверки юр. данных (если НЕ используется "прошлый заказ" И выбран счет)
        if (!usePrevious && payment === 'invoice') {
            const inn = organizationInn.value.trim();
            const address = organizationAddress.value.trim();
            const bik = organizationBik.value.trim();
            const account = organizationAccount.value.trim();

            if (!inn) {
                isValid = false;
                errorMessage += '\n- Укажите ИНН организации.';
            }
            if (!address) {
                isValid = false;
                errorMessage += '\n- Укажите юридический адрес организации.';
            }
            if (!bik) {
                isValid = false;
                errorMessage += '\n- Укажите БИК банка.';
            }
            if (!account) {
                isValid = false;
                errorMessage += '\n- Укажите расчетный счет.';
            }
        }
    }

    if (!isValid) {
        alert('Пожалуйста, исправьте следующие ошибки:' + errorMessage);
    }

    return isValid;
}


function resetCartFormFields() {
    // Сброс чекбокса "прошлый заказ"
    usePreviousOrderCheckbox.checked = false;
    handleUsePreviousOrderChange(); // Это вызовет показ полей, если они были скрыты

    // Сброс общих полей
    [recipientPhone, deliveryAddress, kpRecipientPhone,
     organizationInn, organizationAddress, organizationBik, organizationAccount]
        .forEach(el => el.value = '');

    [deliveryAddressNote].forEach(el => el.textContent = '');

    [pickupAddressSection, cardPaymentNote, legalInfoSection,
     deliveryAddressContainer, legalInfoContainer]
        .forEach(el => el.style.display = 'none');

    [deliveryMethod, paymentMethod]
        .forEach(el => el.value = '');

    // Сброс полей КП
    kpRecipientPhone.value = '';


    // Сброс чекбокса "прошлый заказ" и показ полей
    usePreviousOrderCheckbox.checked = false;
    recipientPhone.closest('.cart-form-section').style.display = 'block'; // Показать телефон по умолчанию
    handleDeliveryMethodChange(); // Сбросить видимость адреса заказа
    handlePaymentMethodChange(); // Сбросить видимость реквизитов заказа

}

// --- Вспомогательная функция: получение выбранного типа скидки ---
if (orderFieldsSection.style.display !== 'none') {
        function getSelectedDiscountType() {
    return document.querySelector('input[name="discountType"]:checked')?.value || 'discount_only';}
    }


// --- Валидация формы корзины ---
// isKpMode = true означает валидацию для КП
// isKpMode = false означает валидацию для Заказа
function validateCartForm(isKpMode = false) {
    let isValid = true;
    let errorMessage = '';

    // --- Проверки для КП ---
    if (isKpMode) {
        // Для КП валидируем ТОЛЬКО телефон покупателя
        const phone = kpRecipientPhone.value.trim();

        if (!phone) {
            isValid = false;
            errorMessage += '\n- Укажите телефон покупателя.';
        } else if (phone.replace(/\D/g, '').length !== 11 || !phone.startsWith('+7')) {
             isValid = false;
             errorMessage += '\n- Введите корректный номер телефона (+7 ...) (для КП).';
        }
        // Больше никаких проверок для КП не требуется
    } else {
        // --- Проверки для Заказа ---
        // Определяем, используется ли "прошлый заказ"
        const usePrevious = usePreviousOrderCheckbox.checked;

        // Проверки телефона и адреса (если НЕ используется "прошлый заказ")
        if (!usePrevious) {
            const phone = recipientPhone.value.trim();
            if (!phone) {
                isValid = false;
                errorMessage += '\n- Укажите телефон получателя.';
            } else if (phone.replace(/\D/g, '').length !== 11 || !phone.startsWith('+7')) {
                 isValid = false;
                 errorMessage += '\n- Введите корректный номер телефона (+7 ...).';
            }

            const delivery = deliveryMethod.value;
            const address = deliveryAddress.value.trim();

            if (!delivery) {
                isValid = false;
                errorMessage += '\n- Выберите способ доставки.';
            } else if ((delivery === 'courier' || delivery === 'pickup_point') && !address) {
                isValid = false;
                errorMessage += '\n- Укажите адрес доставки или пункт выдачи.';
            }
        } // Конец проверок, зависящих от "прошлого заказа"

        // Проверки оплаты и юр. данных (всегда, если выбран способ оплаты)
        const payment = paymentMethod.value;

        if (!payment) {
            isValid = false;
            errorMessage += '\n- Выберите способ оплаты.';
        }

        // Проверки юр. данных (если НЕ используется "прошлый заказ" И выбран счет)
        if (!usePrevious && payment === 'invoice') {
            const inn = organizationInn.value.trim();
            const address = organizationAddress.value.trim();
            const bik = organizationBik.value.trim();
            const account = organizationAccount.value.trim();

            if (!inn) {
                isValid = false;
                errorMessage += '\n- Укажите ИНН организации.';
            }
            if (!address) {
                isValid = false;
                errorMessage += '\n- Укажите юридический адрес организации.';
            }
            if (!bik) {
                isValid = false;
                errorMessage += '\n- Укажите БИК банка.';
            }
            if (!account) {
                isValid = false;
                errorMessage += '\n- Укажите расчетный счет.';
            }
        }
    }

    if (!isValid) {
        alert('Пожалуйста, исправьте следующие ошибки:' + errorMessage);
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

    if (!validateCartForm(true)) return;

    // --- Вспомогательная функция: получение выбранного типа скидки ---
    function getSelectedDiscountType() {
        let selectedValue = 'discount_only';
        return selectedValue;
    }

    // Подготавливаем данные для отправки
    const kpPayload = {
        type: "commercial_offer", // Тип запроса
        bonuses: urlParams.bonuses, // Бонусы из URL
        userId: urlParams.userId,   // ID пользователя из URL
        discont: urlParams.discont, // Скидка из URL
        discountType: getSelectedDiscountType(), // Выбранный тип скидки
        HelpManagerNeed: HelpManagerNeed.checked,
        // --- НОВОЕ: Только телефон покупателя для КП ---
        phone: kpRecipientPhone.value,

        // --- КОНЕЦ НОВОГО ---
        items: cart.map(item => ({
            productId: item.productId,
            modificationId: item.modificationId,
            name: item.name,
            modificationName: item.modificationName,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity,
            image: item.image // Добавляем изображение
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
    kpSummary += `Скидка партнёра: ${kpPayload.discont.toLocaleString('ru-RU')}%\n`;
    if (kpPayload.userId) {
        kpSummary += `ID пользователя: ${kpPayload.userId}\n`;
    }
    kpSummary += `Тип скидки: ${kpPayload.discountType}\n`;
    // --- НОВОЕ: Добавляем информацию из КП ---
    kpSummary += `\nТелефон покупателя: ${kpPayload.customerPhone}\n`;
    kpSummary += "\nБот отправит КП с розничными ценами.\n";
    // --- КОНЕЦ НОВОГО ---
    kpSummary += "\nКоммерческое предложение сформировано и отправлено в бот!";

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
        discont: urlParams.discont, // Скидка из URL
        discountType: getSelectedDiscountType(), // Выбранный тип скидки
        usePreviousOrder: usePreviousOrderCheckbox.checked, // Значение чекбокса заполнить по прошлому заказу
        items: cart.map(item => ({
            productId: item.productId,
            modificationId: item.modificationId,
            name: item.name,
            modificationName: item.modificationName,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity,
            image: item.image // Добавляем изображение
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
    orderSummary += `Скидка партнёра: ${orderPayload.discont.toLocaleString('ru-RU')}%\n`;
    if (orderPayload.userId) {
        orderSummary += `ID пользователя: ${orderPayload.userId}\n`;
    }
    orderSummary += `Тип скидки: ${orderPayload.discountType}\n`;
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
    orderSummary += "\nЗаказ оформлен и отправлен менеджеру!";
    ;

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

    // Получаем данные первой модификации или базовые данные товара
    let modData = null;
    if (product.modifications && product.modifications.length > 0) {
        modData = product.modifications[0];
    }

    // Обновляем содержимое модального окна
    detailsModalImage.src = modData ? modData.image : product.image;
    detailsModalImage.alt = modData ? `${product.name} - ${modData.name}` : product.name;
    detailsModalTitle.textContent = product.name;

    // Заполняем вкладки данными первой модификации
    if (modData) {
        updateDetailsTabs(modData);
    } else {
        // Если модификаций нет, показываем базовое описание
        document.getElementById('specifications-content').innerHTML = '<p>Характеристики не указаны.</p>';
        document.getElementById('description-content').textContent = product.description || 'Описание отсутствует.';
        document.getElementById('instructions-content').innerHTML = '<p>Инструкции не указаны.</p>';
    }

    // Если у товара больше одной модификации, показываем селектор
    if (product.modifications && product.modifications.length > 1) {
        detailsModSelector.innerHTML = ''; // Очищаем перед заполнением
        product.modifications.forEach(mod => {
            const option = document.createElement('option');
            option.value = mod.id;
            option.textContent = mod.name;
            detailsModSelector.appendChild(option);
        });
        detailsModSelectorContainer.style.display = 'block';

        // Добавляем обработчик события изменения
        detailsModSelector.onchange = () => {
            const selectedModId = detailsModSelector.value;
            const selectedMod = product.modifications.find(m => m.id === selectedModId);
            if (selectedMod) {
                detailsModalImage.src = selectedMod.image;
                detailsModalImage.alt = `${product.name} - ${selectedMod.name}`;
                updateDetailsTabs(selectedMod);
            }
        };
    } else {
        detailsModSelectorContainer.style.display = 'none';
    }

    // Показываем модальное окно
    detailsModal.style.display = 'block';
}

// --- Вспомогательная функция для обновления содержимого вкладок ---
function updateDetailsTabs(modData) {
    // Вкладка "Характеристики"
    const specsContent = document.getElementById('specifications-content');
    if (modData.specifications && Object.keys(modData.specifications).length > 0) {
        let specsHtml = '<ul class="specs-list">';
        for (const [key, value] of Object.entries(modData.specifications)) {
            specsHtml += `<li><span class="spec-key">${key}:</span> <span class="spec-value">${value}</span></li>`;
        }
        specsHtml += '</ul>';
        specsContent.innerHTML = specsHtml;
    } else {
        specsContent.innerHTML = '<p>Характеристики не указаны.</p>';
    }

    // Вкладка "Описание"
    const descContent = document.getElementById('description-content');
    descContent.textContent = modData.description || 'Описание отсутствует.';

    // Вкладка "Инструкции"
    const instContent = document.getElementById('instructions-content');
    if (modData.instructions) {
        let instHtml = '';
        if (modData.instructions.pdf) {
            instHtml += `<p><a href="${modData.instructions.pdf}" target="_blank" class="instruction-link">📄 Инструкция (PDF)</a></p>`;
        }
        if (modData.instructions.video) {
            instHtml += `<p><a href="${modData.instructions.video}" target="_blank" class="instruction-link">📹 Видеоинструкция</a></p>`;
        }
        if (!instHtml) {
            instHtml = '<p>Инструкции не указаны.</p>';
        }
        instContent.innerHTML = instHtml;
    } else {
        instContent.innerHTML = '<p>Инструкции не указаны.</p>';
    }
}

// --- Функция закрытия модального окна с описанием товара ---
function closeProductDetailsModal() {
    detailsModal.style.display = 'none';
    // Сбрасываем активную вкладку на первую
    document.querySelector('.tab-button[data-tab="specifications"]')?.click();
}
