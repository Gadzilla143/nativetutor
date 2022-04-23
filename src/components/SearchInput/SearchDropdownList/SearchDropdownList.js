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

export const SearchDropdownList = ({
  sectionsData,
  navigation,
  setIsSearchListOpen,
}) => {
  const searchItemPressHandler = item => {
    setIsSearchListOpen(false);

    if (item.anchoredSection === DETAILED_INFO_SECTION_TITLE) {
      navigation.navigate(item.routeName, {
        data: item,
      });
      return;
    }

    if (item.data.length === 0) {
      navigation.navigate('EmptyPage');
      return;
    }

    navigation.navigate(item.routeName, {
      data: item.data,
    });
  };

  const renderSearchItem = item => (
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

  const renderSectionHeader = sectionHeader => (
    <Text style={styles.header}>{sectionHeader}</Text>
  );

  return (
    <SectionList
      sections={sectionsData}
      style={styles.searchListContainer}
      renderItem={({item}) => renderSearchItem(item)}
      renderSectionHeader={({section}) => {
        if (section.data.length === 0) {
          return;
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
