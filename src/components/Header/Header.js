import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {account, logo} from '../../constants/header_constants';
import {CircleImage} from '../CircleImage/CircleImage';
import {Search} from '../SearchComponent/Search';

const APP_NAME = 'LAsk';

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTopContainer}>
        <View style={styles.headerLogoContainer}>
          <Image source={logo} style={styles.pageIcon} />
          <Text style={styles.appName}>{APP_NAME}</Text>
        </View>
        <View>
          <CircleImage image={account} imageColor={COLORS.WHITE} />
        </View>
      </View>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 30,
    backgroundColor: COLORS.DARK_BLUE,
    justifyContent: 'space-between',
  },
  headerTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pageIcon: {width: 40, height: 40},
  appName: {
    ...FONT_FAMILY,
    fontSize: SIZES.h1,
    paddingLeft: 10,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
