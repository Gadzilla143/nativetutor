import {ISectionData} from '../../types/page.types';
import {TRAVEL_POLICY_INFO, VISA_POLICY_INFO} from '../travel/travel_constants';

export const TRAVEL_SECTIONS_DATA: ISectionData[] = [
  {
    id: 'Hotels',
    engTitle: 'Hotels',
    rusTitle: 'Отели',
    routeName: 'Info',
    data: [],
  },
  {
    id: 'Travel Policy',
    engTitle: 'Travel Policy',
    rusTitle: 'Политика путешествий',
    routeName: 'Info',
    data: [TRAVEL_POLICY_INFO],
  },
  {
    id: 'Visa Policy',
    engTitle: 'Visa Policy',
    rusTitle: 'Визовая политика',
    routeName: 'Info',
    data: [VISA_POLICY_INFO],
  },
];
