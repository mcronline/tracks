import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { formStyle } from '../styles/forms';
import { Context as locationContext } from '../context/locationContext';
import { Context as tracksContext } from '../context/tracksContext';
import ErrorAlert from '../components/ErrorAlert';

const TrackForm = () => {

    const {state, setRecordName, startRecording, stopRecording} = useContext(locationContext);
    const { addTrack } = useContext(tracksContext);
    
    const [buttonTitle, setButtonTitle] = useState(state.recording ? "Stop Recording" : "Start Recording");
    const [disabledRecordName, setDisabledRecordName] = useState(state.recording ? true : false);

    useEffect(() => {
        if(state.recording){
            setDisabledRecordName(true);
            setButtonTitle('Stop Recording');

        }else{
            setDisabledRecordName(false);
            setButtonTitle('Start Recording');

        }

    }, [state.recording]);

    const startStopRecording = () => {

        if(state.recording){
            addTrack(state.recordName, state.locations);
            stopRecording();

        }else if(state.recordName === ""){
            ErrorAlert("Please, specify the record name");

        }else{
            startRecording();

        }
    }
    
    return(
        <View style={style.container}>
            <Input 
                disabled={disabledRecordName}
                containerStyle={formStyle.input}
                placeholder='Specify a record name'
                value={state.recordName}
                onChangeText={setRecordName}
            />
            <Button 
                title={buttonTitle}
                containerStyle={formStyle.button}
                onPress={startStopRecording}
            />
        </View>
    );

}

const style = StyleSheet.create({
    container : {
        margin : 10
    }
});

export default TrackForm;