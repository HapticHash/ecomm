import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecomm-7c2ae/us-central1/api'
})

export default instance