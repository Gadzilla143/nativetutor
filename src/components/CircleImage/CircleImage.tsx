import React from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';

const PAGE_ICON_SIZE = 45;

export const CircleImage = ({
  image,
  imageColor,
  onPress,
}: {
  image: HTMLImageElement;
  imageColor: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{...styles.pageIconCircle, backgroundColor: imageColor}}>
        <Image source={image} style={styles.pageIcon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  pageIconCircle: {
    width: PAGE_ICON_SIZE,
    height: PAGE_ICON_SIZE,
    borderRadius: PAGE_ICON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageIcon: {width: 27, height: 27},
});
