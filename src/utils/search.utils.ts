import {PAGES_DATA} from '../constants/page_constants';
import {ISectionData} from '../types/page.types';
import {IDiscountData} from '../types/discount.types';
import {
  ESectionTitles,
  IInitialSectionData,
  TDetailedInfoData,
  TTopicsData,
} from '../types/search.types';

const INITIAL_SECTIONS_DATA: IInitialSectionData[] = [
  {sectionTitle: ESectionTitles.DETAILED_INFO_SECTION_TITLE, data: []},
  {
    sectionTitle: ESectionTitles.TOPICS_SECTION_TITLE,
    data: [],
  },
];

export const getFullSectionsData = (): IInitialSectionData[] => {
  const sectionsData: ISectionData[] = PAGES_DATA.map(
    pageData => pageData.data as ISectionData[],
  ).flat();

  const topicsData = sectionsData.reduce(
    (prevTopics, currentTopicData) => [
      ...prevTopics,
      {
        ...currentTopicData,
        anchoredSection: ESectionTitles.TOPICS_SECTION_TITLE,
      },
    ],
    [] as TTopicsData[],
  );

  const pagesData = sectionsData.reduce(
    (prevPagesData, currentPageData) => [
      ...prevPagesData,
      ...currentPageData.data,
    ],
    [] as IDiscountData[],
  );

  const detailedInfoData = pagesData.reduce(
    (prevDetailedInfo, currentDetailedInfo) => [
      ...prevDetailedInfo,
      {
        ...currentDetailedInfo,
        anchoredSection: ESectionTitles.DETAILED_INFO_SECTION_TITLE,
      },
    ],
    [] as TDetailedInfoData[],
  );

  return INITIAL_SECTIONS_DATA.map(section =>
    section.sectionTitle === 'Topics'
      ? {...section, data: topicsData}
      : {...section, data: detailedInfoData},
  ) as IInitialSectionData[];
};

const isNoSearchResult = (filteredData: IInitialSectionData[]) =>
  filteredData.every(section => section.data.length === 0);

const findSearchString = (stringForSearch: string, searchValue: string) =>
  stringForSearch.toUpperCase().includes(searchValue.toUpperCase());

export const getFilteredSectionsData = (
  searchValue: string,
): IInitialSectionData[] => {
  const filteredData: IInitialSectionData[] = getFullSectionsData().map(
    sectionData => {
      const filteredSectionData = sectionData.data.filter(
        data =>
          findSearchString(data.engTitle, searchValue) ||
          findSearchString(data.rusTitle, searchValue),
      );

      return {...sectionData, data: filteredSectionData};
    },
  );

  return isNoSearchResult(filteredData as IInitialSectionData[])
    ? []
    : filteredData;
};
