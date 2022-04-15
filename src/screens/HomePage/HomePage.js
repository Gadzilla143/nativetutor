import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components/Header/Header';
import {HomePageContent} from '../../components/HomePageContent/HomePageContent';

export const HomePage = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Header />
      <HomePageContent navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});