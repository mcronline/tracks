import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

const SignupScreen = () =>{

    return(
        <View style={styles.container}>
            <Text style={{ marginVertical : 15, textAlign : 'center', fontSize : 36}}>Sign Up for Tracks</Text>
            <LoginForm buttonLabel="Sign Up" />
            <Text style={{ textAlign : 'center' }}>Already have an account?</Text>
            <Text style={{ textAlign : 'center' }}>SIGN IN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        margin : 20
    }
});

export default SignupScreen;