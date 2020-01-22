import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import ErrorAlert from '../components/ErrorAlert';

const locationReducer = (state, action) => {

    switch(action.type){

        case 'setCurrentLocation':
            return {
                ...state,
                currentLocation : action.payload
            }

        case 'recordLocation':
            return {
                ...state,
                locations : [
                    ...state.locations,
                    action.payload
                ]
            }

        case 'startRecording':
            return {...state, recording : true};

        case 'stopRecording':
            return {...state, recording : false};

        default:
            return state;
    }

}

const actions = {

    setCurrentLocation : dispatch => (coords) => {

        if(coords){
            dispatch({
                type : 'setCurrentLocation',
                payload : coords
            });

        }else{
            console.log(`Invalid coordinates for current location. Lat - ${coords.latitude} / Lon - ${coords.longitude}`);

        }
    },

    recordLocation : dispatch => async (coords) => {

        if(coords){
            dispatch({
                type : 'addLocation',
                payload : coords
            });

        }else{
            console.log(`Invalid coordinates to update track. Lat - ${coords.latitude} / Lon - ${coords.longitude}`);

        }
    },

    startRecording : dispatch => () => {
        dispatch({
            type : 'startRecording'
        });
    },

    stopRecording : dispatch => () => {
        dispatch({
            type : 'stopRecording'
        });
    }
}

const defaultState = {
    recording : false,
    currentLocation : null,
    locations : []
}

export const {Context, Provider} = createDataContext(
    locationReducer, 
    actions, 
    defaultState
);



