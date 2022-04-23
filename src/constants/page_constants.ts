import {DISCOUNT_SECTIONS_DATA} from './sections/discount_club_sections_constants';
import {TRAVEL_SECTIONS_DATA} from './sections/travel_sections_constants';
import {IPageData} from '../types/page.types';

export const travel = require('../assets/pagesIcons/travel.png');
export const discount = require('../assets/pagesIcons/discount.png');
export const fruits = require('../assets/pagesIcons/fruits.png');
export const health = require('../assets/pagesIcons/healthcare.png');
export const humanResources = require('../assets/pagesIcons/humanResources.png');
export const technicalGuide = require('../assets/pagesIcons/technicalGuide.png');

export const PAGES_DATA: IPageData[] = [
  {
    id: 1,
    icon: discount,
    engTitle: 'Discount Club | Minsk',
    rusTitle: 'Дисконтный клуб | Минск',
    data: DISCOUNT_SECTIONS_DATA,
  },
  {
    id: 2,
    icon: travel,
    engTitle: 'Travel',
    rusTitle: 'Заграничные поездки',
    data: TRAVEL_SECTIONS_DATA,
  },
  {
    id: 3,
    icon: fruits,
    engTitle: 'Fruits Delivery',
    rusTitle: 'Доставка фруктов',
    data: [],
  },
  {
    id: 4,
    icon: health,
    engTitle: 'Safety and Health',
    rusTitle: 'Страхование и здоровье',
    data: [],
  },
  {
    id: 5,
    icon: humanResources,
    engTitle: 'Human Resources',
    rusTitle: 'Отдел кадров',
    data: [],
  },
  {
    id: 6,
    icon: technicalGuide,
    engTitle: 'Technical Guide',
    rusTitle: 'Тухническая помощь',
    data: [],
  },
];
