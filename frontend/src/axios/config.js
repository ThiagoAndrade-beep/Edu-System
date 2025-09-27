import axios from 'axios'

const fetchApi = axios.create({
    baseURL: "https://edu-system-my2r.onrender.com/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default fetchApi
