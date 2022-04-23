import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../../constants/style';
import {CircleImage} from '../../CircleImage/CircleImage';
import icons from '../../../constants/icons';

export const ItemWithNestedList = ({itemWithNestedList, navigation}) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const getNestedItemInfo = item => {
    if (item.data.length === 0 && !item.routeName) {
      navigation.navigate('EmptyPage');
      return;
    }

    navigation.navigate(item.routeName, {
      data: item.data,
    });
  };

  const renderNestedItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        delayPressIn={0}
        onPress={() => getNestedItemInfo(item)}>
        <View style={styles.nestedListItem}>
          <Text style={styles.pageName}>{item.engTitle}</Text>
          <Image source={icons.rightArrow} style={styles.rightArrow} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        delayPressIn={0}
        onPress={() => setIsSectionOpen(!isSectionOpen)}>
        <View style={styles.listItem}>
          <CircleImage
            image={itemWithNestedList.icon}
            imageColor={COLORS.BLUE}
          />
          <Text style={styles.pageName}>{itemWithNestedList.engTitle}</Text>
        </View>
      </TouchableOpacity>
      {isSectionOpen && (
        <FlatList
          data={itemWithNestedList.data}
          renderItem={renderNestedItem}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginBottom: 10,
  },
  nestedListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 10,
    marginBottom: 10,
  },
  pageName: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    paddingLeft: 20,
  },
  rightArrow: {
    width: 20,
    height: 20,
  },
});
