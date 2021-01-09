import endpoints from '@/static/endpoints';
import axios from 'axios';

class ReplayService {
    getAll() {
        return axios.get(endpoints.getReplays);
    }

    create(data) {
        return axios.post(endpoints.postReplay, data);
    }
}

export default new ReplayService();