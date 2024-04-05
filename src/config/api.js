import axios from 'axios';

export const APIR_URL = "http://localhost:8080"

export const api=axios.create({
    baseURL:APIR_URL,
    headers:{
        'Content-Type':'application/json'
    }
})