import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {CircleImage} from '../CircleImage/CircleImage';
import {HomePageScreenNavigationProp} from '../../types/navigation.types';
import {account} from '../../constants/header_constants';

interface IHeaderProps {
  navigation: HomePageScreenNavigationProp;
}

const isLogIn = false;

export const LogInContainer = ({navigation}: IHeaderProps) => {
  const onPressAuthenticationButton = () => {
    navigation.navigate('Authentication');
  };

  return isLogIn ? (
    <CircleImage
      image={account}
      imageColor={COLORS.WHITE}
      onPress={onPressAuthenticationButton}
    />
  ) : (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressAuthenticationButton}>
      <Text style={styles.logInText}>Log In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logInText: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE,
  },
});
