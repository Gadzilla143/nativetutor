import {ISectionData} from '../../types/page.types';
import {
  DISABLING_BUILD_IN_BATTERY_INFO,
  EMERGENCY_RESET_HOLE_INFO,
} from '../technicalGuide/technical_guide_constants';

export const TECHNICAL_GUIDE_SECTIONS_DATA: ISectionData[] = [
  {
    id: 'DisablingBuiltInBattery',
    engTitle: 'Disabling the built-in battery - ThinkPad',
    rusTitle: 'Отключить встроенный аккумулятор',
    routeName: 'Info',
    data: [DISABLING_BUILD_IN_BATTERY_INFO],
  },
  {
    id: 'EmergencyResetHole',
    engTitle: 'Emergency reset hole - ThinkPad',
    rusTitle: 'Отверстие аварийного сброса',
    routeName: 'Info',
    data: [EMERGENCY_RESET_HOLE_INFO],
  },
];
