import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';
import {
  ESectionTitles,
  IInitialSectionData,
  TDetailedInfoData,
  TTopicsData,
} from '../../../types/search.types';
import {
  HomePageScreenNavigationProp,
  RootStackParamList,
} from '../../../types/navigation.types';

const EMPTY_SECTION_MESSAGE = 'There is no result for entered search string.';

interface ISearchDropdownListProps {
  sectionsData: IInitialSectionData[];
  navigation: HomePageScreenNavigationProp;
  setIsSearchListOpen: (isOpen: boolean) => void;
}

export const SearchDropdownList = ({
  sectionsData,
  navigation,
  setIsSearchListOpen,
}: ISearchDropdownListProps) => {
  const searchItemPressHandler = (item: TTopicsData | TDetailedInfoData) => {
    setIsSearchListOpen(false);

    if (item.anchoredSection === ESectionTitles.DETAILED_INFO_SECTION_TITLE) {
      navigation.navigate(item.routeName as keyof RootStackParamList, {
        data: item as TDetailedInfoData,
      });
      return;
    }

    if ((item as TTopicsData).data.length === 0) {
      navigation.navigate('EmptyPage');
      return;
    }

    navigation.navigate(item.routeName as keyof RootStackParamList, {
      data: (item as TTopicsData).data,
    });
  };

  const renderSearchItem = (item: TTopicsData | TDetailedInfoData) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => searchItemPressHandler(item)}
      style={styles.item}>
      <Text style={styles.title}>{item.engTitle}</Text>
    </TouchableOpacity>
  );

  const renderEmptySearchResultMessage = () => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{EMPTY_SECTION_MESSAGE}</Text>
      </View>
    );
  };

  const renderSectionHeader = (sectionHeader: string) => (
    <Text style={styles.header}>{sectionHeader}</Text>
  );

  return (
    <SectionList
      sections={sectionsData}
      style={styles.searchListContainer}
      renderItem={({item}) => renderSearchItem(item)}
      renderSectionHeader={({section}) => {
        if (section.data.length === 0) {
          return <></>;
        }
        return renderSectionHeader(section.sectionTitle);
      }}
      ListEmptyComponent={() => renderEmptySearchResultMessage()}
      keyExtractor={item => item.engTitle}
    />
  );
};

const styles = StyleSheet.create({
  searchListContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    width: '100%',
    height: '400%',
    top: 62,
    borderColor: COLORS.LIGHT_BLUE,
    borderWidth: 2,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    ...FONT_FAMILY,
    fontSize: SIZES.h3,
    padding: 15,
    color: COLORS.DARK,
  },
  title: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    color: COLORS.GREY_TEXT,
  },
});
