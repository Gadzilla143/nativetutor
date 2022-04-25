import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {IOS} from '../../constants/style';
import icons from '../../constants/icons';
import {
  EmptyPageScreenNavigationProp,
  TDiscountDescProps,
  TDiscountProps,
} from '../../types/navigation.types';

export const BackArrow = ({
  navigation,
}: {
  navigation:
    | TDiscountProps['navigation']
    | TDiscountDescProps['navigation']
    | EmptyPageScreenNavigationProp;
}) => {
  return (
    <>
      {!IOS && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.imageWrapper}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    left: 20,
    top: 5,
    position: 'absolute',
  },
  image: {
    width: 20,
    height: 30,
  },
});
