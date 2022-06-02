import {IPageData, ISectionData} from './page.types';
import {IDiscountData} from './discount.types';

type TAnchoredSection = {
  anchoredSection: ESectionTitles;
};

export type TTopicsData = ISectionData & TAnchoredSection;

export type TDetailedInfoData = (IDiscountData | IPageData) & TAnchoredSection;

export enum ESectionTitles {
  DETAILED_INFO_SECTION_TITLE = 'Detailed information',
  TOPICS_SECTION_TITLE = 'Topics',
}

export interface IInitialSectionData {
  sectionTitle: ESectionTitles;
  data: TTopicsData[] & TDetailedInfoData[];
}
