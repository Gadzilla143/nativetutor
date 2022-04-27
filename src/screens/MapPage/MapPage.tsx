import React, {createRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';
import {COLORS, FONT_FAMILY, SIZES} from '../../constants/style';
import {PageHeader} from '../../components/PageHeader/PageHeader';
import {MAP_LOCATIONS, MAP_MARKERS} from '../../constants/map_constants';
import {MapPageScreenNavigationProp} from '../../types/navigation.types';
import {IMarker} from '../../types/map.types';
import {MarkerDescription} from '../../components/MarkerDescription/MarkerDescription';

export const MapPage = ({
  navigation,
}: {
  navigation: MapPageScreenNavigationProp;
}) => {
  let mapRef = createRef<MapView>();
  const [descriptionData, setDescriptionData] = useState<IMarker | null>(null);

  const animate = (region: Region) => {
    if (mapRef && mapRef.current) {
      mapRef.current.animateToRegion(region, 2000);
    }
  };

  const setDataForMarkerDescription = (marker: IMarker) => {
    if (descriptionData && descriptionData.title === marker.title) {
      setDescriptionData(null);
      return;
    }

    setDescriptionData(marker);
  };

  return (
    <View>
      <PageHeader title={'Map'} navigation={navigation} />
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 53.953503855296326,
          longitude: 27.678004612052952,
          latitudeDelta: 1.2922,
          longitudeDelta: 1.2421,
        }}>
        {MAP_MARKERS.map((marker, index) => (
          <Marker
            key={index + marker.title}
            coordinate={marker.region}
            onPress={() => setDataForMarkerDescription(marker)}
          />
        ))}
      </MapView>
      <View style={styles.buttonsContainer}>
        {MAP_LOCATIONS.map(location => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.locationButton}
            onPress={() => animate(location.region)}>
            <Text style={styles.buttonText}>{location.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {descriptionData && (
        <MarkerDescription
          descriptionData={descriptionData}
          setDescriptionData={setDescriptionData}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: SIZES.HEIGHT * 0.9,
  },
  buttonsContainer: {
    position: 'absolute', //use absolute position to show button on top of the map
    top: '11%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
  },
  locationButton: {
    marginRight: 10,
    backgroundColor: COLORS.BLUE,
    borderRadius: 5,
    padding: 12,
  },
  buttonText: {
    ...FONT_FAMILY,
    color: COLORS.WHITE,
    fontWeight: '500',
  },
});
