import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const initialLatitude = 37.33233;
const initialLongitude = -122.03121;

let counter = 1;

const emitLocation = () => {
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId : Location._getCurrentWatchId(),
        location : getLocation(counter)
    });
    counter++;
}

const getLocation = increment => {
    return {
        timestamp : 10000000,
        coords : {
            speed : 0,
            heading : 0,
            accuracy : 5,
            altitudeAcuracy : 5,
            altitude : 5,
            longitude : initialLongitude + increment * tenMetersWithDegrees,
            latitude : initialLatitude + increment * tenMetersWithDegrees,
        }
    }
}

emitLocation();
setInterval(emitLocation, 500);