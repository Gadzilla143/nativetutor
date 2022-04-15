import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {COLORS} from '../../../constants/style';
import {search} from '../../../constants/header_constants';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.searchInputContainer}>
      <Image source={search} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        onChangeText={value => setSearchValue(value)}
        value={searchValue}
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
    backgroundColor: COLORS.WHITE,
  },
});
