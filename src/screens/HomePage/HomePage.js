import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components/Header/Header';
import {HomePageContent} from '../../components/HomePageContent/HomePageContent';

export const HomePage = ({navigation}) => {
  return (
    <View style={styles.body}>
      <HomePageContent navigation={navigation} />
      <Header navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
