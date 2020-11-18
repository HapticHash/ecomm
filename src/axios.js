import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-ecomm-7c2ae.cloudfunctions.net/api' 
    //'http://localhost:5001/ecomm-7c2ae/us-central1/api'
})

export default instance