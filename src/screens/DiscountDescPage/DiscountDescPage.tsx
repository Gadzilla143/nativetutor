import React from 'react';

import {StyleSheet, View, Image} from 'react-native';
import {DiscountHeader} from '../Discount/DiscountHeader';

import {COLORS, SIZES} from '../../constants/style';
import {DiscountDescPageBody} from './DiscountDescPageBody';
import {TDiscountDescProps} from '../../types/navigation.types';

export const DiscountDescPage = ({route, navigation}: TDiscountDescProps) => {
  const {data} = route.params;

  return (
    <View style={styles.wrapper}>
      <DiscountHeader navigation={navigation} title={data?.engTitle} />
      <Image style={styles.logo} source={data?.img} />
      <DiscountDescPageBody discountData={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  logo: {
    position: 'absolute',
    marginTop: 80,
    width: SIZES.WIDTH / 2,
    height: SIZES.WIDTH / 2,
    borderRadius: 40,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.LIGHT_BLUE,
    alignSelf: 'center',
    zIndex: 1,
  },
});
