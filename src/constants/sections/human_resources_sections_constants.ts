import {ISectionData} from '../../types/page.types';
import {
  CALENDAR_INFO,
  EMAIL_INFO,
  EMPLOYEES_PERSONAL_APPEARANCE_INFO,
  LINKEDIN_INFO,
  SKYPE_INFO,
  WORK_SCHEDULE_INFO,
} from '../humanResources/human_resources_constants';

export const HUMAN_RESOURCES_SECTIONS_DATA: ISectionData[] = [
  {
    id: 'Email',
    engTitle: 'Email',
    rusTitle: 'Имеил',
    routeName: 'Info',
    data: [EMAIL_INFO],
  },
  {
    id: 'Calendar',
    engTitle: 'Calendar',
    rusTitle: 'Календарь',
    routeName: 'Info',
    data: [CALENDAR_INFO],
  },
  {
    id: 'LinkedIn',
    engTitle: 'LinkedIn',
    rusTitle: 'Линкедин',
    routeName: 'Info',
    data: [LINKEDIN_INFO],
  },
  {
    id: 'Skype',
    engTitle: 'Skype',
    rusTitle: 'Скайп',
    routeName: 'Info',
    data: [SKYPE_INFO],
  },
  {
    id: 'EmployeesPersonalAppearance',
    engTitle: 'Personal appearance of employees',
    rusTitle: 'Регламент внешнего вида сотрудников',
    routeName: 'Info',
    data: [EMPLOYEES_PERSONAL_APPEARANCE_INFO],
  },
  {
    id: 'WorkSchedule',
    engTitle: 'Work schedule',
    rusTitle: 'Рабочее расписание',
    routeName: 'Info',
    data: [WORK_SCHEDULE_INFO],
  },
];
