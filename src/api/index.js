import news from '../source.json';

const url = 'https://api.backendless.com/520C1D14-9413-E1AA-FF78-6A4DB0E26E00/9C9A66AC- 959A-D6F4-FFAB-BD991AA34A00';


export const api = {

    async getPost() {
        //const response = await fetch(`${url}/data/news`);
        //return await response.json();

        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(news);
            }, 1000);
        })

        return response;

    },

    async getPostById(id) {
        const response = await new Promise(((resolve, reject) => {
            setTimeout(() => {
                let post = false;

                for (const prop of news) {
                    if (prop.objectId === id) {
                        post = prop;
                    }
                }
                if (post !== false) {
                    resolve(post);
                } else {
                    reject({isError: true})
                }

            }, 1000)
        }))
        return response;
    }
}