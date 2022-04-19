import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';
import {DETAILED_INFO_SECTION_TITLE} from '../../../utils/search.utils';

const EMPTY_SECTION_MESSAGE = 'There is no result for entered search string.';

export const SearchDropdownList = ({sectionsData, navigation}) => {
  const searchItemPressHandler = item => {
    if (item.anchoredSection === DETAILED_INFO_SECTION_TITLE) {
      navigation.navigate('DiscountDesc', {
        itemRouteName: item.routeName,
      });
      return;
    }

    navigation.navigate(item.routeName);
  };

  const renderSearchItem = item => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => searchItemPressHandler(item)}
      style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
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
      renderItem={({item}) => renderSearchItem(item)}
      renderSectionFooter={({section}) =>
        renderEmptySearchResultMessage(section.data.length)
      }
      renderSectionHeader={({section: {sectionTitle}}) =>
        renderSectionHeader(sectionTitle)
      }
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
