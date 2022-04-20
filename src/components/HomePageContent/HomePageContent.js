import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {PAGES_DATA} from '../../constants/page_constants';
import {HomePageContentItem} from './HomePageContentItem/HomePageContentItem';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';

const HOME_PAGE_CONTENT_HEADER = 'Pages';

export const HomePageContent = ({navigation}) => {
  const renderItem = ({item}) => (
    <HomePageContentItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.contentBody}>
      <Text style={styles.contentHeader}>{HOME_PAGE_CONTENT_HEADER}</Text>
      <FlatList
        data={PAGES_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentBody: {
    flex: 2,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  contentHeader: {
    ...FONT_FAMILY,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: COLORS.DARK,
  },
});
