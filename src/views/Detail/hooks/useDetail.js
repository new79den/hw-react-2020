import {useState, useEffect} from 'react';
import {api} from '../../../api/index';

const initialState = {
    isLoaded: false,
    isError: false
}

export const useDetail = (id) => {
    const [detail, setDetail] = useState(initialState);

    useEffect(() => {
        (async function () {
            try {
                const post = await api.getPostById(id);
                setDetail({...initialState, ...{isLoaded: true}, ...post});
            } catch (e) {
                setDetail({...initialState, ...{isLoaded: true}, ...e});
            }
        })();
    }, []);

    return {detail}
}