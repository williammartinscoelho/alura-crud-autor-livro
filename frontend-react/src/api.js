import axios from 'axios';

const api = axios.create({
    baseURL: "//cdc-react.herokuapp.com/api"
    //baseURL: "//localhost:3004"
});

export default api;