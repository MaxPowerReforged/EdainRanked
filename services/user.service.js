import endpoints from '@/static/endpoints';
import axios from 'axios';

class UserService {
    getAll() {
        return axios.get(endpoints.getPlayers);
    }

    create(data) {
        return axios.post(endpoints.postUser, data);
    }
}

export default new UserService();