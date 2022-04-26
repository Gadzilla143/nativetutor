import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {IMarker} from '../../types/map.types';
import icons from '../../constants/icons';

interface IMarkerDescriptionProps {
  descriptionData: IMarker;
  setDescriptionData: (data: null | IMarker) => void;
}

export const MarkerDescription = ({
  descriptionData,
  setDescriptionData,
}: IMarkerDescriptionProps) => {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.markerDescriptionHeader}>
          {descriptionData.title}
        </Text>
        <Pressable onPress={() => setDescriptionData(null)}>
          <Image source={icons.closeIcon} style={styles.closeIcon} />
        </Pressable>
      </View>
      <Text style={styles.markerDescription}>
        {descriptionData.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    position: 'absolute',
    bottom: '5%',
    marginHorizontal: '2%',
    borderRadius: 10,
    width: '96%',
    backgroundColor: COLORS.BLUE,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  markerDescriptionHeader: {
    ...FONT_FAMILY,
    fontSize: SIZES.h2,
    color: COLORS.WHITE,
  },
  markerDescription: {
    ...FONT_FAMILY,
    fontSize: SIZES.h4,
    color: COLORS.WHITE,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
});
