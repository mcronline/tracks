import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';

const TrackCreateScreen = () =>{

    return(
        <SafeAreaView forceInset={{top : 'always'}}>
            <Text h3>Create a track</Text>
            <Map />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    
});

export default TrackCreateScreen;