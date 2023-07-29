import UsuarioModel from '../models/Usuario'

function SalvarUsuarioNaStorage(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario))
}

function ObterUsuarioNaStorage() {
    let usuario = localStorage.getItem('usuario');
    return new UsuarioModel(JSON.parse(usuario));
}

function RemoverUsuarioNaStorage(usuario) {
    localStorage.removeItem('usuario', usuario);
}

function SalvarTokenNaStorage(token) {
    localStorage.setItem('token', token)
}

function ObterTokenNaStorage() {
    return localStorage.getItem('token');
}

function RemoverTokenNaStorage(token) {
    localStorage.removeItem('token', token);
}

export default {
    SalvarUsuarioNaStorage,
    ObterUsuarioNaStorage,
    RemoverUsuarioNaStorage,
    SalvarTokenNaStorage,
    ObterTokenNaStorage,
    RemoverTokenNaStorage
}