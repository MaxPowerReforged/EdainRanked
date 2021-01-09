import endpoints from '@/static/endpoints';

export default class RankingService {
    constructor(axios){
        this.axios = axios
    }
    getAll() {
        return this.axios.get(endpoints.getRanking);
    }
}