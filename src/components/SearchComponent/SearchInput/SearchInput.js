import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';
import {search} from '../../../constants/header_constants';

const SEARCH_INPUT_PLACEHOLDER = 'Search for company info';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.searchInputContainer}>
      <Image source={search} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        onChangeText={value => setSearchValue(value)}
        value={searchValue}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 60,
    borderRadius: 10,
    flex: 1,
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    backgroundColor: COLORS.WHITE,
  },
});
