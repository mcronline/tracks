import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as authContext} from '../context/authContext';
import { SafeAreaView } from "react-navigation";

const AccountScreen = () =>{

    const { signout } = useContext(authContext);

    return(
        <SafeAreaView forceInset={{ top : 'always'}}>
            <View>
                <Text style={{fontSize : 48}}>AccountScreen</Text>
                <Button title="Sign Out" onPress={signout} />
            </View>
        </SafeAreaView>
    )
}

export default AccountScreen; 