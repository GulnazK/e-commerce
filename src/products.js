const products = [
    {
        id: '1a',
        name: 'Casio G-Shock',
        image: 'https://www.alltime.ru/obj/catalog/watch/casio/img/big/GST-B200-1AER.jpg',
        description: 'Кварцевые часы. Особая конструкция, устойчивая к пыли и загрязнениям, защищает от ударов и вибрации. Часы оснащены технологией Bluetooth. Двойная электролюминесцентная подсветка. Неоновое покрытие. Встроенный цифровой компас. Альтиметр до 10 000 м. Память данных альтиметра (до 40 записей о высотных точках рельефа местности). График набора высоты. Барометр (260 / 1.100 hPa). Термометр (-10°C / +60°C). Шагомер. Данные о восходе/закате солнца. Функция мирового времени.',
        brand: 'Casio',
        category: 'Watch',
        price: 39990,
        countInStock: 3,
        rating: 5,
        numReviews: 3,
    },
    {
      id: '2b',
        name: 'Swiss military',
        image: 'https://swissmilitarywatches.ch/wp-content/uploads/2020/04/SM34071.02.png',
        description: 'Стильные швейцарские часы с надежным массивным корпусом и потрясающей водозащитой, позволяющей совершать глубоководные погружения. Мужские механические часы с автоподзаводом. Надежный швейцарский механизм ETA 2824-2. Центральные часовая, минутная и секундная стрелки. Апертура даты в позиции 3 часов. Черный циферблат. Керамический безель.',
        brand: 'Swiss',
        category: 'Watch',
        price: 49990,
        countInStock: 3,
        rating: 3.5,
        numReviews: 4,
    },
    {
      id: '3c',
        name: 'Orient Diving Sport',
        image: 'https://www.watches88.com/prod_images_large/FAA02004B91.jpg',
        description: 'Мужские механические часы с автоподзаводом. Калибр 4694. Водостойкость WR 200. Центральные часовая, минутная и секундная стрелки. Индикация даты и дня недели на позиции трех часов. Стрелки и метки с люминесцентным покрытием. Корпус выполнен из полированной нержавеющей стали.',
        brand: 'Orient',
        category: 'Watch',
        price: 21000,
        countInStock: 2,
        rating: 2.5,
        numReviews: 3,
    }, {
       id: '4d',
        name: 'Bulova Curv',
        image: 'https://cdn.shopify.com/s/files/1/0065/4743/9652/products/96a205dfc6820ad5ea69cbbc35ff0000b42386_880x.jpg?v=1574879238',
        description: 'Высокоточные элегантные часы с изогнутым корпусом, повторяющим линию изгиба запястья. Кварцевый хронограф. Первый в мире хронограф с изогнутым механизмом с частотой колебаний 262 кГц, что превышает стандарт в 8 раз, для высокой точности. Корпус выполнен из титана и нержавеющей стали. Каучуковый ремень. Сапфировое стекло. Диаметр 44мм. Водозащита 30м.',
        brand: 'Bulova',
        category: 'Watch',
        price: 57310,
        countInStock: 2,
        rating: 5,
        numReviews: 5,
    },
    {
       id: '5e',
        name: 'Seiko Astron',
        image: 'https://cdn.shopify.com/s/files/1/0065/4743/9652/products/96a205dfc6820ad5ea69cbbc35ff0000b42386_880x.jpg?v=1574879238',

        description: 'Кварцевые часы. Солнечная батарея. Калибр 8X22. Водостойкость WR 100. Часы, минуты, секунды, дата. Люминесцентные стрелки и метки. Встроенный GPS модуль для корректировки часового пояса и точного времени. Индикатор заряда. Режим летнего времени. Режим - в полете. Корпус выполнен из нержавеющей стали. Диаметр корпуса 45 мм. Сапфировое стекло с супер-прозрачным покрытием. Стальной браслет с раскладывающейся застежкой.',
        brand: 'Seiko',
        category: 'Watch',
        price: 90750,
        countInStock: 2,
        rating: 4.5,
        numReviews: 6,
    }, {
        id: '6f',
        name: 'Seiko Prospex',
        image: 'https://www.steiner-juwelier.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/s/s/ssh020_27043817904955_xxlarge_08063204332854_jpg.jpg',
        description: 'Стрелки и часовые метки имеют покрытие LumiBrite. Циферблат синего цвета. Однонаправлено вращающийся безель. Круглый корпус выполнен из полированной нержавеющей стали с черным PVD покрытием. Диаметр корпуса составляет 44 мм, толщина 14 мм. Завинчивающаяся заводная головка с защитой. Стальной браслет с тройной раскладывающейся застежкой и дополнительным фиксатором. Закаленное минеральное стекло повышенной прочности Hardlex с антибликовым покрытием устойчиво к мелким механическим повреждениям.',
        brand: 'Seiko',
        category: 'watch',
        price: 37500,
        countInStock: 0,
        rating: 4,
        numReviews: 9,
    },
    {
       id: '7g',
        name: 'Seiko Prospex',
        image: 'https://www.steiner-juwelier.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/e/7/e7359a5914.jpg',
        description: 'Мужской кварцевый хронограф. Калибр 8T63. Часы, минуты, секунды. Индикация даты. Корпус и браслет выполнены из нержавеющей стали с черным PVD покрытием. Диаметр корпуса 44 мм, толщина 11 мм. Заводная головка с защитой. Минеральное стекло повышенной прочности Hardlex. Завинчивающаяся задняя крышка. Водостойкость WR 100.',
        brand: 'Seiko',
        category: 'watch',
        price: 27500,
        countInStock: 8,
        rating: 3.5,
        numReviews: 2,
    },
]

export default products