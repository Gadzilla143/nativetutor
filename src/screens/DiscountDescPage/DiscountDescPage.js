import React, {useEffect, useState} from 'react';

import {StyleSheet, View, Image} from 'react-native';
import {DiscountHeader} from '../Discount/DiscountHeader';

import {COLORS, SIZES} from '../../constants/style';
import {DISCOUNTS_DATA} from '../../constants/discount_constants';
import {DiscountDescPageBody} from './DiscountDescPageBody';

export const DiscountDescPage = ({route, navigation}) => {
    const {itemRouteName} = route.params;
    const data = DISCOUNTS_DATA.discounts.minsk;
    const [discountData, setDiscountData] = useState(null);


    useEffect(() => {
        //API call here
        setDiscountData(data.filter(item => item.routeName === itemRouteName)[0])
    }, [])

  return (
    <View style={styles.wrapper}>
      <DiscountHeader navigation={navigation} />
      <Image style={styles.logo} source={discountData?.img} />
      <DiscountDescPageBody discountData={discountData} />
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
        zIndex: 1
    },
})

