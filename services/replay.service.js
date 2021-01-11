import endpoints from '@/static/endpoints';

export default class ReplayService {
    constructor(axios) {
        this.axios + axios;
    }
    getAll() {
        return this.axios.get(endpoints.getReplays);
    }

    create(data) {
        return this.axios.post(endpoints.postReplay, data);
    }
}