import endpoints from '@/static/endpoints';

export default class StatisticsService {
    constructor(axios) {
        this.axios = axios;
    }
    getAll() {
        return this.axios.get(endpoints.getStatistics);
    }

    getFactionAll() {
        return this.axios.get(endpoints.getStatisticsFactions);
    }
}