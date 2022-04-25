import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackArrow} from '../../components/BackArrow/BackArrow';
import {FONT_FAMILY, SIZES} from '../../constants/style';
import {EmptyPageScreenNavigationProp} from '../../types/navigation.types';

const EMPTY_PAGE_CONTENT =
  'Sorry, but this page does not have any information at this time.';

export const EmptyPage = ({
  navigation,
}: {
  navigation: EmptyPageScreenNavigationProp;
}) => {
  return (
    <View style={styles.emptyPageContent}>
      <BackArrow navigation={navigation} />
      <Text style={styles.emptyPageText}>{EMPTY_PAGE_CONTENT}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyPageContent: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyPageText: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
