import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import ErrorAlert from '../components/ErrorAlert';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){

        case 'signin':
            return {...state, token : action.payload.token}; // Same state update for signin and signup

        default:
            return state;
    }
}

const actions = {
    'signin' : dispatch => async ({ email, password }) => {
        try{
            console.log(email, password);
            const response = await trackerApi.get('/signin', {email, password});
            const token = response.data.token;
            
            dispatch({
                type : "signin",
                payload : {
                    token
                }
            });

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

            navigate('mainFlow');

        }catch(err){
            ErrorAlert(err.response.data.error, 'Problem to Sign Up');
        }
    
    },
    'signout' : dispatch => () => {
        dispatch({
            type : "signout",
            payload : {
                token : null
            }
        });
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    actions,
    {token : null}
);