import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { TrackingStateReason } from 'expo/build/AR';

const instance = axios.create({
    baseURL : ' http://f56370aa.ngrok.io'
});

instance.interceptors.request.use(
    (config) => {
        const token = await AsyncStorage.getItem('token');
        
        if(token)
            config.headers.Authorization = `Bearer ${token}`;

    },
    (err) => {
        return Promisse.reject(err);
    }
)

export default instance;