import api from './api'

function login(email, senha) {
    return new Promise((resolve, reject) => {
        return api.post(`/login`, {email, senha})
        .then(response => resolve(response)) // devolve pra quem ta chamando
        .catch(error => reject(error));
    })
}

function logout() {
    return new Promise((resolve, reject) => {
        return api.delete(`/logout`)
        .then(response => resolve(response)) // devolve pra quem ta chamando
        .catch(error => reject(error));
    })
}

function obterTodosUsuarios() {
    return new Promise((resolve, reject) => {
        return api.get(`/usuarios`)
        .then(response => resolve(response)) // devolve pra quem ta chamando
        .catch(error => reject(error));
    })
}

function obterUsuarioPorId(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/usuarios/${id}`)
        .then(response => resolve(response)) // devolve pra quem ta chamando
        .catch(error => reject(error));
    })
}

export default {
    login,
    logout,
    obterTodosUsuarios,
    obterUsuarioPorId
}