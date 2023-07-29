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
      <div class="col d-flex justify-content-between">
        <button  @click="verProdutosEmCards" class="btn ml-auto ver-card bi bi-images" title="Ver em Cards" ></button>
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
import ProdutoMixin from "../mixins/produto-mixin";

export default {
  name: "ControleDeProdutos",
  mixins: [ProdutoMixin],
  components: { Button },
  data() {
    return {
    };
  },
  methods: {

    verProdutosEmCards() {
      this.$router.push({ name: 'ListaProdutoCards'})
    },

    ordenarProdutos(a, b){
      // A < B = -1
      // A > B = 1
      // A == B = 0

      return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
    },


    adicionarProduto() {
      // name é o que esta na propriedade 'name' do routes.js
      this.$router.push({ name: 'NovoProduto'});
    },
    
    
  },
};
</script>

<style scoped>
h1 {
  color: red;
}

.icones-tabela,
.ver-em-cards {
  margin: 5px;
  cursor: pointer;
  color: var(--color-primary);
}

.ver-em-cards {
  margin-top: 25px;
}

.ver-card {
    background-color: var(--color-primary);
    color: white;
    width: 160px;
    height: 40px;
    margin-top: 8px;
    font-size: 20px;
}
.ver-card:hover {
    background-color: var(--color-secondary);
}

</style>
