import {DELIVERY_DISCOUNTS_DATA} from '../discount/delivery_discount_constants';
import {ISectionData} from '../../types/page.types';

export const DISCOUNT_SECTIONS_DATA: ISectionData[] = [
  {
    id: 1,
    title: 'Delivery',
    routeName: 'DeliveryMinsk',
    data: DELIVERY_DISCOUNTS_DATA.minsk,
  },
  {
    id: 2,
    title: 'Entertainment',
    routeName: 'EntertainmentMinsk',
    data: [],
  },
  {
    id: 3,
    title: 'Family Entertainment',
    routeName: 'FamilyEntertainmentMinsk',
    data: [],
  },
  {
    id: 4,
    title: 'For car lovers',
    routeName: 'ForCarLoversMinsk',
    data: [],
  },
  {
    id: 5,
    title: 'For kids',
    routeName: 'ForKidsMinsk',
    data: [],
  },
  {
    id: 6,
    title: 'Services',
    routeName: 'ServicesMinsk',
    data: [],
  },
  {
    id: 7,
    title: 'Shopping',
    routeName: 'ShoppingMinsk',
    data: [],
  },
  {
    id: 8,
    title: 'Education',
    routeName: 'EducationMinsk',
    data: [],
  },
];
