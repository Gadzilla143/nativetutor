import {PAGES_DATA} from '../constants/page_constants';

const INITIAL_SECTIONS_DATA = [
  {title: 'Detailed information', data: []},
  {
    title: 'Topics',
    data: [],
  },
];

export const getFullSectionsData = () => {
  const topicsData = PAGES_DATA.reduce(
    (prevTopics, currentTopicData) => [
      ...prevTopics,
      {title: currentTopicData.title, routeName: currentTopicData.routeName},
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
      },
    ],
    [],
  );

  return INITIAL_SECTIONS_DATA.map(section =>
    section.title === 'Topics'
      ? {...section, data: topicsData}
      : {...section, data: detailedInfoData},
  );
};

export const getFilteredSectionsData = searchValue =>
  getFullSectionsData().map(sectionData => {
    const filteredSectionData = sectionData.data.filter(data =>
      data.title.toUpperCase().includes(searchValue.toUpperCase()),
    );
    return {...sectionData, data: filteredSectionData};
  });
