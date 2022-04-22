import {IDiscountCities} from '../../types/discount.types';

export const artsushi = require('../../assets/discounts/artsushi.jpg');
export const wok = require('../../assets/discounts/wok.jpg');
export const plovberry = require('../../assets/discounts/plovberry.jpeg');
export const tokiny = require('../../assets/discounts/tokiny.jpg');
export const papa = require('../../assets/discounts/papa.jpg');
export const healthy = require('../../assets/discounts/healthy.jpg');
export const domino = require('../../assets/discounts/domino.jpg');

export const DELIVERY_DISCOUNTS_DATA: IDiscountCities = {
  minsk: [
    {
      id: 1,
      rusTitle: 'АртСуши',
      engTitle: 'ArtSushi',
      routeName: 'DiscountDesc',
      socialLinks: {
        site: 'http://artsushi.by/',
      },
      img: artsushi,
      shortDesc: 'Доставка еды',
      address: '+375 29 687 60 60 \n+375 33 687 ',
      discount: '12%',
      promocode: 'Lll',
      instructions:
        'Сотрудникам Group доступны следующий скидки при заказе на сайте  :\n' +
        '7% - на заказ 1 го комплекса (1200 ккал-3000 ккал или детокс);\n' +
        '10% - на заказа 2х-4х комплексов (1200 ккал-3000 ккал или детокс);\n' +
        '15% - на заказ 5ти-7ми комплексов (1200 ккал-3000 ккал или детокс);\n' +
        '20% - на заказ 8ми и более комплексов.\n' +
        'Промокод для получения скидки - Lll.',
    },
    {
      id: 2,
      rusTitle: 'Вок.бай',
      engTitle: 'Wok.by',
      routeName: 'DiscountDesc',
      socialLinks: {
        site: 'http://wok.by',
      },
      img: wok,
      shortDesc: 'Доставка еды',
      address:
        '(vel, mts) 788 4444\n' +
        'Прием заказов: \n' +
        'вс-чт 11:00-22:00 \n' +
        'пт-сб 11:00 - 23:00',
      discount: '10%',
      promocode: 'Lll',
      instructions:
        'Скидка 10% распространяется на все меню по промокоду "LevsX" при заказе через колл-центр.\n' +
        'Доставка еды в Минске производится бесплатно.',
    },
    {
      id: 3,
      rusTitle: 'Пловберри',
      engTitle: 'Plovberry',
      routeName: 'DiscountDesc',
      socialLinks: {
        site: 'https://plovberry.by',
      },
      img: plovberry,
      shortDesc: 'Доставка еды',
      address: '(029)125-22-33\n' + 'Режим работы:\n' + '11:00-23:00',
      discount: '10%',
      promocode: 'Lll',
      instructions:
        'Скидка 10% распространяется на все меню по промокоду "LesrX" при заказе через колл-центр.\n' +
        'Доставка еды в Минске производится бесплатно.',
    },
    {
      id: 4,
      rusTitle: 'Токини',
      engTitle: 'TOKINY',
      routeName: 'DiscountDesc',
      socialLinks: {
        site: 'https://tokiny.by',
      },
      img: tokiny,
      shortDesc: 'Доставка еды',
      address:
        'Где искать TokiNY?\n' +
        '\nФуд-корт.\n' +
        'ТРЦ «Арена-Сити» на Победителей, 84. \n' +
        'Кафе. \n' +
        'пр.Дзержинского, 126 («ProStore»).' +
        'Take away.\n' +
        'Еду навынос можно забрать на фуд-корте в «Арене-Сити» и в точке на Кальварийской, 33.',
      discount: '10%',
      promocode: 'Lll',
      instructions:
        'Скидка 10% распространяется на все меню,кроме блюд, находящихся на специальном предложении.\n' +
        'Скидка актуальна на все виды заказа: доставка, с собой и на месте.\n' +
        'Для получения скидки предъявите дискотную карту.\n',
    },
    {
      id: 5,
      rusTitle: 'Папа Джонс',
      engTitle: "Papa John's",
      routeName: 'DiscountDesc',
      socialLinks: {
        site: 'https://www.papajohns.by/',
        instagram: 'https://www.instagram.com/papajohnsby/',
      },
      img: papa,
      shortDesc: 'Доставка еды',
      address: 'Для заказа - 7779 \n' + 'Доставка с 10.00 до 02.00 ',
      discount: '10%',
      promocode: 'Lll',
      instructions:
        '** Постоянная скидка на доставку 15% и акционные предложения не суммируются, вы всегда можете выбрать, воспользоваться ли вам скидкой или акционным предложением.\n' +
        'При предъявлении корпоративной карты в зале ресторана вы можете получить скидку 10% на продукцию собственного производства.',
    },
    {
      id: 6,
      rusTitle: 'Здоровый план',
      engTitle: 'Healthy Plan',
      routeName: 'DiscountDesc',
      socialLinks: {
        site: 'www.healthyplan.by',
      },
      img: healthy,
      shortDesc: 'Доставка еды',
      address: '',
      discount: '10%',
      promocode: 'Lll',
      instructions:
        'Сотрудникам Group доступны следующий скидки при заказе на сайте  :\n' +
        '7% - на заказ 1 го комплекса (1200 ккал-3000 ккал или детокс);\n' +
        '10% - на заказа 2х-4х комплексов (1200 ккал-3000 ккал или детокс);\n' +
        '15% - на заказ 5ти-7ми комплексов (1200 ккал-3000 ккал или детокс);\n' +
        '20% - на заказ 8ми и более комплексов.',
    },
    {
      id: 7,
      rusTitle: 'Доминос пицца',
      engTitle: "Domino's Pizza",
      routeName: 'DiscountDesc',
      socialLinks: {
        site: 'https://dominos.by/',
      },
      img: domino,
      shortDesc: 'Доставка еды',
      address:
        'Время работы пиццерий: с 11.00 – до 23.00 ежедневно.\n' +
        'Доставка пиццы осуществляется круглосуточно только в г. Минске.',
      discount: '25%',
      promocode: 'Lll',
      instructions:
        'Для сотрудников Group доступна скидка 25%.\n' +
        'Для оформления заказа используйте логин и пароль аккаунта компании.',
    },
  ],
  gomel: [],
  kyiv: [],
  brest: [],
  grodno: [],
  vitebsk: [],
};
