import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoginForm from '../components/LoginForm';
import { Context as authContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
    
    const {state, signup} = useContext(authContext);
    
    return(
        <View style={styles.container}>
            <Text style={{ marginVertical : 15, textAlign : 'center', fontSize : 36}}>Sign Up for Tracks</Text>

            <LoginForm                 
                buttonLabel='Sign Up'
                buttonAction={(email, password) => signup({ email, password })}
            />

            <Text style={{ textAlign : 'center' }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={{ textAlign : 'center' }}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    );
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