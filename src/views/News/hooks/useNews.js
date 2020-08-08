import {useEffect, useState} from 'react';
import {useLocalStorage} from '../../../assets/hooks/useLocalStorage';
import {api} from '../../../api';


const isValidLocalStorageTime = (time) => {
    const different = Math.abs(new Date().getTime() - time);
    return different < 600000;
}

const initialState = {
    isLoaded: false,
    isError: false,
    errorMessage: '',
    data: [],
}

export const useNews = () => {
    const [posts, setPosts] = useState(initialState);
    const {localStorageData, setLocalStorageData} = useLocalStorage('news')

    useEffect(() => {
        (async function () {
            try {
                if (localStorageData
                    && 'timestamp' in localStorageData
                    && 'data' in localStorageData
                    && isValidLocalStorageTime(localStorageData.timestamp)
                ) {
                    setPosts({
                        ...initialState,
                        ...{isLoaded: true},
                        ...{data: localStorageData.data}
                    });
                } else {
                    const posts = await api.getPost();
                    setLocalStorageData(posts)

                    setPosts({
                        ...initialState,
                        ...{isLoaded: true},
                        ...{data: posts}
                    });
                }
            } catch (e) {
                setPosts({
                    ...initialState,
                    ...{isLoaded: true},
                    ...e
                });
            }
        })()
    }, []);

    return {posts};
}