import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import ErrorAlert from '../components/ErrorAlert';

const tracksReducer = (state, action) => {
    
    switch(action.type){

        case 'setTrack':
            return [
                ...state,
                action.payload
            ];

        default:
            return state

    }
}

const actions = {

    setTrack : dispatch => async (name, locations) => {

        const response = await trackerAPI.post('/tracks', {name, locations});

    }

};

const initialValue = [];

export const {Context, Provider} = createDataContext(
    tracksReducer,
    actions,
    initialValue
);