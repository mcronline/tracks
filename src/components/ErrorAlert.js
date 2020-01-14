import React from 'react';
import { Alert } from 'react-native';

export default (message, title = "There was a problem") => {

    if(!message) console.error("Specify a message for the ErrorAlert Component");
    
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