<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-2">
        <Button :callBack="adicionarProduto" value="Adicionar" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Data de Cadastro</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in produtos" :key="item.id">
              <td>{{item.id }}</td>
              <td>{{item.nome }}</td>
              <td>{{item.quantidadeEstoque }}</td>
              <td>{{item.valor | real }}</td>
              <td>{{ item.dataCadastro | data }}</td>
              <td>
                <i @click="editarProduto(item)" class="bi bi-pencil-fill icones-tabela"></i>
                <i @click="excluirProduto(item)" class="bi bi-trash3-fill icones-tabela"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<script>
import Button from "@/components/button/Button.vue";
import produtoService from '../api/produto-service.js';
import produtoModel from '../models/Produto.js';
import conversorDeData from '../utils/conversor-data.js';
import conversorMonetario from '../utils/conversor-monetario.js';

export default {
  name: "ControleDeProdutos",
  components: { Button },
  filters: {
    data(data) {
      return conversorDeData.aplicarMascaraDataHoraEmDataIso(data)
    },
    real(valor){
      return conversorMonetario.aplicarMascaraParaRealComPrefixo(valor);
    }
  },
  data() {
    return {
      produtos: []
    };
  },
  methods: {
    obterTodosOsProdutos() {
      produtoService.obterTodos()
        .then(response => {
          // para cada item irá criar uma nova estância de produtoModel
          this.produtos = response.data.map(p => new produtoModel(p));
        })
        .catch(error =>{
          console.log(error);
        })
    },

    adicionarProduto() {
      // name é o que esta na propriedade 'name' do routes.js
      this.$router.push({ name: 'NovoProduto'});
    },
    
    editarProduto(produto) {
      // params recebe um objeto para poder receber parametros pela rota
      this.$router.push({ name: 'EditarProduto', params: { id: produto.id } });
      alert('editar produto: ' + produto.nome);
    },

    excluirProduto(produto) {
      alert('excluir produto');
    },
  },
  created() {
    this.obterTodosOsProdutos()
  }
};
</script>

<style scoped>
h1 {
  color: red;
}

.icones-tabela {
  margin: 5px;
  cursor: pointer;
  color: var(--color-primary);
}
</style>
