import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoginForm from '../components/LoginForm';
import { Context as authContext } from "../context/authContext";

const SignupScreen = ({ navigation }) =>{

    const {state, signin} = useContext(authContext);

    return(
        <View style={styles.container}>
            <Text style={{ marginVertical : 15, textAlign : 'center', fontSize : 36}}>Sign in for Tracks</Text>

            <LoginForm 
                buttonLabel="Sign in"
                buttonAction={(email, password) => signin({ email, password })}
             />

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