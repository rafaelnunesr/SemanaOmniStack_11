import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333' // padrao de todas as paginas
})

export default api