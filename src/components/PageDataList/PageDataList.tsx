import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants/style';
import {IDiscountData} from '../../types/discount.types';
import {IFavoriteContext} from '../../types/context.types';

interface IPageDataListProps {
  data: IDiscountData[] | IFavoriteContext['favorite'];
  renderItem: (item: ListRenderItemInfo<IDiscountData>) => React.ReactElement;
}

export const PageDataList = ({data, renderItem}: IPageDataListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
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
