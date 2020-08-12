import {useEffect, useState} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useLogin = () => {
    const [isLoginStage, setLoginStage] = useState(false);
    const {localStorageData, setLocalStorageData} = useLocalStorage('login');

    useEffect(() => {
        if (localStorageData === true) {
            setLoginStage(true);
        } else {
            setLoginStage(false);
        }
    }, [])

    const setLogin = (isLogin) => {
        setLoginStage(isLogin);
        setLocalStorageData(isLogin);
    }

    return {isLoginStage, setLogin}
}
