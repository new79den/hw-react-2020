import {useState, useEffect} from 'react';
import {useLocalStorage} from '../../../assets/hooks/useLocalStorage';
import {isValidLocalStorageTime} from '../../../assets/common';
import {api} from '../../../api/index';

const initialState = {
    isLoaded: false,
    isError: false,
    data: {}
}

export const useDetail = (id) => {
    const [detail, setDetail] = useState(initialState);
    const {localStorageData, setLocalStorageData} = useLocalStorage(`detail_${id}`);

    useEffect(() => {
        (async function () {
            try {
                if (localStorageData
                    && 'timestamp' in localStorageData
                    && 'data' in localStorageData
                    && isValidLocalStorageTime(localStorageData.timestamp)
                ) {
                    setDetail({
                        ...initialState,
                        ...{isLoaded: true},
                        ...localStorageData});
                } else {
                    const post = await api.getPostById(id);
                    setDetail({
                        ...initialState,
                        ...{isLoaded: true},
                        ...{data:post}
                    });
                    setLocalStorageData(post, true);
                }

            } catch (e) {
                setDetail({
                    ...initialState,
                    ...{isLoaded: true},
                    ...e
                });
            }
        })();
    }, []);

    return {detail}
}