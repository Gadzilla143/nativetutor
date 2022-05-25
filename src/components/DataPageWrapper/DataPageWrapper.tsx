import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PageHeader} from '../PageHeader/PageHeader';
import {SIZES} from '../../constants/style';
import {
  InfoPageScreenNavigationProp,
  TDiscountProps,
} from '../../types/navigation.types';

export const DataPageWrapper = ({
  navigation,
  pageTitle,
  children,
}: {
  navigation: TDiscountProps['navigation'] | InfoPageScreenNavigationProp;
  pageTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <PageHeader title={pageTitle} navigation={navigation} />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    height: SIZES.HEIGHT,
    alignSelf: 'center',
  },
});
