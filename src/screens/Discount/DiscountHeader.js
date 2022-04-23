import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../constants/style';
import {BackArrow} from '../../components/BackArrow/BackArrow';

export const DiscountHeader = ({navigation, title}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <BackArrow navigation={navigation} />
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    left: 0,
    right: 0,
    height: SIZES.HEIGHT * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  container: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: SIZES.WIDTH * 0.8,
  },
  title: {
    fontSize: SIZES.h1,
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
});
