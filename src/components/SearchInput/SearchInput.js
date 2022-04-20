import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {search} from '../../constants/header_constants';
import {
  getFilteredSectionsData,
  getFullSectionsData,
} from '../../utils/search.utils';
import {SearchDropdownList} from './SearchDropdownList/SearchDropdownList';

const SEARCH_INPUT_PLACEHOLDER = 'Search for company info';

export const SearchInput = ({
  navigation,
  isPressOnSearchArea,
  setIsPressOnSearchArea,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [sectionsData, setSectionsData] = useState(getFullSectionsData());

  const setSearchPhrase = value => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) {
      setSectionsData(getFullSectionsData());
      return;
    }

    setSectionsData(getFilteredSectionsData(searchValue));
  }, [searchValue]);

  return (
    <TouchableWithoutFeedback onPress={() => setIsPressOnSearchArea(true)}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={search} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            onChangeText={setSearchPhrase}
            value={searchValue}
            placeholder={SEARCH_INPUT_PLACEHOLDER}
            onFocus={() => setIsPressOnSearchArea(true)}
          />
        </View>
        {isPressOnSearchArea && (
          <SearchDropdownList
            sectionsData={sectionsData}
            navigation={navigation}
            setIsSearchListOpen={setIsPressOnSearchArea}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    position: 'relative',
  },
  searchInputContainer: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  searchIcon: {
    marginLeft: 20,
    marginRight: 10,
    width: 30,
    height: 30,
  },
  searchInput: {
    borderRadius: 10,
    flex: 1,
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    backgroundColor: COLORS.WHITE,
  },
});
