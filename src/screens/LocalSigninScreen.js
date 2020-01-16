import React, { useContext, useEffect } from 'react';
import { Context as authContext } from '../context/authContext';

const LocalSigninScreen = () => {
    const { checkLocalToken } = useContext(authContext);
    
    useEffect(() => {
        checkLocalToken();
    },[])

    return null;
}

export default LocalSigninScreen;