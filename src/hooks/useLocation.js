import React, { useContext } from 'react';
import { Context as LocationContext } from '../context/locationContext';

export default (defaultValue) => {

    const {state, setCurrentLocation } = useContext(LocationContext);

    const location = state.currentLocation;
    const setLocation = (coords) => setCurrentLocation(coords);

    return {
        location,
        setLocation
    }

}
