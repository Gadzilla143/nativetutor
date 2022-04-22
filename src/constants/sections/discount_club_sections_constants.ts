import {DELIVERY_DISCOUNTS_DATA} from '../discount/delivery_discount_constants';
import {ISectionData} from '../../types/page.types';

export const DISCOUNT_SECTIONS_DATA: ISectionData[] = [
  {
    id: 1,
    engTitle: 'Delivery',
    rusTitle: 'Доставка',
    routeName: 'Discount',
    data: DELIVERY_DISCOUNTS_DATA.minsk,
  },
  {
    id: 2,
    engTitle: 'Entertainment',
    rusTitle: 'Развлечения',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 3,
    engTitle: 'Family Entertainment',
    rusTitle: 'Семейные развлечения',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 4,
    engTitle: 'For car lovers',
    rusTitle: 'Для любителей машин',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 5,
    engTitle: 'For kids',
    rusTitle: 'Для детей',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 6,
    engTitle: 'Services',
    rusTitle: 'Сервисы',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 7,
    engTitle: 'Shopping',
    rusTitle: 'Шоппинг',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 8,
    engTitle: 'Education',
    rusTitle: 'Обучение',
    routeName: 'Discount',
    data: [],
  },
];
