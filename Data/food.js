const food = [
    {
        photo:url="https://veganfoodlover.com/wp-content/uploads/2014/07/McDonald.jpg",
        rating: 0,
        name: 'Макдоналдс',
        direction:'быстрое питание',
        time: '07:00 – 00:00',
        adress:'ул. Кирова, 1',
        id: 100045
    },

    {
        photo:url="https://gorodskidok48.ru/upload/iblock/690/690dd288b9114fc43c393b9d3aa8d01b.jpg",
        rating: 0,
        name: 'Ташир Пицца',
        direction:'пиццерия',
        time: '10:00 – 22:00',
        adress:'ул. Кирова, 1, ТРЦ XXI век, этаж 3 и ул. Кирова, 63 и ул. Кирова, 19, Калуга, этаж 4',
        id: 100046
    },

    {
        photo:url="https://i.pinimg.com/736x/5f/07/77/5f077737f8e96cc70dd86702a4e0d7e2--visual-communication-popular.jpg",
        rating: 0,
        name: 'Camorra Pizza e Birra',
        direction:'пиццерия,паб',
        time: '12:00 – 00:00, пт-сб 12:00 – 02:00',
        adress:'ул. Ленина, 86А',
        id: 100047
    },

    {
        photo:url="https://i6.photo.2gis.com/images/branch/14/1970324854160086_8944.jpg",
        rating: 0,
        name: 'Кофеинбар',
        direction:'кофейня',
        time: 'пн-пт 08:00 – 21:00, сб-вс 10:00-21:00 ',
        adress:'ул.Московская, 24',
        id: 100048
    },

    {
        photo:url="https://igx.4sqi.net/img/general/original/90019099_T6mURzazRVx61Im7pjWJ1Il4zjUhK0qYp3NKptXYAWs.jpg",
        rating: 0,
        name: 'Peppers Pizza',
        direction:'пиццерия',
        time: '08:00 – 22:00',
        adress:'ул. Академика Королёва, 22 и ул. Гагарина, 1Б',
        id: 100049
    },

    {
        photo:url="https://avatars.mds.yandex.net/get-altay/223006/2a0000015b2eb7aebbd6318d6323f2797267/XXXL",
        rating: 0,
        name: 'The Pub 102',
        direction:'паб',
        time: '12:00 - 01:00',
        adress:'ул. Суворова, 102А',
        id: 100050
    },

    {
        photo:url="http://my-svadba.ru/photos/company_photo/3a/19/dc/aa/1811164_large.jpg",
        rating: 0,
        name: 'Компот',
        direction:'кафе',
        time: 'пн-пт 08:30 – 20:30, сб-вс 10:30-20:30 ',
        adress:'ул. Циолковского, 4',
        id: 100051
    },

    {
        photo:url="https://www.1dom.ru/images/comp/1628/comp_logo_1628.png",
        rating: 0,
        name: 'Villagio',
        direction:'кафе, ресторан',
        time: 'пн-пт 07:00 – 00:00, сб-вс 08:30-00:00 ',
        adress:'ул. Гагарина, 4, стр. 2, 1',
        id: 100052
    },

    {
        photo:url="https://files2.geometria.ru/pics/original/040/593/40593583.jpg",
        rating: 0,
        name: '2 Грека',
        direction:'кaфе,ресторан',
        time: 'пн-чт,вс 12:00 – 03:00, пт-сб 12:00-05:00 ',
        adress:'ул. Суворова, 29',
        id: 100053
    },

    {
        photo:url="https://divnil.com/wallpaper/iphone/img/app/3/0/3044138-kfc-wallpapers_459127a03e0b1e64b2e8fff8034743e6_raw.jpg",
        rating: 0,
        name: 'KFC',
        direction:'быстрое питание',
        time: 'пн-чт,вс 08:00 – 23:00, пт-сб 08:00-23:00 ',
        adress:'ул. Гагарина, 1 и ул. Кирова, 24',
        id: 100054
    },
    
    {
        photo:url="http://citydel.ru/upload/iblock/bcc/OM_news.jpg",
        rating: 0,
        name: 'Osteria',
        direction:'кaфе,ресторан',
        time: 'пн-чт,вс 09:00 – 00:00, пт-сб 09:00-01:00 ',
        adress:'ул. Кирова, 7А, эт. 1',
        id: 100055
    },

    {
        photo:url="http://kaluga24.tv/wp-content/uploads/2015/03/999de8421620f7c03c8e.jpg",
        rating: 0,
        name: 'Мажор',
        direction:'паб,ресторан',
        time: 'пн-чт 12:30 – 01:00, пт 12:30-02:00, сб 13:00-02:00, вс 12:30-02:00 ',
        adress:'ул. Суворова, 29',
        id: 100056
    },

    {
        photo:url="https://f4.bcbits.com/img/a0876886122_16.jpg",
        rating: 0,
        name: 'The Rocket Pub',
        direction:'кaфе,паб',
        time: 'пн-пт 12:00 – 03:00, пт-сб 17:00-03:00 ',
        adress:'ул. Суворова, 118',
        id: 100057
    },

    {
        photo:url="http://www.cityinfo.am/files/1844/mimino-logo.png",
        rating: 0,
        name: 'Мимино',
        direction:'кaфе,ресторан',
        time: '12:00 – 00:00 ',
        adress:'ул. Герцена, 27',
        id: 100058
    },

    {
        photo:url="https://price62.ru/news/2013/nt_4147_1.jpg",
        rating: 0,
        name: 'Томато',
        direction:'Пиццерия,ресторан',
        time: 'пн-чт,вс 11:00 – 22:30, пт-сб 11:00-23:00, вс 11:00-22:00 ',
        adress:'ул. Суворова, 29',
        id: 100059
    }

];

    module.exports = {
        food
    };