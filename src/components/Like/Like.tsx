import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {FavoriteContext} from '../../../App';
import {setData} from '../../utils/AsyncStorage';
import icons from '../../constants/icons';
import {IFavoriteContext} from '../../types/context.types';

export const Like = ({id}: {id: string}) => {
  const {favorite, setFavorite} = useContext(
    FavoriteContext,
  ) as IFavoriteContext;

  const onLike = () => {
    const newFavoriteData = {...favorite, [id]: !favorite[id]};
    setData('favorite', newFavoriteData);
    setFavorite(newFavoriteData);
  };

  return (
    <TouchableOpacity onPress={onLike}>
      <Image
        style={styles.icon}
        source={favorite[id] ? icons.favoriteSvg : icons.unfavoriteSvg}
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
