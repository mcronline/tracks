import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import useLocation from '../hooks/useLocation';

import Map from '../components/Map';

import '../_mockLocation';

import { Context as LocationContext } from '../context/locationContext';


const TrackCreateScreen = ({ isFocused }) =>{

    const {state, setCurrentLocation} = useContext(LocationContext);
    
    useLocation(isFocused, (currentLocation) => {
        console.log("HI!!");
        if(currentLocation.coords.latitude != 37.4219983)
            setCurrentLocation(currentLocation.coords);
    });

    return(
        <SafeAreaView forceInset={{top : 'always'}}>
            <Text h3>Create a track</Text>
            <Map
                coords={state.currentLocation}
                path={null}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    
});

export default withNavigationFocus(TrackCreateScreen);