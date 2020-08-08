import {useState} from 'react';


export const useLocalStorage = (key) => {

    const [dataState, setDataState] = useState((() => {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    })())

    const setLocalStorageData = (value) => {
        const data = {data: value, timestamp: new Date().getTime()}
        localStorage.setItem(key, JSON.stringify(data));
        setDataState(value);
    }

    return {localStorageData: dataState, setLocalStorageData}
}