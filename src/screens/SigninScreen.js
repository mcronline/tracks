import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

const SignupScreen = () =>{

    return(
        <View style={styles.container}>
            <Text style={{ marginVertical : 15, textAlign : 'center', fontSize : 36}}>Sign in for Tracks</Text>
            <LoginForm buttonLabel="Sign Up" />
            <Text style={{ textAlign : 'center' }}>Don't have a Account</Text>
            <Text style={{ textAlign : 'center' }}>SIGN UP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        margin : 20
    }
});

export default SignupScreen;