import { useState, useEffect } from 'react';
import { Context as LocationContext } from '../context/locationContext';
import ErrorAlert from '../components/ErrorAlert';
import * as Permissions from 'expo-permissions';
import { watchPositionAsync, Accuracy } from 'expo-location';

export default (watchPosition, callback) => {

    const [subscriber, setSubscriber] = useState(null);
    
    const startWatching = async () => {
        try{
            
            const response = await Permissions.askAsync(Permissions.LOCATION);
            if(response.status !== 'granted')
                ErrorAlert('Location tracking was not allowed.');
            
            setSubscriber(await watchPositionAsync({
                accuracy : Accuracy.BestForNavigation,
                timeInterval : 1000,
                distanceInterval : 10
            }, callback));

        } catch (err) {
            ErrorAlert(err.message, 'Location tracking problem');
        }
    }

    useEffect(() => {
        console.log("=>" + watchPosition);
        if(watchPosition)
            startWatching();
        else
            subscriber.remove();
            setSubscriber(null);
    }, [watchPosition]);
}

