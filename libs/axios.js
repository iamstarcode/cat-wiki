import Axios from 'axios'

export const axios  =  Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export const  csrf = async () => await axios.get('/sanctum/csrf-cookie')

