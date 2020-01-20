import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as authContext} from '../context/authContext';

const AccountScreen = () =>{

    const { signout } = useContext(authContext);

    return(
        <View>
            <Text style={{fontSize : 48}}>AccountScreen</Text>
            <Button title="Sign Out" onPress={signout} />
        </View>
    )
}

export default AccountScreen; 