class Api {
    constructor(baseUrl = '', cleanReq = false) {
        this.URL = baseUrl;
        this.cleanReq = cleanReq;
    }

    get({ url, headers }) {
        return this.#configureRequest({ url, headers });
    }

    post({ url, body, headers }) {
        return this.#configureRequest({
            url,
            body,
            method: 'post',
            headers,
        });
    }

    #configureRequest = async ({
        url = '',
        method = 'get',
        body,
        headers = {},
    }) => {
        url = `${this.cleanReq ? this.URL : process.env.REACT_APP_URL}${url}`;

        const options = {
            method,
            headers: {
                'content-type': 'application/json',
                ...headers,
            },
        };

        if (body) {
            if (body instanceof FormData) {
                options.headers['content-type'] = 'multipart/form-data';
            }
            options.data = JSON.stringify(body);
        }

        return fetch(url, options).then((response) => {
            if (!response.ok) {
                throw new Error(response.status.toString());
            }
            return response.json();
        });
    };
}

export default Api;
