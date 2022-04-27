import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PageHeader} from '../../components/PageHeader/PageHeader';
import {SIZES} from '../../constants/style';
import {PageDataList} from '../../components/PageDataList/PageDataList';
import {TDiscountProps} from '../../types/navigation.types';
import {IDiscountData} from '../../types/discount.types';
import {DiscountCard} from '../../components/DiscountCard/DiscountCard';

export const DiscountPage = ({route, navigation}: TDiscountProps) => {
  const {data} = route.params;

  const renderDiscountCard = ({item}: {item: IDiscountData}) => {
    return (
      <DiscountCard
        {...item}
        onPress={() =>
          navigation.navigate('DiscountDesc', {
            data: item,
          })
        }
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <PageHeader title={'Discount'} navigation={navigation} />
        <PageDataList data={data} renderItem={renderDiscountCard} />
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
