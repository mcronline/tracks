import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import ErrorAlert from '../components/ErrorAlert';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    console.log(action);
    switch(action.type){

        case 'signup':
            return {...state, token : action.payload.token};

        default:
            return state;
    }
}

const actions = {
    'signin' : dispatch => async ({ email, password }) => {
        try{
            const response = await trackerApi.get('/signin',{email,password});
            const token = response.data.token;
            dispatch({
                type : "signin",
                payload : {
                    token
                }
            });
        }catch(err){
            ErrorAlert(err.response.data.messsage, "Problem to Sign In");
        }
    },
    'signup' : dispatch => async ({ email, password }) => {
        
        try{
            const response = await trackerApi.post('/signup',{email,password});
            const token = response.data.token;
            dispatch({
                type : "signup",
                payload : {
                    token
                }
            });

            navigate('mainFlow');
        }catch(err){
            ErrorAlert(err.response.data.message, 'Problem to Sign Up');
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