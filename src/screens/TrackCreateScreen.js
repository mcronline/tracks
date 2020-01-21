import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import * as Permissions from 'expo-permissions';
import { watchPositionAsync, Accuracy } from 'expo-location';
import ErrorAlert from '../components/ErrorAlert';
import '../_mockLocation';

const TrackCreateScreen = () =>{

    const initialLatitude = 37.33233;
    const initialLongitude = -122.03121;

    const [points, setPoints] = useState([{latitude : initialLatitude, longitude : initialLongitude}]);


    const startWatching = async () => {
        try{
            
            const response = await Permissions.askAsync(Permissions.LOCATION);
            if(response.status !== 'granted')
                ErrorAlert('Location tracking was not allowed.');

            await watchPositionAsync({
                accuracy : Accuracy.BestForNavigation,
                timeInterval : 1000,
                distanceInterval : 10
            }, (location) => {
               //console.log(location);
               setPoints([...points, {latitude : location.coords.latitude, longitude : location.coords.longitude}]);
               
            });

        } catch (err) {
            ErrorAlert(err.message, 'Location tracking problem');
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    return(
        <SafeAreaView forceInset={{top : 'always'}}>
            <Text h3>Create a track</Text>
            <Map
                initialLatitude={initialLatitude}
                initialLongitude={initialLongitude}
                points={points}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    
});

export default TrackCreateScreen;