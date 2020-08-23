import {root} from './config';

export const api = Object.freeze({
    starship: {
        fetch: () => {
            return fetch(`${root}/posts`, {
                method: "GET"
            })
        }
    }
})