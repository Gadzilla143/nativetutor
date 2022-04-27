import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {FavoritePageScreenNavigationProp} from '../../types/navigation.types';
import {FavoriteContext} from '../../../App';
import {IFavoriteContext} from '../../types/context.types';
import {IDiscountData} from '../../types/discount.types';
import {DiscountCard} from '../../components/DiscountCard/DiscountCard';
import {PageHeader} from '../../components/PageHeader/PageHeader';
import {PageDataList} from '../../components/PageDataList/PageDataList';
import {SIZES} from '../../constants/style';

export const FavoritePage = ({
  navigation,
}: {
  navigation: FavoritePageScreenNavigationProp;
}) => {
  const {favorite, setFavorite} = useContext(
    FavoriteContext,
  ) as IFavoriteContext;

  const closeIconHandler = (itemId: string) => {
    const favoriteWithoutSelectedItem = favorite.filter(
      favoriteItem => favoriteItem.id !== itemId,
    );
    setFavorite(favoriteWithoutSelectedItem);
  };

  const renderFavoriteCard = ({item}: {item: IDiscountData}) => {
    return (
      <DiscountCard
        {...item}
        onPress={() =>
          navigation.navigate('DiscountDesc', {
            data: item,
          })
        }
        closeIconHandler={closeIconHandler}
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <PageHeader title={'Favorite'} navigation={navigation} />
        <PageDataList data={favorite} renderItem={renderFavoriteCard} />
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
