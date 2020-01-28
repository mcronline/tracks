import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import ErrorAlert from '../components/ErrorAlert';

const tracksReducer = (state, action) => {
    
    switch(action.type){

        case 'addTrack':
            return [
                ...state,
                action.payload
            ];

        case 'removeTrack':
            return state.filter(track => track._id !== action.payload);

        case 'fetchTracks':
            return action.payload;

        case 'getTrack':
            return state.map(track => {
                if(track._id === action.payload._id)
                    return action.payload;

                else
                    return track;

            });

        default:
            return state

    }
}

const actions = {

    addTrack : dispatch => async (name, locations) => {
        
        try{
            const response = await trackerAPI.post('/tracks', {name, locations});
            
            dispatch({
                type : 'addTrack',
                payload : {
                    name,
                    locations
                }
            });

        }catch(err){
            ErrorAlert(err.response.data.error, "Could't add track");
        }
        
    },

    removeTrack : dispatch => async(id) => {

        try{
            const response = await trackerAPI.delete(`/tracks/${id}`);
            
            dispatch({
                type : 'removeTrack',
                payload : id
            });
            
        }catch(err){
            let errorMessage = "";

            if(err.message)
                errorMessage = err.message;

            else
                errorMessage = err.response.data.error;

            ErrorAlert(errorMessage, "Couldn't remove track");
        }
    },

    fetchTracks : dispatch => async() => {
        
        try{
            const response = await trackerAPI.get(`/tracks`);
            
            //console.log(response.data);
            dispatch({
                type : 'fetchTracks',
                payload : response.data
            });
            
        }catch(err){
            ErrorAlert(err.response.data.error, "There was a problem");
        }
    },

    getTrack : dispatch => async (id) => {

        try{
            const response = await trackerAPI.get(`/tracks/${id}`);
            dispatch({
                type : 'getTrack',
                payload : response.data
            });

        }catch(err){
            ErrorAlert(err.response.data.error, "There was a problem");
        }
    }

};

const initialValue = [];

export const {Context, Provider} = createDataContext(
    tracksReducer,
    actions,
    initialValue
);