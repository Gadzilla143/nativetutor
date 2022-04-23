import React, {createRef} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import {COLORS, SIZES} from "../../constants/style";
import {DiscountHeader} from "../Discount/DiscountHeader";
import {MAP_LOCATIONS, MAP_MARKERS} from "../../constants/map_constants";

export const MapPage = ({navigation}) => {
    let mapRef = createRef();
    const animate = region => {
      if (mapRef) {
        mapRef.current.animateToRegion(region, 2000)
      }
    }
    return (
        <View>
            <DiscountHeader title={'Map'} navigation={navigation}/>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: 53.953503855296326,
                    longitude: 27.678004612052952,
                    latitudeDelta: 1.2922,
                    longitudeDelta: 1.2421,
                }}
            >
                {MAP_MARKERS.map((marker, index) => (
                    <Marker
                        key={index + marker.title}
                        coordinate={marker.region}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
            <View
                style={styles.buttonsContainer}
            >
                {MAP_LOCATIONS.map(location =>
                    <Button id={location.title} title={location.title} onPress={() => animate(location.region)}/>
                )}
            </View>
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
        position: 'absolute',//use absolute position to show button on top of the map
        top: '50%', //for center align
        alignSelf: 'flex-end', //for align to right
        backgroundColor: COLORS.BLUE,
    }
});
