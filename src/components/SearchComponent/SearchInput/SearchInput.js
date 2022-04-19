import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';
import {search} from '../../../constants/header_constants';
import {
  getFilteredSectionsData,
  getFullSectionsData,
} from '../../../utils/search.utils';
import {SearchDropdownList} from '../SearchDropdownList/SearchDropdownList';

const SEARCH_INPUT_PLACEHOLDER = 'Search for company info';

export const SearchInput = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sectionsData, setSectionsData] = useState(getFullSectionsData());
  const textInput = useRef();

  const onChangeHandler = value => {
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
    <View style={styles.searchBarContainer}>
      <View style={styles.searchInputContainer}>
        <Image source={search} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeHandler}
          value={searchValue}
          placeholder={SEARCH_INPUT_PLACEHOLDER}
          ref={textInput}
          onFocus={() => setIsSearchOpen(true)}
        />
      </View>
      {isSearchOpen && (
        <SearchDropdownList
          sectionsData={sectionsData}
          navigation={navigation}
        />
      )}
    </View>
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
