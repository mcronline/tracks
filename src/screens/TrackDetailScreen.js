import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import Map from '../components/Map';

import {Context as trackContext} from '../context/tracksContext';

const TrackDetailScreen = ({ navigation }) =>{
    const trackId = navigation.getParam('trackId');
    
    const { state } = useContext(trackContext);
    
    const track = state.find((track) => track._id === trackId);
    
    const initialPosition = track.locations[0].coords;
    
    return(
        <SafeAreaView forceInset={{top : 'always'}}>
            <Text h3 style={{ textAlign : 'center', marginBottom : 20 }}>{ track.name }</Text>
            <Map
                coords={ initialPosition }
                path={ track.locations.map((location) => location.coords) }
                trackPosition = {false}
            />
        </SafeAreaView>
    )
    
}

export default TrackDetailScreen;