import React from 'react';
import {View, StyleSheet, Text, SectionList} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';

const EMPTY_SECTION_MESSAGE = 'There is no result for entered search string.';

export const SearchDropdownList = ({sectionsData}) => {
  const renderSearchItem = foundItemTitle => (
    <View style={styles.item}>
      <Text style={styles.title}>{foundItemTitle}</Text>
    </View>
  );

  const renderEmptySearchResultMessage = searchResultLength => {
    if (searchResultLength === 0) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{EMPTY_SECTION_MESSAGE}</Text>
        </View>
      );
    }
  };

  const renderSectionHeader = sectionHeader => (
    <Text style={styles.header}>{sectionHeader}</Text>
  );

  return (
    <SectionList
      sections={sectionsData}
      style={styles.searchListContainer}
      renderItem={({item}) => renderSearchItem(item.title)}
      renderSectionFooter={({section}) =>
        renderEmptySearchResultMessage(section.data.length)
      }
      renderSectionHeader={({section: {title}}) => renderSectionHeader(title)}
    />
  );
};

const styles = StyleSheet.create({
  searchListContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    flex: 1,
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
