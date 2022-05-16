import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {FavoriteContext} from '../../../App';
import {setData} from '../../utils/AsyncStorage';
import icons from '../../constants/icons';
import {IFavoriteContext} from '../../types/context.types';
import {IDiscountData} from '../../types/discount.types';

export const Like = ({data}: {data: IDiscountData}) => {
  const {favorite, setFavorite} = useContext(
    FavoriteContext,
  ) as IFavoriteContext;

  const checkIsFavorite = (itemId: string) =>
    !!favorite.find(favoriteItem => favoriteItem.id === itemId);

  const onLike = () => {
    const newFavoriteData = checkIsFavorite(data.id)
      ? favorite.filter(favoriteItem => favoriteItem.id !== data.id)
      : [...favorite, data];

    setData('favorite', newFavoriteData);
    setFavorite(newFavoriteData);
  };

  return (
    <TouchableOpacity onPress={onLike}>
      <Image
        style={styles.icon}
        source={
          checkIsFavorite(data.id) ? icons.favoriteSvg : icons.unfavoriteSvg
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    marginTop: 25,
    width: 30,
    height: 30,
  },
});
