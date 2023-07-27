import Perfil from "./Perfil"

export default class Usuario {
    constructor(obj){
        obj = obj || {}
        this.id = obj.id;
        this.nome = obj.nome;
        this.senha = obj.senha;
        this.foto = obj.foto;
        this.pefil = new Perfil(obj.pefil);
        this.dataCadastro = obj.dataCadastro;
    }

    modeloValidoLogin() {
        return !!(this.email && this.senha)
    }
}