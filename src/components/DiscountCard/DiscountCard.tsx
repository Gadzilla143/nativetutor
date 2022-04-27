import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../constants/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import icons from '../../constants/icons';

interface IDiscountCardProps {
  id: string;
  engTitle: string;
  img: HTMLImageElement;
  discount: string;
  shortDesc: string;
  onPress: () => void;
  closeIconHandler?: (itemId: string) => void;
}

export const DiscountCard = (props: IDiscountCardProps) => {
  const {id, engTitle, img, discount, shortDesc, onPress, closeIconHandler} =
    props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.logo} source={img} />
        {closeIconHandler && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => closeIconHandler(id)}>
            <Image style={styles.closeIcon} source={icons.closeIcon} />
          </TouchableOpacity>
        )}
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {engTitle}
        </Text>
        <Text style={styles.desc}>{shortDesc}</Text>
        <Text style={styles.discount}>{discount}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.details}>{'Details'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: SIZES.WIDTH * 0.4,
    height: SIZES.HEIGHT * 0.3,
    paddingTop: 50,
    paddingLeft: 5,
    paddingRight: 5,
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.DARK_GREY,
    backgroundColor: COLORS.LIGHT_GREY,
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  logo: {
    alignSelf: 'center',
    position: 'absolute',
    width: 80,
    height: 80,
    marginTop: -40,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.DARK_GREY,
  },
  closeIcon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    width: SIZES.WIDTH * 0.32,
    color: COLORS.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  desc: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 12,
  },
  discount: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: COLORS.WHITE,
    width: '60%',
    height: 30,
    borderRadius: 10,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  details: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    borderRadius: 10,
    fontWeight: 'bold',
    color: COLORS.DARK_BLUE,
    marginBottom: 10,
  },
});
