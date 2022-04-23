import {DiscountCard} from './renderDiscountCard';
import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants/style';

export const DiscountList = ({navigation, data}) => {
  const numColumns = data.length === 2 ? 1 : 2;

  const renderDiscountCard = ({item}) => {
    return (
      <DiscountCard
        {...item}
        onPress={() =>
          navigation.navigate('DiscountDesc', {
            itemRouteName: item.routeName,
            data: data,
          })
        }
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => `${item.id}`}
      renderItem={renderDiscountCard}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingBottom: SIZES.HEIGHT * 0.3,
  },
});
