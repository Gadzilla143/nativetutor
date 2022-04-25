import {DELIVERY_DISCOUNTS_DATA} from '../discount/delivery_discount_constants';
import {ISectionData} from '../../types/page.types';

export const DISCOUNT_SECTIONS_DATA: ISectionData[] = [
  {
    id: 'Delivery',
    engTitle: 'Delivery',
    rusTitle: 'Доставка',
    routeName: 'Discount',
    data: DELIVERY_DISCOUNTS_DATA.MINSK,
  },
  {
    id: 'Entertainment',
    engTitle: 'Entertainment',
    rusTitle: 'Развлечения',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 'Family Entertainment',
    engTitle: 'Family Entertainment',
    rusTitle: 'Семейные развлечения',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 'For car lovers',
    engTitle: 'For car lovers',
    rusTitle: 'Для любителей машин',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 'For kids',
    engTitle: 'For kids',
    rusTitle: 'Для детей',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 'Services',
    engTitle: 'Services',
    rusTitle: 'Сервисы',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 'Shopping',
    engTitle: 'Shopping',
    rusTitle: 'Шоппинг',
    routeName: 'Discount',
    data: [],
  },
  {
    id: 'Education',
    engTitle: 'Education',
    rusTitle: 'Обучение',
    routeName: 'Discount',
    data: [],
  },
];
