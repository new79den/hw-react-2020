import {useEffect, useState} from 'react';
import {api} from '../../../api'

export const useNews = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const posts = await api.getPost();
            setPosts(posts);
        })()
    }, []);

    return {posts};
}