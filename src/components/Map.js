import React from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

const Map = ({ coords, path }) => {

    if(!coords)
        return <ActivityIndicator size="large" style={{marginTop:200}} />;
    
    return(
        <MapView
            style={style.map}
            initialRegion={{
                latitude : coords.latitude,
                longitude : coords.longitude,
                latitudeDelta : 0.01,
                longitudeDelta : 0.01
            }}
        >

        <Circle
            center={coords}
            radius={30}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"
        />

        <Polyline coordinates={path} />

        </MapView>
    );
}

const style = StyleSheet.create({
    map : {
        height : 300
    }
});

export default Map;
