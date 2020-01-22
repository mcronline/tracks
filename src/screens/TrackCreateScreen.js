import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import useLocation from '../hooks/useLocation';

import Map from '../components/Map';
import ErrorAlert from '../components/ErrorAlert';

import * as Permissions from 'expo-permissions';
import { watchPositionAsync, Accuracy } from 'expo-location';

import '../_mockLocation';

//import { Context as LocationContext } from '../context/locationContext';

const TrackCreateScreen = () =>{

    const { location, setLocation } = useLocation(null);

    const startWatching = async () => {
        try{
            
            const response = await Permissions.askAsync(Permissions.LOCATION);
            if(response.status !== 'granted')
                ErrorAlert('Location tracking was not allowed.');

            await watchPositionAsync({
                accuracy : Accuracy.BestForNavigation,
                timeInterval : 1000,
                distanceInterval : 10
            }, (currentLocation) => {

               setLocation(currentLocation.coords);
               
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
                coords={location}
                path={null}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    
});

export default TrackCreateScreen;