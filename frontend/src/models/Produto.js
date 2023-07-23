import mascaraDeData from '../utils/conversor-data'

export default class Produto {
    constructor(obj) {
        // se for nulo, recebe um objeto vazio
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor || 0;
        this.quantidadeEstoque = obj.quantidadeEstoque || 0; 
        this.dataCadastro = obj.dataCadastro && mascaraDeData.aplicarMascaraFormatoAmericanoEmDataISO(obj.dataCadastro);
        this.observacao = obj.observacao;
    }

    modeloValidaParaCadastro(){
        console.log('modeloValidaParaCadastro')
        // nome obrigatório
        return !!this.nome;
    }

    modeloValidaParaAtualizar(){
        // nome obrigatório
        return !!(this.id && this.nome);
    }

}