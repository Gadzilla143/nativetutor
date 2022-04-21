import {DISCOUNT_SECTIONS_DATA} from './cestions/discount_club_sections_constants';
import {TRAVEL_SECTIONS_DATA} from './cestions/travel_sections_constants';
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
    title: 'Discount Club | Minsk',
    routeName: 'DiscountMinsk',
    topicsData: DISCOUNT_SECTIONS_DATA,
  },
  {
    id: 2,
    icon: travel,
    title: 'Travel',
    routeName: 'Travel',
    topicsData: TRAVEL_SECTIONS_DATA,
  },
  {
    id: 3,
    icon: fruits,
    title: 'Fruits Delivery',
    routeName: 'Fruits',
    topicsData: [],
  },
  {
    id: 4,
    icon: health,
    title: 'Safety and Health',
    routeName: 'Health',
    topicsData: [],
  },
  {
    id: 5,
    icon: humanResources,
    title: 'HR',
    routeName: 'HR',
    topicsData: [],
  },
  {
    id: 6,
    icon: technicalGuide,
    title: 'Technical Guide',
    routeName: 'TechnicalGuide',
    topicsData: [],
  },
];
