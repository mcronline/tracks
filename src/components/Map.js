import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = ( {
    initialLatitude,
    initialLongitude,
    points
} ) => {
    console.log(points[points.length - 1]);
    return(
        <MapView
            style={style.map}
            initialRegion={{
                latitude : initialLatitude,
                longitude : initialLongitude,
                latitudeDelta : 0.01,
                longitudeDelta : 0.01
            }}
        >
            <Polyline coordinates={points} />
        </MapView>
    );
}

const style = StyleSheet.create({
    map : {
        height : 300
    }
});

export default Map;
