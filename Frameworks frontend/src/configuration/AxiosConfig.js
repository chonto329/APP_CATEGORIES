import axios from "axios";

export const configuration = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL_CATEGORIAS || 'http://localhost:3000/api/v1/categorias/'
})


