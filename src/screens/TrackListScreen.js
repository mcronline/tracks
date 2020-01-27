import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Context as tracksContext } from '../context/tracksContext';
import { NavigationEvents } from 'react-navigation';
import { Text, ListItem, Icon } from 'react-native-elements';

import { Feather } from '@expo/vector-icons';

import basics from '../styles/basics';

const TrackListScreen = () =>{

    const { state, fetchTracks, removeTrack } = useContext(tracksContext);

    const removeAlert = (trackId, name) => {
        
        Alert.alert(
            "Remove Track",
            `Are you sure you want to remove track "${name}"?`,
            [
                {
                    text : 'Remove',
                    onPress : () => { removeTrack(trackId) }
                },
                {
                    text : 'Cancel',
                    onPress : () => {}
                }
            ]
        )

    }

    const renderItem = ({ item }) => {
        return <ListItem 
            title = { item.name }
            rightIcon = { <Feather 
                    name='trash' 
                    size={20}
                    onPress = { () => removeAlert(item._id, item.name) } 
                /> }
            bottomDivider
        />
    };
    
    return (
        <View style={basics.mainContainer}>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Text h3 style={{ textAlign : 'center' }}>Your Tracks</Text>
            {
                state.length > 0 ?
                <FlatList
                    data = { state }
                    renderItem = { renderItem }
                    keyExtractor = { (item) => {return item._id; }}
                /> :            
                <Text style={{ textAlign : 'center', paddingTop : 20, fontSize : 20 }}>Let's track!</Text>
            }
        </View>
    )
}

export default TrackListScreen;