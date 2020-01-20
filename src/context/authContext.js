import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import ErrorAlert from '../components/ErrorAlert';
import { navigate } from '../navigationRef';
import { AsyncStorage } from 'react-native';

const authReducer = (state, action) => {
    switch(action.type){

        case 'signin':
            return {...state, token : action.payload.token}; // Same state update for signin and signup

        case 'signout':
            return {...state, token : null};

        default:
            return state;
    }
}

const actions = {
    'checkLocalToken' : dispatch => async () => {

        const token = await AsyncStorage.getItem('token');
        
        if(token){
            dispatch({
                type : 'signin',
                payload : {
                    token
                }
            });

            navigate('mainFlow');

        }else{
            navigate('loginFlow');

        }

    },

    'signin' : dispatch => async ({ email, password }) => {
        
        try{
            
            const response = await trackerApi.post('/signin', {email, password});
            const token = response.data.token;
                        
            dispatch({
                type : "signin",
                payload : {
                    token
                }
            });

            await AsyncStorage.setItem('token',token);

            navigate('mainFlow');

        }catch(err){
            ErrorAlert(err.response.data.error, "Problem to Sign In");
        }
    },

    'signup' : dispatch => async ({ email, password }) => {
        
        try{
            const response = await trackerApi.post('/signup', {email, password});
            const token = response.data.token;
            
            dispatch({
                type : "signin",
                payload : {
                    token
                }
            });

            await AsyncStorage.setItem('token',token);

            navigate('mainFlow');

        }catch(err){
            ErrorAlert(err.response.data.error, 'Problem to Sign Up');
        }
    
    },

    'signout' : dispatch => async () => {
        dispatch({
            type : "signout"
        });
        
        AsyncStorage.removeItem('token');

        navigate('loginFlow');
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    actions,
    {token : null}
);