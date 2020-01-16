import React from 'react';
import { Alert } from 'react-native';

export default (message, title = "There was a problem") => {

    if(!message) message = "A problem has occured";
    
    Alert.alert(
        title,
        message,
        [
            {
                text : "OK",
                onPress : () => {}
            }
        ]
    );

};