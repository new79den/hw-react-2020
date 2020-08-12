import {useState} from 'react';


export const useLocalStorage = (key) => {

    const [dataState, setDataState] = useState((() => {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    })())

    const setLocalStorageData = (value, useTimestamp) => {


        const data = useTimestamp === true
            ? {data: value, timestamp: new Date().getTime()}
            : value

        localStorage.setItem(key, JSON.stringify(data));
        setDataState(value);
    }

    return {localStorageData: dataState, setLocalStorageData}
}