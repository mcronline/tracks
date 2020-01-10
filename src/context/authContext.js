import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {

    switch(action.type){
        default:
            return state;
    }
}

const actions = {
    'signin' : dispatch => {
        return async ({ email, password}) => {
            try{
                const response = await trackerApi.get('/signin',{email,password});
                const token = response.data.token;
                dispatch({
                    type : 'signin',
                    payload : {
                        token
                    }
                });
            }catch(err){
                
            }
        }
    },
    'signup' : dispatch => {
        return ({ email, password}) => {
            dispatch({
                type : 'signup',
                payload : {
                    email,
                    password
                }
            });
        }
    },
    'signout' : dispatch => {
        return () => {
            dispatch({
                type : 'signout'
            });
        }
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    actions,
    {isSignedIn : false}
);