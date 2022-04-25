import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {DropdownItem} from './DropdownItem/DropdownItem';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {HomePageScreenNavigationProp} from '../../types/navigation.types';
import {IPageData} from '../../types/page.types';

const NESTED_DROPDOWN_HEADER = 'Pages';

export const NestedDropdown = ({
  navigation,
  data,
}: {
  navigation: HomePageScreenNavigationProp;
  data: IPageData[];
}) => {
  const renderDropdownItem = ({item}: {item: IPageData}) => {
    return <DropdownItem dropdownItem={item} navigation={navigation} />;
  };

  return (
    <View style={styles.contentBody}>
      <Text style={styles.contentHeader}>{NESTED_DROPDOWN_HEADER}</Text>
      <FlatList
        data={data}
        renderItem={renderDropdownItem}
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
