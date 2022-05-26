import React from 'react';
import {PageDataList} from '../../components/PageDataList/PageDataList';
import {TDiscountProps} from '../../types/navigation.types';
import {IDiscountData} from '../../types/discount.types';
import {DiscountCard} from '../../components/DiscountCard/DiscountCard';
import {DataPageWrapper} from '../../components/DataPageWrapper/DataPageWrapper';

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
    <DataPageWrapper navigation={navigation} pageTitle={'Discount'}>
      <PageDataList data={data} renderItem={renderDiscountCard} />
    </DataPageWrapper>
  );
};
