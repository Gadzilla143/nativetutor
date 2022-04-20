import {PAGES_DATA} from '../constants/page_constants';

export const DETAILED_INFO_SECTION_TITLE = 'Detailed information';
export const TOPICS_SECTION_TITLE = 'Topics';

const INITIAL_SECTIONS_DATA = [
  {sectionTitle: DETAILED_INFO_SECTION_TITLE, data: []},
  {
    sectionTitle: TOPICS_SECTION_TITLE,
    data: [],
  },
];

export const getFullSectionsData = () => {
  const topicsData = PAGES_DATA.reduce(
    (prevTopics, currentTopicData) => [
      ...prevTopics,
      {
        title: currentTopicData.title,
        routeName: currentTopicData.routeName,
        anchoredSection: TOPICS_SECTION_TITLE,
      },
    ],
    [],
  );

  const pagesData = PAGES_DATA.reduce(
    (prevPagesData, currentPageData) => [
      ...prevPagesData,
      ...currentPageData.data,
    ],
    [],
  );
  const detailedInfoData = pagesData.reduce(
    (prevDetailedInfo, currentDetailedInfo) => [
      ...prevDetailedInfo,
      {
        title: currentDetailedInfo.title,
        routeName: currentDetailedInfo.routeName,
        anchoredSection: DETAILED_INFO_SECTION_TITLE,
      },
    ],
    [],
  );

  return INITIAL_SECTIONS_DATA.map(section =>
    section.sectionTitle === 'Topics'
      ? {...section, data: topicsData}
      : {...section, data: detailedInfoData},
  );
};

const isNoSearchResult = filteredData =>
  filteredData.every(section => section.data.length === 0);

const findSearchString = (stringForSearch, searchValue) =>
  stringForSearch.toUpperCase().includes(searchValue.toUpperCase());

export const getFilteredSectionsData = searchValue => {
  const filteredData = getFullSectionsData().map(sectionData => {
    const filteredSectionData = sectionData.data.filter(
      data =>
        findSearchString(data.title, searchValue) ||
        findSearchString(data.routeName, searchValue),
    );

    return {...sectionData, data: filteredSectionData};
  });

  return isNoSearchResult(filteredData) ? [] : filteredData;
};