import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://codearena-1-0r7a.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

