import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoginForm from '../components/LoginForm';

const SignupScreen = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <Text style={{ marginVertical : 15, textAlign : 'center', fontSize : 36}}>Sign in for Tracks</Text>
            <LoginForm buttonLabel="Sign Up" />
            <Text style={{ textAlign : 'center' }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{ textAlign : 'center' }}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    )
}

SignupScreen.navigationOptions = {
    header : null
};

const styles = StyleSheet.create({
    container : {
        margin : 20,
        flex : 1,
        justifyContent : 'center',
        marginBottom : 80
    }
});

export default SignupScreen;