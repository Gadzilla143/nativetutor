import {ISectionData} from '../../types/page.types';
import {
  CONDUCT_RULES_INFO,
  PREVENTING_ACCIDENTS_INFO,
  PRODUCTION_FACTORS_INFO,
} from '../safety_n_health/safety_n_health_constants';

export const SAFETY_N_HEALTH_SECTIONS_DATA: ISectionData[] = [
  {
    id: 'ConductRules',
    engTitle:
      'Rules of conduct for an employee on the territory of the organization',
    rusTitle: 'Правила поведения работника на территории организации',
    routeName: 'Info',
    data: CONDUCT_RULES_INFO,
  },
  {
    id: 'ProductionFactors',
    engTitle: 'The main dangerous or harmful production factors',
    rusTitle: 'Основные опасные или вредные производственные факторы',
    routeName: 'Info',
    data: PRODUCTION_FACTORS_INFO,
  },
  {
    id: 'PreventingAccidents',
    engTitle:
      'Methods and means of preventing accidents and occupational diseases',
    rusTitle:
      'Методы и средства предупреждения несчастных случаев и профессиональных заболеваний',
    routeName: 'Info',
    data: PREVENTING_ACCIDENTS_INFO,
  },
];
