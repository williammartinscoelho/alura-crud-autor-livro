import axios from 'axios';

const api = axios.create({
    baseURL: 'http://cdc-react.herokuapp.com/api'
    //baseURL: 'http://192.168.0.106:3004'
});

export default api;