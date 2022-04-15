import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';
import {CircleImage} from '../../CircleImage/CircleImage';

export const HomePageContentItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={0}
      onPress={() => navigation.navigate(item.routeName)}>
      <View style={styles.pagesListItem}>
        <CircleImage image={item.icon} imageColor={COLORS.LIGHT_BLUE} />
        <Text style={styles.pageName}>{item.pageName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pagesListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginBottom: 10,
  },
  pageName: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    paddingLeft: 20,
  },
});
