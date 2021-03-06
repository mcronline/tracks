import React, { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import useLocation from '../hooks/useLocation';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

import '../_mockLocation';

import { Context as locationContext } from '../context/locationContext';

const TrackCreateScreen = ({ isFocused }) =>{

    const {state, setCurrentLocation, recordLocation} = useContext(locationContext);
    
    useLocation(isFocused, state.recording, useCallback((currentLocation) => {
        
        if(currentLocation.coords.latitude != 37.4219983){
            setCurrentLocation(currentLocation.coords);
            
            if(state.recording){
                recordLocation(currentLocation.coords);
                
            }

        }
    }, [state.recording]));

    return(
        <SafeAreaView forceInset={{top : 'always'}}>
            <Text h3>Create a track</Text>
            <Map
                coords={state.currentLocation}
                path={state.locations.map(( location ) => location.coords)}
            />
            <TrackForm />
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen);