import {root} from './config';

export const api = Object.freeze({
    people: {
        fetch: () => {
            return fetch(`${root}/users`, {
                method: "GET",
            })
        }
    },
    person: {
        fetch: (id) => {
            return fetch(`${root}/users/${id}`, {
                method: "GET",
            })
        }
    },
})
