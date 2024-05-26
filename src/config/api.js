import axios from 'axios';

export const APIR_URL = "https://directorioemprendimiento-production.up.railway.app/"

export const api=axios.create({
    baseURL:APIR_URL,
    headers:{
        'Content-Type':'application/json'
    }
})