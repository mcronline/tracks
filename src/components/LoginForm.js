import React from 'react';
import { View } from 'react-native';
import { Button, Input} from 'react-native-elements';

import { formStyle } from '../styles/forms';

const LoginForm = (props) => {

    return (
        <View>
            <Input
                placeholder="Enter you E-mail"
                label="E-mail:"
                containerStyle={formStyle.input}
            />
            <Input
                placeholder="Enter you Password"
                label="Password:"
                containerStyle={formStyle.input}
            />
            <Button
                title={props.buttonLabel}
                containerStyle={formStyle.button}
            />
        </View>
    );

}

export default LoginForm;