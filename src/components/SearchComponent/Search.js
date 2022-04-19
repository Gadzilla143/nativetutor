import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchInput} from './SearchInput/SearchInput';
import {SearchButton} from './SearchButton/SearchButton';

export const Search = ({navigation}) => {
  return (
    <View style={styles.searchContainer}>
      <SearchInput navigation={navigation} />
      <SearchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});
