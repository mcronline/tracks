import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input} from 'react-native-elements';

import { formStyle } from '../styles/forms';

const LoginForm = ({buttonLabel, buttonAction}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Input
                placeholder="Enter you E-mail"
                label="E-mail:"
                containerStyle={formStyle.input}
                value={email}
                onChangeText={setEmail}
            />
            <Input
                secureTextEntry
                placeholder="Enter you Password"
                label="Password:"
                containerStyle={formStyle.input}
                value={password}
                onChangeText={setPassword}
            />
            <Button
                title={buttonLabel}
                containerStyle={formStyle.button}
                onPress={() => buttonAction(email, password)}
            />
        </View>
    );

}

export default LoginForm;