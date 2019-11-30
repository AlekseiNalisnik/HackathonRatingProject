const food = [
    {
        photo:url="https://veganfoodlover.com/wp-content/uploads/2014/07/McDonald.jpg",
        rating: 0,
        name: 'Макдоналдс',
        direction:'быстрое питание',
        time: '07:00 – 00:00',
        adress: 'ул. Кирова, 1',
        site: 'https://mcdonalds.ru/',
        number: '8 (960) 520-45-58',
        delivery: 'Нет',
        bestdish: 'Биг-Мак',
        description:'Летняя веранда, круглосуточная работа, киоски самообслуживания, оплата картой, завтрак, МакАвто, Wi-Fi, кофе с собой, средний счёт 300 ₽. Специальное меню: детское. Цены: средние. Тип заведения: фаст-фуд. Кухня: американская.',
        id: 100045
    },

    {
        photo:url="https://gorodskidok48.ru/upload/iblock/690/690dd288b9114fc43c393b9d3aa8d01b.jpg",
        rating: 0,
        name: 'Ташир Пицца',
        direction:'пиццерия',
        time: '10:00 – 22:00',
        address: 'ул. Кирова, 1, ТРЦ XXI век, этаж 3 и ул. Кирова, 63 и ул. Кирова, 19, Калуга, этаж 4',
        site: 'https://tashirpizza.ru/',
        number: '8 (800) 200-59-10',
        delivery: 'Есть',
        bestdish:'пицца Маргарита',
        description:'Доставка еды, фудкорт, оплата картой, бизнес-ланч, минимальная сумма заказа 150 ₽, цена бизнес-ланча 195 ₽, фудкорт, кофе с собой, средний счёт 200–1000 ₽. Специальное меню: детское. Цены: средние. Тип заведения: фаст-фуд. Меню: пицца, комплексные обеды. Кухня: итальянская, европейская.',
        id: 100046
    },

    {
        photo:url="https://i.pinimg.com/736x/5f/07/77/5f077737f8e96cc70dd86702a4e0d7e2--visual-communication-popular.jpg",
        rating: 0,
        name: 'Camorra Pizza e Birra',
        direction:'пиццерия',
        time: '12:00 – 00:00, пт-сб 12:00 – 02:00',
        adress: 'ул. Ленина, 86А',
        site: 'https://vk.com/camorrapizza_klg',
        number: '+7 (953) 321‒11‒33',
        delivery: 'Есть',
        bestdish:'пицца Фирменна',
        description:'Летняя веранда, бизнес-ланч, цена бокала пива 130–250 ₽, средний счёт 350–420 ₽, Wi-Fi. Кухня: итальянская. Цены: средние. Доступность на кресле-коляске: частично доступно.',
        id: 100047
    },

    {
        photo:url="https://i6.photo.2gis.com/images/branch/14/1970324854160086_8944.jpg",
        rating: 0,
        name: 'Кофеинбар',
        direction:'кофейня',
        time: 'пн-пт 08:00 – 21:00, сб-вс 10:00-21:00 ',
        adress: 'ул.Московская, 24',
        site: 'https://vk.com/coffeeinbar',
        number: '8 (953) 314-44-41',
        delivery: 'Нет',
        bestdish:'кофе Лате и сладкий пирожок',
        description:'Летняя веранда, оплата картой, цена чашки капучино 100–180 ₽, завтрак, Wi-Fi, фудкорт, кофе с собой, средний счёт 150–300 ₽. Специальное меню: постное, сезонное, блинное, гриль, фитнес. Цены: средние. Тип заведения: гриль-бар, закусочная, фаст-фуд, чайный клуб, блинная, бар-клуб. Особенности заведения: настольные игры, своя пекарня, бранчи, бесплатная парковка, барная стойка, закрытие под банкет, кулинария. Кухня: европейская, американская, китайская, русская, японская.',
        id: 100048
    },

    {
        photo:url="https://igx.4sqi.net/img/general/original/90019099_T6mURzazRVx61Im7pjWJ1Il4zjUhK0qYp3NKptXYAWs.jpg",
        rating: 0,
        name: 'Peppers Pizza',
        direction:'пиццерия',
        time: '08:00 – 22:00',
        adress: 'ул. Академика Королёва, 22 и ул. Гагарина, 1Б',
        site: 'http://pepperspizza.ru/',
        number: '+7 (4842) 909-606',
        delivery: 'Есть',
        bestdish:'Пеперони',
        description:'Кофе с собой, оплата картой, средний счёт 600 ₽, завтрак, Wi-Fi, доставка еды. Кухня: американская, итальянская. Цены: средние. Тип заведения: детское кафе, закусочная. Специальное меню: сезонное.',
        id: 100049
    },

    {
        photo: url ="https://i2.photo.2gis.com/images/branch/61/8584986830262412_2648.jpg",
        rating: 0,
        name: 'The Pub 102',
        direction:'паб',
        time: '12:00 - 01:00',
        adress: 'ул. Суворова, 102А',
        site: 'http://pub102.ru/ru/',
        number: '+7 (4842) 561-891',
        delivery: 'Нет',
        bestdish:'пиво Чешское с чесночными гренками',
        description:'Летняя веранда, бизнес-ланч, кофе с собой, оплата картой, цена бокала пива 150 ₽, средний счёт 600–800 ₽, Wi-Fi, спортивные трансляции. Кухня: европейская, кавказская, русская, японская, смешанная. Цены: средние.',
        id: 100050
    },

    {
        photo: url ="https://i5.photo.2gis.com/images/branch/61/8584986806394795_c52b.jpg",
        rating: 0,
        name: 'Компот',
        direction:'кафе',
        time: 'пн-пт 08:30 – 20:30, сб-вс 10:30-20:30 ',
        adress: 'ул. Циолковского, 4',
        site: 'https://vk.com/cafekompot',
        number: '8 (960) 520-45-58',
        delivery: 'Нет',
        bestdish:'Катлеты по Киевски',
        description:'Оплата картой, бизнес-ланч, завтрак, кофе с собой, средний счёт 140–250 ₽. Специальное меню: блинное, детское. Цены: средние. Тип заведения: закусочная, пироговая, фаст-фуд, блинная. Особенности заведения: своя пекарня, бесплатная парковка, детская анимация, закрытие под банкет, кулинария. Кухня: европейская, белорусская, американская, итальянская, кавказская, русская, украинская, японская, восточная, авторская, домашняя, морская, смешанная. Доступность на кресле-коляске: недоступно.',
        id: 100051
    },

    {
        photo:url="https://www.1dom.ru/images/comp/1628/comp_logo_1628.png",
        rating: 0,
        name: 'Villagio',
        direction:'ресторан',
        time: 'пн-пт 07:00 – 00:00, сб-вс 08:30-00:00 ',
        adress: 'ул. Гагарина, 4, стр. 2, 1',
        site: 'https://vk.com/villagio_kaluga',
        number: '8 (909) 251-00-77',
        delivery: 'Нет',
        bestdish:'Стейк из мраморной говядины',
        description:'Летняя веранда, доставка еды, оплата картой, бизнес-ланч, крафтовое пиво, проектор, число экранов 8, завтрак, цена бизнес-ланча 300 ₽, Wi-Fi, спортивные трансляции, кофе с собой, средний счёт 800–900 ₽, детская комната. Специальное меню: сезонное, гриль. Цены: средние. Тип заведения: ресторан при отеле. Особенности заведения: меню на английском, своя пекарня, живая музыка, бесплатная парковка, винная карта, закрытие под банкет. Кухня: европейская, итальянская, авторская, домашняя, морская, смешанная. Доступность на кресле-коляске: полностью доступно.',
        id: 100052
    },

    {
        photo:url="https://files2.geometria.ru/pics/original/040/593/40593583.jpg",
        rating: 0,
        name: '2 Грека',
        direction:'ресторан',
        time: 'пн-чт,вс 12:00 – 03:00, пт-сб 12:00-05:00 ',
        adress: 'ул. Суворова, 29',
        site: 'https://vk.com/2greka',
        number: '8 (484) 254-76-90',
        delivery: 'Нет',
        bestdish:'Греческий салат',
        description:'Бизнес-ланч, кофе с собой, оплата картой, цена бокала пива 150 ₽, средний счёт 600–1000 ₽, караоке, Wi-Fi, спортивные трансляции. Кухня: европейская, кавказская. Цены: средние. Тип заведения: гриль-бар, детское кафе, пивной ресторан. Доступность на кресле-коляске: недоступно.',
        id: 100053
    },

    {
        photo:url="https://2.bp.blogspot.com/-VquWiIhZg2Y/UJg0a3PeHYI/AAAAAAABTcg/u9b_p7FUGYQ/s1600/Kentucky_Fried_Chicken_Logo33.jpg",
        rating: 0,
        name: 'KFC',
        direction:'быстрое питание',
        time: 'пн-чт,вс 08:00 – 23:00, пт-сб 08:00-23:00 ',
        adress: 'ул. Гагарина, 1 и ул. Кирова, 24',
        site: 'https://www.kfc.ru/',
        number: '8 (800) 707-54-77',
        delivery: 'Нет',
        bestdish:'Твистер',
        description:'Бизнес-ланч, кофе с собой, оплата картой, средний счёт 200 ₽, завтрак, Wi-Fi',
        id: 100054
    },
    
    {
        photo:url="http://citydel.ru/upload/iblock/bcc/OM_news.jpg",
        rating: 0,
        name: 'Osteria',
        direction:'ресторан',
        time: 'пн-чт,вс 09:00 – 00:00, пт-сб 09:00-01:00 ',
        adress: 'ул. Кирова, 7А, эт. 1',
        site: 'http://osteria-kaluga.ru/',
        number: '8 (484) 233-55-55',
        delivery: 'Есть',
        bestdish:'Ризотто',
        description:'Летняя веранда, оплата картой, бизнес-ланч, завтрак, Wi-Fi, кофе с собой, средний счёт 1000–1500 ₽. Специальное меню: сезонное. Цены: выше среднего. Особенности заведения: бранчи, винная карта. Кухня: авторская. Доступность на кресле-коляске: недоступно.',
        id: 100055
    },

    {
        photo: url ="https://mb-bb.ru/sites/default/files/dcs_0984-53.jpg",
        rating: 0,
        name: 'Мажор',
        direction:'ресторан',
        time: 'пн-чт 12:30 – 01:00, пт 12:30-02:00, сб 13:00-02:00, вс 12:30-02:00 ',
        adress: 'ул. Суворова, 29',
        site: 'https://vk.com/bar_major',
        number: '8 (484) 256-21-33',
        delivery: 'Нет',
        bestdish:'любая Паста',
        description:'Шоу-программа, летняя веранда, цена бокала пива 160–220 ₽, оплата картой, бизнес-ланч, крафтовое пиво, проектор, цена бизнес-ланча 269 ₽, Wi-Fi, танцпол, спортивные трансляции, кофе с собой, парковка, средний счёт 700–1000 ₽. Специальное меню: сезонное, гриль, диетическое. Цены: средние. Тип заведения: гриль-бар, стейк-хаус, пивной ресторан, бар-клуб, гастропаб. Особенности заведения: меню на английском, живая музыка, бесплатная парковка, барная стойка, винная карта, танцпол. Кухня: европейская, русская. Доступность на кресле-коляске: недоступно.',
        id: 100056
    },

    {
        photo:url="https://f4.bcbits.com/img/a0876886122_16.jpg",
        rating: 0,
        name: 'The Rocket Pub',
        direction:'паб',
        time: 'пн-пт 12:00 – 03:00, пт-сб 17:00-03:00 ',
        adress: 'ул. Суворова, 118',
        site: 'https://vk.com/therocketbar',
        number: '8 (902) 933-03-55',
        delivery: 'Нет',
        bestdish:'Пиво с чесночными гренками',
        description:'Бизнес-ланч, кофе с собой, оплата картой, цена бокала пива 200 ₽, средний счёт 1000 ₽, Wi-Fi, спортивные трансляции. Кухня: европейская. Цены: выше среднего. Доступность на кресле-коляске: недоступно.',
        id: 100057
    },

    {
        photo:url="http://www.cityinfo.am/files/1844/mimino-logo.png",
        rating: 0,
        name: 'Мимино',
        direction:'ресторан',
        time: '12:00 – 00:00 ',
        adress: 'ул. Герцена, 27',
        site: 'https://vk.com/mimino.kaluga',
        number: ' 8 (980) 712-04-84',
        delivery: 'Нет',
        bestdish:'Шашлык',
        description:'Летняя веранда, бизнес-ланч, цена бизнес-ланча 250 ₽, кофе с собой, оплата картой, средний счёт 300–1000 ₽, караоке, Wi-Fi. Кухня: грузинская, кавказская. Цены: средние. Тип заведения: винотека, закусочная, хинкальная.',
        id: 100058
    },

    {
        photo:url="https://price62.ru/news/2013/nt_4147_1.jpg",
        rating: 0,
        name: 'Томато',
        direction:'Пиццерия',
        time: 'пн-чт,вс 11:00 – 22:30, пт-сб 11:00-23:00, вс 11:00-22:00 ',
        adress: 'ул. Суворова, 29',
        site: 'http://www.tomato-pizza.ru/',
        number: '8-800-555-64-69',
        delivery: 'Есть',
        bestdish:'Пицца Сырная',
        description:'Летняя веранда, бизнес-ланч, детская комната, кофе с собой, оплата картой, средний счёт 400–500 ₽, завтрак, Wi-Fi.',
        id: 100059
    }

    ];
        module.exports = {
        food
};