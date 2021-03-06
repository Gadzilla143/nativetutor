import {DISCOUNT_SECTIONS_DATA} from './sections/discount_club_sections_constants';
import {TRAVEL_SECTIONS_DATA} from './sections/travel_sections_constants';
import {IPageData} from '../types/page.types';
import {SAFETY_N_HEALTH_SECTIONS_DATA} from './sections/safety_n_health_sections_constants';
import {HUMAN_RESOURCES_SECTIONS_DATA} from './sections/human_resources_sections_constants';
import {TECHNICAL_GUIDE_SECTIONS_DATA} from './sections/technical_guide_sections_constants';
import {FRUITS_INFO} from './fruits/fruits_constants';

export const travel = require('../assets/pagesIcons/travel.png');
export const discount = require('../assets/pagesIcons/discount.png');
export const fruits = require('../assets/pagesIcons/fruits.png');
export const health = require('../assets/pagesIcons/healthcare.png');
export const humanResources = require('../assets/pagesIcons/humanResources.png');
export const technicalGuide = require('../assets/pagesIcons/technicalGuide.png');
export const maps = require('../assets/pagesIcons/map.png');
export const unfavoredSvg = require('../assets/icons/unfavorite.png');

export const PAGES_DATA: IPageData[] = [
  {
    id: 'Favorite',
    icon: unfavoredSvg,
    engTitle: 'Favorite',
    rusTitle: 'Избранное',
    routeName: 'Favorite',
  },
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
    routeName: 'Info',
    data: [FRUITS_INFO],
  },
  {
    id: 'Safety and Health',
    icon: health,
    engTitle: 'Safety and Health',
    rusTitle: 'Страхование и здоровье',
    data: SAFETY_N_HEALTH_SECTIONS_DATA,
  },
  {
    id: 'HR',
    icon: humanResources,
    engTitle: 'Human Resources',
    rusTitle: 'Отдел кадров',
    data: HUMAN_RESOURCES_SECTIONS_DATA,
  },
  {
    id: 'TG',
    icon: technicalGuide,
    engTitle: 'Technical Guide',
    rusTitle: 'Тухническая помощь',
    data: TECHNICAL_GUIDE_SECTIONS_DATA,
  },
  {
    id: 'Maps',
    icon: maps,
    engTitle: 'Maps',
    rusTitle: 'Карты',
    routeName: 'Map',
  },
];
