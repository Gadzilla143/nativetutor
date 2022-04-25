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
import {IPageData, ISectionData} from '../../../types/page.types';
import {
  HomePageScreenNavigationProp,
  RootStackParamList,
} from '../../../types/navigation.types';

export const DropdownItem = ({
  dropdownItem,
  navigation,
}: {
  dropdownItem: IPageData;
  navigation: HomePageScreenNavigationProp;
}) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const checkIfItemHasNestedList = !dropdownItem.routeName;

  const dropdownItemPressHandler = () => {
    if (checkIfItemHasNestedList) {
      setIsSectionOpen(!isSectionOpen);
      return;
    }

    navigation.navigate(dropdownItem.routeName as keyof RootStackParamList);
  };

  const getNestedItemInfo = (item: ISectionData) => {
    if (item.data.length === 0) {
      navigation.navigate('EmptyPage');
      return;
    }

    navigation.navigate(item.routeName as keyof RootStackParamList, {
      data: item.data,
    });
  };

  const renderNestedItem = ({item}: {item: ISectionData}) => {
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
        onPress={dropdownItemPressHandler}>
        <View style={styles.listItem}>
          <CircleImage image={dropdownItem.icon} imageColor={COLORS.BLUE} />
          <Text style={styles.pageName}>{dropdownItem.engTitle}</Text>
        </View>
      </TouchableOpacity>
      {isSectionOpen && (
        <FlatList
          data={dropdownItem.data}
          renderItem={renderNestedItem}
          keyExtractor={item => `${item.id}`}
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
