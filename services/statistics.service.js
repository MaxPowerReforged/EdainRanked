import endpoints from '@/static/endpoints';
import axios from 'axios';

class StatisticsService {
    getAll() {
        return axios.get(endpoints.getStatistics);
    }

    getFactionAll() {
        return axios.get(endpoints.getStatisticsFactions);
    }
}

export default new StatisticsService();