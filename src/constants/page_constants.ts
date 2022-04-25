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
    id: 'Discount Club',
    icon: discount,
    engTitle: 'Discount Club | Minsk',
    rusTitle: 'Дисконтный клуб | Минск',
    data: DISCOUNT_SECTIONS_DATA,
  },
  {
    id: 'Travel',
    icon: travel,
    engTitle: 'Travel',
    rusTitle: 'Заграничные поездки',
    data: TRAVEL_SECTIONS_DATA,
  },
  {
    id: 'Fruits Delivery',
    icon: fruits,
    engTitle: 'Fruits Delivery',
    rusTitle: 'Доставка фруктов',
    data: [],
  },
  {
    id: 'Safety and Health',
    icon: health,
    engTitle: 'Safety and Health',
    rusTitle: 'Страхование и здоровье',
    data: [],
  },
  {
    id: 'HR',
    icon: humanResources,
    engTitle: 'Human Resources',
    rusTitle: 'Отдел кадров',
    data: [],
  },
  {
    id: 'TG',
    icon: technicalGuide,
    engTitle: 'Technical Guide',
    rusTitle: 'Тухническая помощь',
    data: [],
  },
  {
    id: 7,
    icon: technicalGuide,
    engTitle: 'Maps',
    rusTitle: 'Карты',
    data: [
      {
        id: 1,
        engTitle: 'Map of our offices',
        rusTitle: 'Карта наших офисов',
        routeName: 'Map',
        data: [],
      },
    ],
  },
];
