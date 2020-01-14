import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import ErrorAlert from '../components/ErrorAlert';

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
            ErrorAlert(err.response.data, "Problem to Sign In");
        }
    },
    'signup' : dispatch => async ({ email, password }) => {
        try{
            const response = await trackerApi.post('/signup',{email,password});
            console.log(response.data)                ;
            const token = response.data.token;
            //console.log(token);
            dispatch({
                type : "signup",
                payload : {
                    token
                }
            });
        }catch(err){
            console.log(err.response.data);
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
    {isSignedIn : false}
);