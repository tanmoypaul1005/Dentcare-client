import axios from "axios";
// const api = "http://localhost:8000/api"
const api="https://dentcare-server.herokuapp.com/api"
const token = window.localStorage.getItem('token');
const AxiosIntance = axios.create({
    baseURL: api,
    headers: { 'Authorization': token ? `Bearer ${token}` : '' }
});

export default AxiosIntance;