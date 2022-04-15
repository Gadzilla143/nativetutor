import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';

const PAGE_ICON_SIZE = 45;

export const HomePageContentItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={0}
      onPress={() => navigation.navigate(item.routeName)}>
      <View style={styles.pagesListItem}>
        <View style={styles.pageIconCircle}>
          <Image source={item.icon} style={styles.pageIcon} />
        </View>
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
  pageIconCircle: {
    width: PAGE_ICON_SIZE,
    height: PAGE_ICON_SIZE,
    borderRadius: PAGE_ICON_SIZE / 2,
    backgroundColor: COLORS.LIGHT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageIcon: {width: 27, height: 27},
  pageName: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    paddingLeft: 20,
  },
});
