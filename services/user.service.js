import endpoints from '@/static/endpoints';

export default class UserService {
    constructor(axios) {
        this.axios = axios;
    }
    getAll() {
        return this.axios.get(endpoints.getPlayers);
    }

    create(data) {
        return this.axios.post(endpoints.postUser, data);
    }
}