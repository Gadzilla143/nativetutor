import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../../../constants/style';

export const SearchButton = () => {
  return (
    <TouchableOpacity
      style={styles.searchButtonContainer}
      onPress={() => console.log('click')}>
      <Text style={styles.searchButtonText}>Go</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  searchButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
