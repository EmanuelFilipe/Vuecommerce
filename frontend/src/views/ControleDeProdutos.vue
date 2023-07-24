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
                <i @click="editarProduto(item)" class="bi bi-pencil-fill icones-tabela" title="Editar"></i>
                <i @click="excluirProduto(item)" class="bi bi-trash3-fill icones-tabela" title="Excluir"></i>
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
      return conversorDeData.aplicarMascaraEmDataIso(data)
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
    ordenarProdutos(a, b){
      // A < B = -1
      // A > B = 1
      // A == B = 0

      return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
    },

    obterTodosOsProdutos() {
      produtoService.obterTodos()
        .then(response => {
          // para cada item irá criar uma nova estância de produtoModel
          let produtos = response.data.map(p => new produtoModel(p));
          this.produtos = produtos.sort(this.ordenarProdutos).reverse();
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
    },

    excluirProduto(produto) {

      this.$swal({
        icon: "question",
        title: "Deseja excluir o produto",
        text: `Código: ${produto.id} - Nome: ${produto.nome}`,
        showCancelButton: true,
        confirmButtonColor: "#1c223b",
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        animate: true
      }).then((result) => {
        if (result.isConfirmed) {

          produtoService.deletar(produto.id)
          .then(() => {
            // apagando o registro da lista de produtos
            let indice = this.produtos.findIndex(p => p.id == produto.id);
            this.produtos.splice(indice, 1);

            //setTimeout(() => {
              this.$swal({
                icon: "success",
                title: "Produto excluído com sucesso!",
                animate: true,
                showConfirmButton: false,
                timer: 1500,
              });
            //}, 500);
          })
          .catch(error => {
            console.error(error);
          })
        }
      })
    },
  },
  created() {
    this.obterTodosOsProdutos();
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
