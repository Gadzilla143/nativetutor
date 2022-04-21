import {DELIVERY_DISCOUNTS_DATA} from '../discount/delivery_discount_constants';
import {ISectionData} from '../../types/page.types';

export const DISCOUNT_SECTIONS_DATA: ISectionData[] = [
  {
    id: 1,
    title: 'Delivery',
    routeName: 'DeliveryMinsk',
    sectionData: DELIVERY_DISCOUNTS_DATA.minsk,
  },
  {
    id: 2,
    title: 'Entertainment',
    routeName: 'EntertainmentMinsk',
    sectionData: [],
  },
  {
    id: 3,
    title: 'Family Entertainment',
    routeName: 'FamilyEntertainmentMinsk',
    sectionData: [],
  },
  {
    id: 4,
    title: 'For car lovers',
    routeName: 'ForCarLoversMinsk',
    sectionData: [],
  },
  {
    id: 5,
    title: 'For kids',
    routeName: 'ForKidsMinsk',
    sectionData: [],
  },
  {
    id: 6,
    title: 'Services',
    routeName: 'ServicesMinsk',
    sectionData: [],
  },
  {
    id: 7,
    title: 'Shopping',
    routeName: 'ShoppingMinsk',
    sectionData: [],
  },
  {
    id: 8,
    title: 'Education',
    routeName: 'EducationMinsk',
    sectionData: [],
  },
];
