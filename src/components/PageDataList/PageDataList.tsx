import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants/style';
import {IDiscountData} from '../../types/discount.types';

interface IPageDataListProps {
  data: IDiscountData[];
  renderItem: (item: ListRenderItemInfo<IDiscountData>) => React.ReactElement;
}

export const PageDataList = ({data, renderItem}: IPageDataListProps) => {
  const numColumns = data.length === 2 ? 1 : 2;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
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
