import {IPageData, ISectionData} from './page.types';
import {IDiscountData} from './discount.types';

type TAnchoredSection = {
  anchoredSection: ESectionTitles;
};

export type TTopicsData = (ISectionData | IPageData) & TAnchoredSection;

export type TDetailedInfoData = IDiscountData & TAnchoredSection;

export enum ESectionTitles {
  DETAILED_INFO_SECTION_TITLE = 'Detailed information',
  TOPICS_SECTION_TITLE = 'Topics',
}

export interface IInitialSectionData {
  sectionTitle: ESectionTitles;
  data: TTopicsData[] & TDetailedInfoData[];
}
