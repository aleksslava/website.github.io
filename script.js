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
    { id: 'datchiki', name: 'Датчики' },
    { id: 'antenna', name: 'Антенны' },
    { id: 'komplekt', name: 'Комплекты' },
    { id: 'kran', name: 'Шаровые краны' },
    { id: 'karniz', name: 'Электрокарнизы' },
    { id: 'warm_floor', name: 'Теплый пол' },
    { id: 'lock', name: 'Умный замок' },
    { id: 'other', name: 'Сопутствующие товары' }
    
];

// --- Данные товаров с модификациями (без остатков), описанием и изображениями для модификаций ---
const products = [
    {
        "id": 1,
        "name": "Relay-4m",
        "price": 9980.0,
        "image": "https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
        "category": "relay",
        "description": "Master-блок модульной системы – самостоятельное устройство.",
        "modifications": []
    },
    {
        "id": 2,
        "name": "Relay-4S",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category": "relay",
        "description": "Slave-блок модульной системы – зависимое устройство.",
        "modifications": []
    },
    {
        "id": 3,
        "name": "Двухканальный сенсорный радиовыключатель SN-R2",
        "price": 3380.0,
        "image": "https://static.tildacdn.com/tild3033-3931-4635-b532-303335346366/sk-snr2.jpg",
        "category": "switch",
        "description": "Закругленные углы",
        "modifications": [
            {
                "id": "3-1",
                "name": "Бежевый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3033-3931-4635-b532-303335346366/sk-snr2.jpg"
            },
            {
                "id": "3-2",
                "name": "Черный",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3262-3164-4534-a439-336336656434/1snr2.jpg"
            },
            {
                "id": "3-3",
                "name": "Белый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6239-6235-4630-a330-623030613064/wh-snr2.jpg"
            },
            {
                "id": "3-4",
                "name": "Алюминиевый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3832-3761-4662-b466-323463323433/al_snr2.jpg"
            },
            {
                "id": "3-5",
                "name": "Серый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6133-3535-4135-a237-643861336265/ser_snr2.jpg"
            },
            {
                "id": "3-6",
                "name": "Графит",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6333-6436-4931-a534-653334646139/graf_snr2.jpg"
            },
            {
                "id": "3-7",
                "name": "Слоновая кость",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6262-6439-4761-b434-613564613363/slon_snr2.jpg"
            },
            {
                "id": "3-8",
                "name": "Светло-серый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6165-3734-4630-a337-613236366265/svser_snr2.jpg"
            },
            {
                "id": "3-9",
                "name": "Серо-голубой",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3264-6461-4131-b066-316565653439/sergol_snr2.jpg"
            },
            {
                "id": "3-10",
                "name": "Светло-коричневый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild6364-3033-4637-b736-323735366237/svkor_snr2.jpg"
            },
            {
                "id": "3-11",
                "name": "Темно-коричневый",
                "price": 3380.0,
                "image": "https://static.tildacdn.com/tild3062-3861-4332-b161-613961393161/temnkor_snr2.jpg"
            }
        ]
    },
    {
        "id": 4,
        "name": "Одноканальный сенсорный радиовыключатель SN-R1",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild3734-3963-4030-b061-373235646263/bl-snr1.jpg",
        "category": "switch",
        "description": "Закругленные углы",
        "modifications": [
            {
                "id": "4-1",
                "name": "Бежевый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3430-6632-4437-b630-653565393064/sk-snr1.jpg"
            },
            {
                "id": "4-2",
                "name": "Черный",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3734-3963-4030-b061-373235646263/bl-snr1.jpg"
            },
            {
                "id": "4-3",
                "name": "Белый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3933-6263-4530-b537-623737303932/wh-snr1.jpg"
            },
            {
                "id": "4-4",
                "name": "Алюминиевый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6132-6138-4930-b431-663731656662/al_snr1.jpg"
            },
            {
                "id": "4-5",
                "name": "Серый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6339-6339-4737-b534-353631336335/ser_snr1.jpg"
            },
            {
                "id": "4-6",
                "name": "Графит",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3963-6237-4234-b033-346535393032/graf_snr1.jpg"
            },
            {
                "id": "4-7",
                "name": "Слоновая кость",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3039-6664-4166-b864-326237353564/slon_snr1.jpg"
            },
            {
                "id": "4-8",
                "name": "Светло-серый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6232-3238-4661-b435-333966323737/svser_snr1.jpg"
            },
            {
                "id": "4-9",
                "name": "Серо-голубой",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6131-3036-4666-a230-633064633439/svgol_snr1.jpg"
            },
            {
                "id": "4-10",
                "name": "Светло-коричневый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3335-6431-4431-b362-353736666666/svkor_snr1.jpg"
            },
            {
                "id": "4-11",
                "name": "Темно-коричневый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3961-6462-4664-b563-356262636238/temnkor_snr1.jpg"
            }
        ]
    },
    {
        "id": 5,
        "name": "Сервер умного дома Gateway",
        "price": 9980.0,
        "image": "https://static.tildacdn.com/stor3461-3031-4532-b539-366236666236/68601724.png",
        "category": "server",
        "description": "Используется для беспроводного управления электроприборами через приложение HiTE PRO",
        "modifications": []
    },
    {
        "id": 6,
        "name": "Умная розетка Smart Socket",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg",
        "category": "relay",
        "description": "Может использоваться в составе умного дома HiTE PRO или отдельно, в связке с выключателями и пультами",
        "modifications": [
            {
                "id": "6-1",
                "name": "Белый",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg"
            },
            {
                "id": "6-2",
                "name": "Черный",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/stor3730-3161-4563-b162-346536643032/49671049.jpg"
            }
        ]
    },
    {
        "id": 7,
        "name": "Одноканальное радиореле Relay-F1",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Подключается в разрыв фазы и к существующему обычному выключателю",
        "modifications": []
    },
    {
        "id": 8,
        "name": "Двухканальное радиореле Relay-F2",
        "price": 4980.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Подключается в разрыв фазы и к существующему обычному выключателю",
        "modifications": []
    },
    {
        "id": 9,
        "name": "Одноканальное радиореле Relay-1",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Подключается к светильнику или другому прибору, которым нужно управлять",
        "modifications": [
            {
                "id": "9-1",
                "name": "Одноканальное радиореле Relay-1 | 220 В",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "9-2",
                "name": "Одноканальное радиореле Relay-1 | 12 В",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "9-3",
                "name": "Одноканальное радиореле Relay-1 | 12 В (сухой контакт)",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "9-4",
                "name": "Одноканальное радиореле Relay-1 (сухой контакт)",
                "price": 3080.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 10,
        "name": "Двухканальное радиореле Relay-2",
        "price": 4780.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Подключается к светильнику или другому прибору, которым нужно управлять",
        "modifications": [
            {
                "id": "10-1",
                "name": "Двухканальное радиореле Relay-2",
                "price": 4780.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "10-2",
                "name": "Двухканальное радиореле Relay-2 (сухой контакт)",
                "price": 4780.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 11,
        "name": "Пульт ДУ DST-1",
        "price": 1480.0,
        "image": "https://static.tildacdn.com/tild3530-6662-4763-a233-653838303239/015-HTPR.png",
        "category": "switch",
        "description": "Предназначен для дистанционного управления радиореле HiTE PRO<br /><br />",
        "modifications": []
    },
    {
        "id": 12,
        "name": "Пульт ДУ DST-4",
        "price": 1980.0,
        "image": "https://static.tildacdn.com/tild3031-6261-4265-b335-393135636437/016-HTPR_1.png",
        "category": "switch",
        "description": "Предназначен для дистанционного управления радиореле HiTE PRO<br /><br />",
        "modifications": []
    },
    {
        "id": 13,
        "name": "Трехканальный радиомодуль UNI",
        "price": 1980.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "switch",
        "description": "Подключается к традиционному выключателю и делает его беспроводным",
        "modifications": []
    },
    {
        "id": 14,
        "name": "Датчик питания Smart Power",
        "price": 2480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "datchiki",
        "description": "Отправляет радиосигнал при подаче и при снятии напряжения с его клемм<br /><br />",
        "modifications": []
    },
    {
        "id": 15,
        "name": "Одноканальное радиореле Relay-DRIVE",
        "price": 3980.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Relay-Drive 220В - Используется для беспроводного управления электроприводами переменного тока.\nRelay-Drive 12В - Используется для беспроводного управления электроприводами постоянного тока.\n",
        "modifications": [
            {
                "id": "15-1",
                "name": "Одноканальное радиореле Relay-DRIVE 220В",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "15-2",
                "name": "Одноканальное радиореле Relay-DRIVE 12В",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "15-3",
                "name": "Одноканальное радиореле Relay-DRIVE 220В (сухой контакт)",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            },
            {
                "id": "15-4",
                "name": "Одноканальное радиореле Relay-DRIVE 12В (сухой контакт)",
                "price": 3980.0,
                "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg"
            }
        ]
    },
    {
        "id": 16,
        "name": "Датчик движения и освещенности Smart Motion",
        "price": 3280.0,
        "image": "https://static.tildacdn.com/tild6463-6231-4164-b366-643964316661/smartm.jpg",
        "category": "datchiki",
        "description": "Предоставляет информацию об уровне освещенности и движениях людей в помещении",
        "modifications": []
    },
    {
        "id": 17,
        "name": "Датчик температуры и влажности Smart Air",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild6266-3938-4565-b863-656632393366/sma.jpg",
        "category": "datchiki",
        "description": "Предоставляет информацию о температуре и влажности помещения<br /><br />",
        "modifications": []
    },
    {
        "id": 18,
        "name": "Датчик открытия Smart Checker",
        "price": 1980.0,
        "image": "https://static.tildacdn.com/tild6164-6332-4233-b461-373132663764/check.jpg",
        "category": "datchiki",
        "description": "Позволяет контролировать положение (открыто или закрыто) подвижных элементов",
        "modifications": []
    },
    {
        "id": 19,
        "name": "Одноклавишный радиовыключатель звонкового типа LE-1",
        "price": 1480.0,
        "image": "https://static.tildacdn.com/tild3232-6365-4663-a162-393230323539/1le-1.jpg",
        "category": "switch",
        "description": "Совместим с рамками Legrand серии Etika",
        "modifications": [
            {
                "id": "19-1",
                "name": "Одноклавишный радиовыключатель звонкового типа LE-1 - Слоновая кость",
                "price": 1480.0,
                "image": "https://static.tildacdn.com/tild3962-6133-4966-b731-656337656262/2le-1.jpg"
            },
            {
                "id": "19-2",
                "name": "Одноклавишный радиовыключатель звонкового типа LE-1 - Белый",
                "price": 1480.0,
                "image": "https://static.tildacdn.com/tild3232-6365-4663-a162-393230323539/1le-1.jpg"
            }
        ]
    },
    {
        "id": 20,
        "name": "Двухклавишный радиовыключатель звонкового типа LE-2",
        "price": 1780.0,
        "image": "https://static.tildacdn.com/tild6562-3535-4637-b562-313032663962/le-22.jpg",
        "category": "switch",
        "description": "Совместим с рамками Legrand серии Etika",
        "modifications": [
            {
                "id": "20-1",
                "name": "Двухклавишный радиовыключатель звонкового типа LE-2 - Слоновая кость",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/tild6562-3535-4637-b562-313032663962/le-22.jpg"
            },
            {
                "id": "20-2",
                "name": "Двухклавишный радиовыключатель звонкового типа LE-2 - Белый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/tild6637-3537-4232-b866-343238343761/1le-2.jpg"
            }
        ]
    },
    {
        "id": 21,
        "name": "Антенна для Relay-4M",
        "price": 980.0,
        "image": "https://static.tildacdn.com/tild3134-6363-4436-b562-303038303564/JCXP_3m_RG174_SMA750.jpg",
        "category": "relay",
        "description": "Дополнительная внешняя антенна для блока Relay-4M<br /><br />",
        "modifications": []
    },
    {
        "id": 22,
        "name": "Одноканальное радиореле Relay-LED",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Блок с функцией диммирования для светодиодных лент 12/24В",
        "modifications": []
    },
    {
        "id": 23,
        "name": "Датчик протечки воды Smart Water",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild6134-3834-4832-b163-323039653438/Smart_Water1.png",
        "category": "datchiki",
        "description": "Беспроводной передатчик, позволяющий определять наличие и отсутствие протечки воды.",
        "modifications": []
    },
    {
        "id": 24,
        "name": "Антенна HYBRID BOX",
        "price": 8140.0,
        "image": "https://static.tildacdn.com/tild3662-3564-4163-a631-616664323864/hybrid-box.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": []
    },
    {
        "id": 25,
        "name": "Антенна DUO BOX",
        "price": 10340.0,
        "image": "https://static.tildacdn.com/tild3336-3461-4630-a664-643939333437/duo-box.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": []
    },
    {
        "id": 26,
        "name": "Кабельная сборка SMA-SMA",
        "price": 1100.0,
        "image": "https://static.tildacdn.com/tild6461-6566-4131-a533-653932303664/cabel-sma-sma.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": []
    },
    {
        "id": 27,
        "name": "Пигтейл CRC9/TS9",
        "price": 400.0,
        "image": "https://static.tildacdn.com/tild3733-6439-4735-b031-323238626664/pigtail.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": []
    },
    {
        "id": 28,
        "name": "USB-удлинитель на 5 метров",
        "price": 490.0,
        "image": "https://static.tildacdn.com/tild3339-6633-4939-b539-373261656265/usb-udlin-10m.jpg",
        "category": "antenna",
        "description": "nan",
        "modifications": []
    },
    {
        "id": 29,
        "name": "Шаровой кран с электроприводом Bugatti Pro 220В",
        "price": 8361.0,
        "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения",
        "modifications": [
            {
                "id": "29-1",
                "name": "Шаровой кран с электроприводом Bugatti Pro 220В - 1/2",
                "price": 8361.0,
                "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png"
            },
            {
                "id": "29-2",
                "name": "Шаровой кран с электроприводом Bugatti Pro 220В - 3/4",
                "price": 8991.0,
                "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png"
            },
            {
                "id": "29-3",
                "name": "Шаровой кран с электроприводом Bugatti Pro 220В - 1",
                "price": 11961.0,
                "image": "https://static.tildacdn.com/tild3539-3032-4536-b632-643838323039/1.png"
            }
        ]
    },
    {
        "id": 30,
        "name": "Шаровой кран с электроприводом Bugatti Pro 12В",
        "price": 8991.0,
        "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии Buggati PRO для блокировки водоснабжения",
        "modifications": [
            {
                "id": "30-1",
                "name": "Шаровой кран с электроприводом Bugatti Pro 12В - 1/2",
                "price": 8991.0,
                "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png"
            },
            {
                "id": "30-2",
                "name": "Шаровой кран с электроприводом Bugatti Pro 12В - 3/4",
                "price": 9531.0,
                "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png"
            },
            {
                "id": "30-3",
                "name": "Шаровой кран с электроприводом Bugatti Pro 12В - 1",
                "price": 10791.0,
                "image": "https://static.tildacdn.com/tild6234-6135-4731-b334-393033633335/2.png"
            }
        ]
    },
    {
        "id": 31,
        "name": "Шаровой кран с электроприводом PROFI 220В",
        "price": 7641.0,
        "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии PROFI для блокировки водоснабжения",
        "modifications": [
            {
                "id": "31-1",
                "name": "Шаровой кран с электроприводом PROFI 220В - 1/2",
                "price": 7641.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "31-2",
                "name": "Шаровой кран с электроприводом PROFI 220В - 3/4",
                "price": 8451.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "31-3",
                "name": "Шаровой кран с электроприводом PROFI 220В - 1",
                "price": 9531.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "31-4",
                "name": "Шаровой кран с электроприводом PROFI 220В - 1 1/4",
                "price": 10161.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            }
        ]
    },
    {
        "id": 32,
        "name": "Шаровой кран с электроприводом PROFI 12В",
        "price": 7191.0,
        "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии PROFI для блокировки водоснабжения",
        "modifications": [
            {
                "id": "32-1",
                "name": "Шаровой кран с электроприводом PROFI 12В - 1/2",
                "price": 7191.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "32-2",
                "name": "Шаровой кран с электроприводом PROFI 12В - 3/4",
                "price": 7641.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "32-3",
                "name": "Шаровой кран с электроприводом PROFI 12В - 1",
                "price": 9531.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            },
            {
                "id": "32-4",
                "name": "Шаровой кран с электроприводом PROFI 12В - 1 1/4",
                "price": 10161.0,
                "image": "https://static.tildacdn.com/tild6133-3133-4631-b033-336137323166/---64-455x455.png"
            }
        ]
    },
    {
        "id": 33,
        "name": "Шаровой кран с электроприводом MK 220В",
        "price": 5481.0,
        "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии МК для блокировки водоснабжения",
        "modifications": [
            {
                "id": "33-1",
                "name": "Шаровой кран с электроприводом MK 220В - 1/2",
                "price": 5481.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            },
            {
                "id": "33-2",
                "name": "Шаровой кран с электроприводом MK 220В - 3/4",
                "price": 5931.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            },
            {
                "id": "33-3",
                "name": "Шаровой кран с электроприводом MK 220В - 1",
                "price": 7191.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            }
        ]
    },
    {
        "id": 34,
        "name": "Шаровой кран с электроприводом MK 12В",
        "price": 5481.0,
        "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png",
        "category": "kran",
        "description": "Шаровой кран марки Neptun с электроприводом серии МК для блокировки водоснабжения",
        "modifications": [
            {
                "id": "34-1",
                "name": "Шаровой кран с электроприводом MK 12В - 1/2",
                "price": 5481.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            },
            {
                "id": "34-2",
                "name": "Шаровой кран с электроприводом MK 12В - 3/4",
                "price": 5931.0,
                "image": "https://static.tildacdn.com/tild6135-6133-4166-b563-363938353635/---65-455x455.png"
            }
        ]
    },
    {
        "id": 35,
        "name": "Демонстрационный набор",
        "price": 10880.0,
        "image": "https://static.tildacdn.com/stor3162-3465-4830-b330-366230666235/93883933.png",
        "category": "komplekt",
        "description": "Отлично подходит для презентации выключателей HiTE PRO!",
        "modifications": []
    },
    {
        "id": 36,
        "name": "Демонстрационный стенд",
        "price": 48180.0,
        "image": "https://static.tildacdn.com/stor3861-3766-4238-b135-386335383633/36501679.png",
        "category": "komplekt",
        "description": "Собранный и настроенный экспонат для демонстрации работы устройств HiTE PRO",
        "modifications": []
    },
    {
        "id": 37,
        "name": "Раздвижной карниз с электроприводом Novo N21",
        "price": 0.0,
        "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png",
        "category": "karniz",
        "description": "Цену уточняйте с менеджером",
        "modifications": [
            {
                "id": "37-1",
                "name": "Раздвижной карниз с электроприводом Novo N21 - 1 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "37-2",
                "name": "Раздвижной карниз с электроприводом Novo N21 - 2 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "37-3",
                "name": "Раздвижной карниз с электроприводом Novo N21 - 3 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "37-4",
                "name": "Раздвижной карниз с электроприводом Novo N21 - 4 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "37-5",
                "name": "Раздвижной карниз с электроприводом Novo N21 - 5 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            },
            {
                "id": "37-6",
                "name": "Раздвижной карниз с электроприводом Novo N21 - 6 м",
                "price": 0.0,
                "image": "https://static.tildacdn.com/tild6366-3363-4532-a439-623965646531/N21_1.png"
            }
        ]
    },
    {
        "id": 38,
        "name": "Внутривальный электропривод для рулонных штор Novo K35-TP-6-28",
        "price": 0.0,
        "image": "https://static.tildacdn.com/tild3236-6365-4932-b331-376534386130/5ad95401d809d.jpg",
        "category": "karniz",
        "description": "Цену уточняйте с менеджером",
        "modifications": []
    },
    {
        "id": 39,
        "name": "Одноканальное радиореле Relay-DIM",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Блок с функцией диммирования для светодиодных ламп 220В.",
        "modifications": []
    },
    {
        "id": 40,
        "name": "Трёхканальный блок радиореле Relay-LED3S",
        "price": 8980.0,
        "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category": "relay",
        "description": "Slave-блок модульной системы – зависимое устройство.",
        "modifications": []
    },
    {
        "id": 41,
        "name": "Одноканальный сенсорный радиовыключатель SN-C",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/tild3761-6534-4132-b134-333731313636/---36-455x455.png",
        "category": "switch",
        "description": "Круглый и компактный выключатель",
        "modifications": [
            {
                "id": "41-1",
                "name": "Одноканальный сенсорный радиовыключатель SN-C - Черный",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3761-6534-4132-b134-333731313636/---36-455x455.png"
            },
            {
                "id": "41-2",
                "name": "Одноканальный сенсорный радиовыключатель SN-C - Белый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild3632-6366-4637-a262-663161323231/---33-455x455.png"
            },
            {
                "id": "41-3",
                "name": "Одноканальный сенсорный радиовыключатель SN-C - Алюминиевый",
                "price": 2980.0,
                "image": "https://static.tildacdn.com/tild6233-3335-4939-a434-613164666465/---34-455x455.png"
            }
        ]
    },
    {
        "id": 42,
        "name": "Контактор модульный КМ 63А 2NО",
        "price": 3277.0,
        "image": "https://static.tildacdn.com/tild6539-3532-4363-a166-656566656465/A25DE53A5D1ABF6D4182.jpg",
        "category": "other",
        "description": "Двухмодульный контактор",
        "modifications": []
    },
    {
        "id": 43,
        "name": "Сервопривод электротермический Valtec",
        "price": 1800.0,
        "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg",
        "category": "other",
        "description": "nan",
        "modifications": [
            {
                "id": "43-1",
                "name": "Сервопривод электротермический Valtec - 220 В - Нормально-Закрытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            },
            {
                "id": "43-2",
                "name": "Сервопривод электротермический Valtec - 24 В - Нормально-Закрытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            },
            {
                "id": "43-3",
                "name": "Сервопривод электротермический Valtec - 220 В - Нормально-Открытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            },
            {
                "id": "43-4",
                "name": "Сервопривод электротермический Valtec - 24 В - Нормально-Открытый",
                "price": 1800.0,
                "image": "https://static.tildacdn.com/tild3662-3837-4733-b664-376162326139/VTTE30430_2.jpg"
            }
        ]
    },
    {
        "id": 44,
        "name": "Клапан термостатический Valtec",
        "price": 1148.0,
        "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg",
        "category": "other",
        "description": "nan",
        "modifications": [
            {
                "id": "44-1",
                "name": "Клапан термостатический Valtec - Прямой - 1/2",
                "price": 1148.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            },
            {
                "id": "44-2",
                "name": "Клапан термостатический Valtec - Угловой - 1/2",
                "price": 1127.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            },
            {
                "id": "44-3",
                "name": "Клапан термостатический Valtec - Прямой - 3/4",
                "price": 1470.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            },
            {
                "id": "44-4",
                "name": "Клапан термостатический Valtec - Угловой - 3/4",
                "price": 1807.0,
                "image": "https://static.tildacdn.com/tild3938-6564-4634-b231-323335333535/VT031NR_0.jpg"
            }
        ]
    },
    {
        "id": 45,
        "name": "Влагозащищённый одноклавишный радиовыключатель IP65-1",
        "price": 3780.0,
        "image": "https://static.tildacdn.com/tild3366-3034-4462-b563-313665666636/65-1-1.png",
        "category": "switch",
        "description": "Уровень влагозащиты IP-65. Корпус от ЭРА",
        "modifications": []
    },
    {
        "id": 46,
        "name": "Влагозащищённый двухклавишный радиовыключатель IP65-2",
        "price": 3980.0,
        "image": "https://static.tildacdn.com/tild6462-6139-4535-a432-616238373764/65-2-1.png",
        "category": "switch",
        "description": "Уровень влагозащиты IP-65. Корпус от ЭРА",
        "modifications": []
    },
    {
        "id": 47,
        "name": "Стартовый набор партнера ЛАЙТ",
        "price": 2980.0,
        "image": "https://static.tildacdn.com/stor3462-3864-4161-b464-316331383064/10193371.jpg",
        "category": "komplekt",
        "description": "Выключатель и реле – протестируйте Хайт Про у себя дома",
        "modifications": []
    },
    {
        "id": 48,
        "name": "Каталог HiTE PRO",
        "price": 200.0,
        "image": "https://static.tildacdn.com/stor3335-3962-4232-a163-353032383535/78693873.jpg",
        "category": "komplekt",
        "description": "Печатный каталог альбомной ориентации",
        "modifications": []
    },
    {
        "id": 49,
        "name": "Брошюра HiTE PRO",
        "price": 10.0,
        "image": "https://static.tildacdn.com/stor6637-3664-4366-a136-363733363839/52026992.jpg",
        "category": "komplekt",
        "description": "Печатная брошюра для клиентов, в которой можно указать свои контакты",
        "modifications": []
    },
    {
        "id": 50,
        "name": "Четырёхканальный блок радиореле Relay-4M(P)",
        "price": 12980.0,
        "image": "https://static.tildacdn.com/tild6165-3763-4163-b039-306463646139/1.png",
        "category": "relay",
        "description": "Модификация блока 4M с измерением потребляемой мощности",
        "modifications": []
    },
    {
        "id": 51,
        "name": "Четырёхканальный блок радиореле Relay-4S(P)",
        "price": 11980.0,
        "image": "https://static.tildacdn.com/tild3038-6438-4332-b836-326335333465/HiTE_PRO_CASE-1_11.png",
        "category": "relay",
        "description": "Модификация блока 4S с измерением потребляемой мощности",
        "modifications": []
    },
    {
        "id": 52,
        "name": "Одноклавишный радиовыключатель с клавишей без фиксации Base-1",
        "price": 1780.0,
        "image": "https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png",
        "category": "switch",
        "description": "Одноканальный беспроводной выключатель без фиксации клавиши (звонкового типа).<br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "52-1",
                "name": "Одноклавишный радиовыключатель с клавишей без фиксации Base-1 - Белый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png"
            },
            {
                "id": "52-2",
                "name": "Одноклавишный радиовыключатель с клавишей без фиксации Base-1 - Бежевый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png"
            },
            {
                "id": "52-3",
                "name": "Одноклавишный радиовыключатель с клавишей без фиксации Base-1 - Серый (грифель)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3433-3338-4739-a539-656435383164/91248115.png"
            },
            {
                "id": "52-4",
                "name": "Одноклавишный радиовыключатель с клавишей без фиксации Base-1 - Черный (карбон)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6238-6232-4561-b666-336332626430/88521061.png"
            }
        ]
    },
    {
        "id": 53,
        "name": "Двухклавишный радиовыключатель с клавишами без фиксации Base-2",
        "price": 2180.0,
        "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png",
        "category": "switch",
        "description": "Двухканальный беспроводной выключатель без фиксации клавиши (звонкового типа).<br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "53-1",
                "name": "Двухклавишный радиовыключатель с клавишами без фиксации Base-2 - Белый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            },
            {
                "id": "53-2",
                "name": "Двухклавишный радиовыключатель с клавишами без фиксации Base-2 - Бежевый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            },
            {
                "id": "53-3",
                "name": "Двухклавишный радиовыключатель с клавишами без фиксации Base-2 - Серый (грифель)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            },
            {
                "id": "53-4",
                "name": "Двухклавишный радиовыключатель с клавишами без фиксации Base-2 - Черный (карбон)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor3963-3065-4539-b033-336563363133/22799452.png"
            }
        ]
    },
    {
        "id": 54,
        "name": "Одноклавишный радиовыключатель с фиксацией клавиши Base-1F",
        "price": 1780.0,
        "image": "https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png",
        "category": "switch",
        "description": "Одноканальный беспроводной выключатель с фиксацией клавиши. <br /><u>НЕ ПОДХОДИТ ДЛЯ ДИММИРОВАНИЯ</u><br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "54-1",
                "name": "Одноклавишный радиовыключатель с фиксацией клавиши Base-1F - Белый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3865-3435-4331-a331-633732333863/24952004.png"
            },
            {
                "id": "54-2",
                "name": "Одноклавишный радиовыключатель с фиксацией клавиши Base-1F - Бежевый",
                "price": 1780.0,
                "image": "https://static.tildacdn.com/stor3863-6463-4066-a361-396535343664/11513905.png"
            },
            {
                "id": "54-3",
                "name": "Одноклавишный радиовыключатель с фиксацией клавиши Base-1F - Серый (грифель)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor3433-3338-4739-a539-656435383164/91248115.png"
            },
            {
                "id": "54-4",
                "name": "Одноклавишный радиовыключатель с фиксацией клавиши Base-1F - Черный (карбон)",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6238-6232-4561-b666-336332626430/88521061.png"
            }
        ]
    },
    {
        "id": 55,
        "name": "Двухклавишный радиовыключатель с фиксацией клавиш Base-2F",
        "price": 2180.0,
        "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png",
        "category": "switch",
        "description": "Двухканальный беспроводной выключатель с фиксацией клавиши. <br /><u>НЕ ПОДХОДИТ ДЛЯ ДИММИРОВАНИЯ</u><br /><br />Работает от одной батарейки более 7 лет. Частота 868 МГц, на которой работает выключатель, позволяет управлять освещением на расстоянии до 250 м.<br /><br />При выборе выключателя с рамкой используется рамка Schneider Atlas. Рамки IEK Brite приобретаются только отдельно.<br /><br />Устанавливается на любую поверхность с помощью двустороннего скотча или саморезов.<br /><br />Для работы выключателя обязательно необходим блок управления. Радиовыключатель является передатчиком, который передает сигнал блоку управления на замыкание и размыкание электрической цепи.<br /><br /><br />Технический паспорт:<br /><a href=\"https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf\" target=\"_blank\" rel=\"noreferrer noopener\">https://www.hite-pro.ru/wp-content/uploads/manual/AT115x105mm.pdf</a>",
        "modifications": [
            {
                "id": "55-1",
                "name": "Двухклавишный радиовыключатель с фиксацией клавиш Base-2F - Белый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            },
            {
                "id": "55-2",
                "name": "Двухклавишный радиовыключатель с фиксацией клавиш Base-2F - Бежевый",
                "price": 2180.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            },
            {
                "id": "55-3",
                "name": "Двухклавишный радиовыключатель с фиксацией клавиш Base-2F - Серый (грифель)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            },
            {
                "id": "55-4",
                "name": "Двухклавишный радиовыключатель с фиксацией клавиш Base-2F - Черный (карбон)",
                "price": 2580.0,
                "image": "https://static.tildacdn.com/stor6462-6661-4165-b961-313961343935/48504921.png"
            }
        ]
    },
    {
        "id": 56,
        "name": "Одноканальное радиореле Relay-16A",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный блок на 16 Ампер, подходит для теплого пола. Клеммники 2,5 мм2",
        "modifications": []
    },
    {
        "id": 57,
        "name": "Датчик температуры пола для Relay-16A",
        "price": 500.0,
        "image": "https://static.tildacdn.com/stor3435-3430-4563-a365-396663306532/24429073.jpg",
        "category": "other",
        "description": "Проводной датчик Rexant для Relay-16A",
        "modifications": []
    },
    {
        "id": 58,
        "name": "Стартовый набор партнера БЕЙЗ",
        "price": 9980.0,
        "image": "https://static.tildacdn.com/stor3962-3036-4835-a135-313733316161/41887660.png",
        "category": "komplekt",
        "description": "Комплект для первого знакомства с устройствами HiTE PRO",
        "modifications": []
    },
    {
        "id": 59,
        "name": "Одноканальное радиореле Relay-RGBW",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный блок для диммирования RGB и RGBW",
        "modifications": []
    },
    {
        "id": 60,
        "name": "Демонстрационный стенд Мини",
        "price": 21990.0,
        "image": "https://static.tildacdn.com/stor3364-3036-4362-a562-386163633165/31780867.jpg",
        "category": "komplekt",
        "description": "Компактный стенд, который удобно брать с собой на встречи с заказчиками",
        "modifications": []
    },
    {
        "id": 61,
        "name": "Caleo Supermat",
        "price": 5078.0,
        "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg",
        "category": "warm_floor",
        "description": "Кабельный теплый пол под плитку и керамогранит (нагревательный мат)",
        "modifications": [
            {
                "id": "61-1",
                "name": "Caleo Supermat - 130 - 0,7",
                "price": 5078.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-2",
                "name": "Caleo Supermat - 130 - 1,2",
                "price": 7946.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-3",
                "name": "Caleo Supermat - 130 - 1,8",
                "price": 8602.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-4",
                "name": "Caleo Supermat - 130 - 2,4",
                "price": 10754.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-5",
                "name": "Caleo Supermat - 130 - 3",
                "price": 11503.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-6",
                "name": "Caleo Supermat - 130 - 3,6",
                "price": 13375.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-7",
                "name": "Caleo Supermat - 130 - 4,2",
                "price": 15622.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-8",
                "name": "Caleo Supermat - 130 - 5",
                "price": 16745.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-9",
                "name": "Caleo Supermat - 130 - 6",
                "price": 18710.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-10",
                "name": "Caleo Supermat - 130 - 7",
                "price": 21425.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-11",
                "name": "Caleo Supermat - 130 - 8",
                "price": 23858.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-12",
                "name": "Caleo Supermat - 130 - 10",
                "price": 30598.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-13",
                "name": "Caleo Supermat - 130 - 12",
                "price": 37056.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-14",
                "name": "Caleo Supermat - 200 - 0,7",
                "price": 5840.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-15",
                "name": "Caleo Supermat - 200 - 1,2",
                "price": 9138.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-16",
                "name": "Caleo Supermat - 200 - 1,8",
                "price": 9892.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-17",
                "name": "Caleo Supermat - 200 - 2,4",
                "price": 12368.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-18",
                "name": "Caleo Supermat - 200 - 3",
                "price": 13229.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-19",
                "name": "Caleo Supermat - 200 - 3,6",
                "price": 15382.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-20",
                "name": "Caleo Supermat - 200 - 4,2",
                "price": 17965.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-21",
                "name": "Caleo Supermat - 200 - 5",
                "price": 19257.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-22",
                "name": "Caleo Supermat - 200 - 6",
                "price": 21518.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-23",
                "name": "Caleo Supermat - 200 - 7",
                "price": 24638.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-24",
                "name": "Caleo Supermat - 200 - 8",
                "price": 27438.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-25",
                "name": "Caleo Supermat - 200 - 10",
                "price": 35187.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            },
            {
                "id": "61-26",
                "name": "Caleo Supermat - 200 - 12",
                "price": 42614.0,
                "image": "https://static.tildacdn.com/stor3331-6130-4461-b863-323939656465/90783921.jpg"
            }
        ]
    },
    {
        "id": 62,
        "name": "Caleo Platinum",
        "price": 5695.0,
        "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg",
        "category": "warm_floor",
        "description": "Саморегулируемый инфракрасный пленочный теплый пол под ламинат, паркет, линолеум и ковролин (термопленка)",
        "modifications": [
            {
                "id": "62-1",
                "name": "Caleo Platinum - 230 - 1",
                "price": 5695.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-2",
                "name": "Caleo Platinum - 230 - 1,5",
                "price": 8324.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-3",
                "name": "Caleo Platinum - 230 - 2",
                "price": 11102.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-4",
                "name": "Caleo Platinum - 230 - 2,5",
                "price": 13879.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-5",
                "name": "Caleo Platinum - 230 - 3",
                "price": 16657.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-6",
                "name": "Caleo Platinum - 230 - 3,5",
                "price": 19435.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-7",
                "name": "Caleo Platinum - 230 - 4",
                "price": 22302.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-8",
                "name": "Caleo Platinum - 230 - 5",
                "price": 27767.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            },
            {
                "id": "62-9",
                "name": "Caleo Platinum - 230 - 6",
                "price": 33412.0,
                "image": "https://static.tildacdn.com/stor3632-6232-4361-a131-656634393063/79914832.jpg"
            }
        ]
    },
    {
        "id": 63,
        "name": "Caleo Supercable",
        "price": 4994.0,
        "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg",
        "category": "warm_floor",
        "description": "Сверхтонкий кабельный теплый пол в бухте на основе двухжильного экранированного резистивного кабеля повышенной надежности",
        "modifications": [
            {
                "id": "63-1",
                "name": "Caleo Supercable - 10 - 180",
                "price": 4994.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-2",
                "name": "Caleo Supercable - 20 - 360",
                "price": 7170.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-3",
                "name": "Caleo Supercable - 30 - 540",
                "price": 10434.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-4",
                "name": "Caleo Supercable - 40 - 720",
                "price": 13698.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-5",
                "name": "Caleo Supercable - 50 - 900",
                "price": 15547.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-6",
                "name": "Caleo Supercable - 60 - 1080",
                "price": 16962.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-7",
                "name": "Caleo Supercable - 70 - 1260",
                "price": 19355.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-8",
                "name": "Caleo Supercable - 80 - 1440",
                "price": 23272.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-9",
                "name": "Caleo Supercable - 90 - 1620",
                "price": 26536.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-10",
                "name": "Caleo Supercable - 100 - 1800",
                "price": 27842.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            },
            {
                "id": "63-11",
                "name": "Caleo Supercable - 120 - 2160",
                "price": 35349.0,
                "image": "https://static.tildacdn.com/stor3435-6333-4866-a231-323166666561/87021772.jpg"
            }
        ]
    },
    {
        "id": 64,
        "name": "Терморегулятор Caleo С927",
        "price": 10392.0,
        "image": "https://static.tildacdn.com/stor3138-3266-4264-b464-653536363464/67235715.jpg",
        "category": "warm_floor",
        "description": "Wi-Fi встраиваемый, цифровой, программируемый, 3,5 кВт",
        "modifications": [
            {
                "id": "64-1",
                "name": "Терморегулятор Caleo С927 - Белый",
                "price": NaN,
                "image": "https://static.tildacdn.com/stor3431-3131-4235-b936-636435313332/49049039.png"
            },
            {
                "id": "64-2",
                "name": "Терморегулятор Caleo С927 - Черный",
                "price": NaN,
                "image": "https://static.tildacdn.com/stor3836-3361-4466-b837-656433306263/40479136.png"
            }
        ]
    },
    {
        "id": 65,
        "name": "Caleo Easymat",
        "price": 3211.0,
        "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg",
        "category": "warm_floor",
        "description": "Кабельный теплый пол под плитку и керамогранит (нагревательный мат)",
        "modifications": [
            {
                "id": "65-1",
                "name": "Caleo Easymat - 140 - 0,5",
                "price": 3211.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-2",
                "name": "Caleo Easymat - 140 - 0,7",
                "price": 3504.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-3",
                "name": "Caleo Easymat - 140 - 1",
                "price": 3699.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-4",
                "name": "Caleo Easymat - 140 - 1,2",
                "price": 3797.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-5",
                "name": "Caleo Easymat - 140 - 1,5",
                "price": 4382.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-6",
                "name": "Caleo Easymat - 140 - 1,8",
                "price": 5066.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-7",
                "name": "Caleo Easymat - 140 - 2",
                "price": 5261.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-8",
                "name": "Caleo Easymat - 140 - 2,4",
                "price": 5846.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-9",
                "name": "Caleo Easymat - 140 - 3",
                "price": 7115.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-10",
                "name": "Caleo Easymat - 140 - 3,6",
                "price": 8091.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-11",
                "name": "Caleo Easymat - 140 - 4",
                "price": 8872.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-12",
                "name": "Caleo Easymat - 140 - 4,2",
                "price": 9165.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-13",
                "name": "Caleo Easymat - 140 - 5",
                "price": 10824.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-14",
                "name": "Caleo Easymat - 140 - 6",
                "price": 12386.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-15",
                "name": "Caleo Easymat - 140 - 7",
                "price": 13557.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-16",
                "name": "Caleo Easymat - 140 - 8",
                "price": 15021.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-17",
                "name": "Caleo Easymat - 140 - 10",
                "price": 20193.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-18",
                "name": "Caleo Easymat - 140 - 12",
                "price": 24000.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-19",
                "name": "Caleo Easymat - 180 - 0,5",
                "price": 3686.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-20",
                "name": "Caleo Easymat - 180 - 1",
                "price": 4241.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-21",
                "name": "Caleo Easymat - 180 - 1,5",
                "price": 5045.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-22",
                "name": "Caleo Easymat - 180 - 2",
                "price": 6074.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-23",
                "name": "Caleo Easymat - 180 - 2,5",
                "price": 6730.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-24",
                "name": "Caleo Easymat - 180 - 3",
                "price": 8157.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-25",
                "name": "Caleo Easymat - 180 - 3,5",
                "price": 9270.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-26",
                "name": "Caleo Easymat - 180 - 4",
                "price": 10193.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-27",
                "name": "Caleo Easymat - 180 - 5",
                "price": 12439.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-28",
                "name": "Caleo Easymat - 180 - 6",
                "price": 14189.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-29",
                "name": "Caleo Easymat - 180 - 7",
                "price": 15622.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-30",
                "name": "Caleo Easymat - 180 - 8",
                "price": 17306.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-31",
                "name": "Caleo Easymat - 180 - 10",
                "price": 23297.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-32",
                "name": "Caleo Easymat - 180 - 12",
                "price": 27696.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            },
            {
                "id": "65-33",
                "name": "Caleo Easymat - 180 - 15",
                "price": 33967.0,
                "image": "https://static.tildacdn.com/stor3839-3761-4739-a337-653636626163/82125507.jpg"
            }
        ]
    },
    {
        "id": 66,
        "name": "Терморегулятор Caleo С430",
        "price": 1813.0,
        "image": "https://static.tildacdn.com/stor6433-3931-4063-b931-663539353731/26813793.jpg",
        "category": "warm_floor",
        "description": "Аналоговый, встраиваемый, 3,5 кВт",
        "modifications": [
            {
                "id": "66-1",
                "name": "Терморегулятор Caleo С430 - Белый",
                "price": 1813.0,
                "image": "https://static.tildacdn.com/stor6433-3931-4063-b931-663539353731/26813793.jpg"
            },
            {
                "id": "66-2",
                "name": "Терморегулятор Caleo С430 - Черный",
                "price": 1813.0,
                "image": "https://static.tildacdn.com/stor3936-3130-4264-b362-356466663833/39881704.jpg"
            }
        ]
    },
    {
        "id": 67,
        "name": "Одноканальное радиореле Relay-0/1-10V",
        "price": 3480.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Компактный блок для управления 0/1-10 В.",
        "modifications": []
    },
    {
        "id": 68,
        "name": "Крепление для компактных блоков на DIN-рейку или плоскость",
        "price": 250.0,
        "image": "https://static.tildacdn.com/stor6438-3865-4134-a239-393034333538/46878414.jpg",
        "category": "relay",
        "description": "Любой компактный блок HiTE PRO можно установить на DIN-рейку или плоскость",
        "modifications": []
    },
    {
        "id": 69,
        "name": "Одноканальное радиореле Relay-1Q",
        "price": 3080.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Бесшумный блок – 1 канал – 1,5А • 230В",
        "modifications": []
    },
    {
        "id": 70,
        "name": "Двухканальное радиореле Relay-2Q",
        "price": 4780.0,
        "image": "https://static.tildacdn.com/tild6438-6333-4963-b638-396166323438/drive.jpg",
        "category": "relay",
        "description": "Бесшумный блок – 2 канала – каждый 1,5А • 230В",
        "modifications": []
    },
    {
        "id": 71,
        "name": "Крепление для Gateway в розетку",
        "price": 750.0,
        "image": "https://static.tildacdn.com/stor6231-6230-4530-b363-616634393065/96510516.jpg",
        "category": "server",
        "description": "Аккуратно разместите сервер умного дома",
        "modifications": []
    },
    {
        "id": 72,
        "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2",
        "price": 25540.0,
        "image": "https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg",
        "category": "kran",
        "description": "Сборный комплект устройств: 1-2 шаровых крана, блок управления, датчик протечки",
        "modifications": [
            {
                "id": "72-1",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Bugatti - 2",
                "price": 25540.0,
                "image": "https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg"
            },
            {
                "id": "72-2",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Profi - 2",
                "price": 23940.0,
                "image": "https://static.tildacdn.com/stor6530-6464-4333-b036-643565356237/70060083.jpg"
            },
            {
                "id": "72-3",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Bugatti - 1",
                "price": 16250.0,
                "image": "https://static.tildacdn.com/stor6431-3834-4162-b133-653538656133/55102437.jpg"
            },
            {
                "id": "72-4",
                "name": "Комплект для защиты от протечек HiTE PRO на трубу 1/2 - Profi - 1",
                "price": 15450.0,
                "image": "https://static.tildacdn.com/stor6530-6464-4333-b036-643565356237/70060083.jpg"
            }
        ]
    },
    {
        "id": 73,
        "name": "Футболка HiTE PRO темно-синяя",
        "price": 1600.0,
        "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png",
        "category": "other",
        "description": "Хлопковая футболка в стиле oversize",
        "modifications": [
            {
                "id": "73-1",
                "name": "Футболка HiTE PRO темно-синяя - S",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "73-2",
                "name": "Футболка HiTE PRO темно-синяя - M",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "73-3",
                "name": "Футболка HiTE PRO темно-синяя - L",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "73-4",
                "name": "Футболка HiTE PRO темно-синяя - XL",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            },
            {
                "id": "73-5",
                "name": "Футболка HiTE PRO темно-синяя - XXL",
                "price": 1600.0,
                "image": "https://static.tildacdn.com/stor3933-6134-4531-b262-343332666463/42512992.png"
            }
        ]
    },
    {
        "id": 74,
        "name": "Кепка HiTE PRO темно-синяя",
        "price": 1600.0,
        "image": "https://static.tildacdn.com/stor6436-3830-4866-a562-663532633337/28196858.jpg",
        "category": "other",
        "description": "Кепка регулируемая onesize",
        "modifications": []
    },
    {
        "id": 75,
        "name": "Взломостойкий умный замок KEYWAY SL300",
        "price": 0.0,
        "image": "https://static.tildacdn.com/stor6166-3234-4233-b464-366337636437/99455674.jpg",
        "category": "lock",
        "description": "Получите персональный промокод на скидку 30%",
        "modifications": []
    },
    {
        "id": 76,
        "name": "Умный замок премиум-класса KEYWAY SL500",
        "price": 0.0,
        "image": "https://static.tildacdn.com/stor3466-6330-4939-a461-353530623633/88944724.jpg",
        "category": "lock",
        "description": "Получите персональный промокод на скидку 30%",
        "modifications": []
    },
    {
        "id": 77,
        "name": "Билет на живое обучение в шоуруме HiTE PRO 27 сентября",
        "price": 6000.0,
        "image": "https://static.tildacdn.com/stor3832-3263-4465-a262-303764333265/35976172.png",
        "category": "other",
        "description": "Осталось 10 мест. Оффлайн-интенсив за 1 день. Идеально подойдёт тем, у кого ещё нет или совсем мало опыта в работе с HiTE PRO.",
        "modifications": []
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

        // Получаем изображение для первой модификации или основное изображение товара
        const initialImageSrc = product.modifications && product.modifications.length > 0 
            ? product.modifications[0].image 
            : product.image;
        const initialImageAlt = product.modifications && product.modifications.length > 0 
            ? `${product.name} - ${product.modifications[0].name}` 
            : product.name;

        const detailsButtonHtml = `<button class="details-button" data-id="${product.id}">Подробнее</button>`;

        productCard.innerHTML = `
            <img src="${initialImageSrc}" alt="${initialImageAlt}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <!-- Цена будет обновляться скриптом -->
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
            // Инициализируем цену и изображение для первой модификации
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

    // Обновляем цену
    const priceElement = document.getElementById(`price-${productId}`);
    if (priceElement && selectedMod) {
        priceElement.textContent = `${selectedMod.price.toLocaleString('ru-RU')} ₽`;
    }

    // Обновляем изображение
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
        // Получаем изображение модификации или основное изображение товара
        const itemImage = selectedMod ? selectedMod.image : product.image;
        
        // Создаем новый элемент корзины с информацией о модификации
        const newItem = {
            productId: product.id,
            modificationId: modificationId,
            name: product.name,
            price: selectedMod ? selectedMod.price : product.price,
            image: itemImage, // Используем изображение модификации
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
    orderTypeToggle.checked = false;
    handleOrderTypeToggleChange();
    resetCartFormFields();
    // Сброс радио-кнопок на значение по умолчанию
    const defaultOption = document.querySelector('input[name="discountType"][value="discount_only"]');
    if (defaultOption) defaultOption.checked = true;
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
        discountType: getSelectedDiscountType(), // Выбранный тип скидки
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
    if (kpPayload.userId) {
        kpSummary += `ID пользователя: ${kpPayload.userId}\n`;
    }
    kpSummary += `Тип скидки: ${kpPayload.discountType}\n`;
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
        discountType: getSelectedDiscountType(), // Выбранный тип скидки
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
