import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input} from 'react-native-elements';

const LoginForm = (props) => {

    return (
        <View>
            <Input
                placeholder="Enter you E-mail"
                label="E-mail:"
            />
            <Input
                placeholder="Enter you Password"
                label="Password:"
            />
            <Button
                title={props.buttonLabel}
            />
        </View>
    );

}

export default LoginForm;