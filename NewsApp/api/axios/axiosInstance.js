import axios from "axios";

const axiosInstance = axios.create({
    headers: {
        contentType: 'application/json'
    }
})

export default axiosInstance;
