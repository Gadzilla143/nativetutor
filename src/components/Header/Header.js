import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/style';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>{'Home'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: COLORS.DARK_BLUE,
  },
});
