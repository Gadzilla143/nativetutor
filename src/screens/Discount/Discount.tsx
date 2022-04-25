import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DiscountHeader} from './DiscountHeader';
import {SIZES} from '../../constants/style';
import {DiscountList} from './DiscountList';
import {TDiscountProps} from '../../types/navigation.types';

export const DiscountPage = ({route, navigation}: TDiscountProps) => {
  const {data} = route.params;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <DiscountHeader title={'Discount'} navigation={navigation} />
        <DiscountList navigation={navigation} data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    height: SIZES.HEIGHT,
    alignSelf: 'center',
  },
});