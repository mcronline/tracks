import { useEffect } from 'react';
import ErrorAlert from '../components/ErrorAlert';
import * as Permissions from 'expo-permissions';
import { watchPositionAsync, Accuracy } from 'expo-location';

export default (watchPosition, callback) => {

    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try{
                
                const response = await Permissions.askAsync(Permissions.LOCATION);
                if(response.status !== 'granted')
                    ErrorAlert('Location tracking was not allowed.');
                
                subscriber = await watchPositionAsync({
                    accuracy : Accuracy.BestForNavigation,
                    timeInterval : 1000,
                    distanceInterval : 10
                }, callback);
    
            } catch (err) {
                ErrorAlert(err.message, 'Location tracking problem');
            }
        }

        if(watchPosition){
            startWatching();

        }else{
            if(subscriber)
                subscriber.remove();

            subscriber = null;
        }

        return () => {
            if(subscriber)
                subscriber.remove();
        }
            
    }, [watchPosition, callback]);

}

