import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import LocalTokenCheck from './src/screens/LocalSigninScreen';

import { Provider as AuthProvider } from './src/context/authContext';

import { setNavigation } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
    LocalTokenCheck,
    loginFlow : createStackNavigator({
        Signin : SigninScreen,
        Signup : SignupScreen        
    }),
    mainFlow : createBottomTabNavigator({
        trackListFlow : createStackNavigator ({
            TrackList : TrackListScreen,
            TrackDetail : TrackDetailScreen
        }),
        TrackCreate : TrackCreateScreen,
        Account : AccountScreen
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={ (navigator) => { setNavigation(navigator) }} />
        </AuthProvider>
    );
};