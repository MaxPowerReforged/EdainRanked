export default function ({ $axios }, inject) {

    const http = $axios.create();
    inject('http', http);

}