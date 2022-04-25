import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {CircleImage} from '../CircleImage/CircleImage';
import LinearGradient from 'react-native-linear-gradient';
import {SearchInput} from '../SearchInput/SearchInput';
import {HomePageScreenNavigationProp} from '../../types/navigation.types';
import {account, logo} from '../../constants/header_constants';

const APP_NAME = 'LAsk';

interface IHeaderProps {
  navigation: HomePageScreenNavigationProp;
  setIsPressOnSearchArea: (isPressed: boolean) => void;
  isPressOnSearchArea: boolean;
}

export const Header = ({
  navigation,
  setIsPressOnSearchArea,
  isPressOnSearchArea,
}: IHeaderProps) => {
  return (
    <LinearGradient
      colors={[COLORS.DARK_BLUE, COLORS.LIGHT_BLUE]}
      style={styles.header}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View
        style={[
          styles.headerTopContainer,
          isPressOnSearchArea ? styles.hideComponent : styles.showComponent,
        ]}>
        <View style={styles.headerLogoContainer}>
          <Image source={logo} style={styles.pageIcon} />
          <Text style={styles.appName}>{APP_NAME}</Text>
        </View>
        <View>
          <CircleImage image={account} imageColor={COLORS.WHITE} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <SearchInput
          navigation={navigation}
          isPressOnSearchArea={isPressOnSearchArea}
          setIsPressOnSearchArea={setIsPressOnSearchArea}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 30,
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
  searchContainer: {
    flexDirection: 'row',
    height: 60,
  },
  showComponent: {
    display: 'flex',
  },
  hideComponent: {
    display: 'none',
  },
});
