import Api from './index';

class Auth extends Api {
    constructor() {
        super('https://jsonplaceholder.typicode.com', true);
    }

    signin() {
        return this.get({ url: '/todos' });
    }
}

const auth = new Auth();

export default auth;
