import createDataContext from './createDataContext';

const locationReducer = (state, action) => {

    switch(action.type){

        case 'setCurrentLocation':
            return {
                ...state,
                currentLocation : action.payload
            }

        case 'setRecordName':
            return {
                ...state,
                recordName : action.payload
            }
            

        case 'recordLocation':
            if(state.recording){
                return {
                    ...state,
                    locations : [
                        ...state.locations,
                        action.payload
                    ]
                }
            }else{
                return {
                    ...state
                }                
            }

        case 'startRecording':
            return {...state, recording : true};

        case 'stopRecording':
            return {
                ...state,
                recording : false,
                locations : []
            };

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

    setRecordName : dispatch => async (name) => {
        dispatch({
            type : 'setRecordName',
            payload : name
        })
    },

    recordLocation : dispatch => async (coords) => {
        if(coords){
            dispatch({
                type : 'recordLocation',
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
    recordName : "",
    locations : []
}

export const {Context, Provider} = createDataContext(
    locationReducer, 
    actions, 
    defaultState
);



