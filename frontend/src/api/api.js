import axios from 'axios';
import UtilsStorage from '../utils/storage'

const api = axios.create({
    baseURL: 'http://localhost:3400'
});

// obtém um token armazenado no login e passa para o headers.Authorization de alguem que solicitar um requisição
// intercepta uma requisicao
api.interceptors.request.use((config) => {
    let token = UtilsStorage.ObterTokenNaStorage();

    // 'config' é toda a configuração do axios
    config.headers.Authorization = token;

    return config;
});

export default api;
