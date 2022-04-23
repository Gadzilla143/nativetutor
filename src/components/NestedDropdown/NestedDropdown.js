import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ItemWithNestedList} from './ItemWithNestedList/ItemWithNestedList';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';

const NESTED_DROPDOWN_HEADER = 'Pages';

export const NestedDropdown = ({navigation, data}) => {
  const renderItemWithNestedList = ({item}) => {
    return (
      <ItemWithNestedList itemWithNestedList={item} navigation={navigation} />
    );
  };

  return (
    <View style={styles.contentBody}>
      <Text style={styles.contentHeader}>{NESTED_DROPDOWN_HEADER}</Text>
      <FlatList
        data={data}
        renderItem={renderItemWithNestedList}
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
