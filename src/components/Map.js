import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {

    const points = [];
    const initialLatitude = 37.33233;
    const initialLongitude = -122.03121;
    const radius = 0.01;
    let x;
    let y;

    function circleX (angle, radius){
        return radius * Math.cos(angle);
    }

    function circleY (angle, radius){
        return radius * Math.sin(angle);
    }

    for(let angle=0; angle < 360; angle++){
        x = initialLatitude + circleX(angle, radius);
        y = initialLongitude + circleY(angle, radius)
        
        points.push({
            latitude : parseFloat(x.toFixed(5)),
            longitude : parseFloat(y.toFixed(5))
        })
    }

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
