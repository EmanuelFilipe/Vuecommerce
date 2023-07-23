<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="titulo">
          {{ modoCadastro ? "Adicionar" : "Editar" }} Produto
        </h1>
        <hr />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-2">
        <div class="form-group">
          <label for="id">Código</label>
          <input
            id="id"
            v-model="produto.id"
            type="text"
            class="form-control"
            disabled
          />
        </div>
      </div>
      <div class="col-md-10">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="produto.nome"
            type="text"
            class="form-control"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="form-group">
          <label for="valor">Valor</label>
          <input
            id="valor"
            v-model="produto.valor"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="quantidade">Quantidade</label>
          <input
            id="quantidade"
            v-model="produto.quantidadeEstoque"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="data-cadastro">Data Cadastro</label>
          <input
            id="data-cadastro"
            v-model="produto.dataCadastro"
            type="date"
            class="form-control"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="observacao">Observação</label>
          <textarea
            id="observacao"
            v-model="produto.observacao"
            type="text"
            class="form-control"
            rows="4"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <hr />
        <!-- {{ produto }} -->
      </div>
      <div class="col-md-12 mt-3">
        <!-- check {{ continuarAdicionando }} -->
        <div v-show="modoCadastro" class="form-check-inline">
          <label for="" class="form-check-label">
            <input
              v-model="continuarAdicionando"
              type="checkbox"
              class="form-check-input"
            />
            Continuar adicionando
          </label>
        </div>
        <button @click="cancelarAcao" class="btn btn-default float-right">
          Cancelar
        </button>
        <button @click="salvarProduto" class="btn btn-primary float-right mr-2">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import produtoService from "@/api/produto-service";
import Produto from "../models/Produto";
import ConversorDeData from '../utils/conversor-data'

export default {
  name: "ProdutoView",
  data() {
    return {
      produto: new Produto(),
      modoCadastro: true,
      continuarAdicionando: false,
    };
  },
  mounted() {
    //recebendo valor via parametro
    var id = this.$route.params.id;

    if (id > 0) {
      this.modoCadastro = false;
      this.obterProdutoPorId(id);
    }
  },
  methods: {
    obterProdutoPorId(id) {
      produtoService
        .obterPorId(id)
        .then((response) => {
          this.produto = new Produto(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelarAcao() {
      this.produto = new Produto();
      this.$router.push({ name: "ControleDeProdutos" });
    },

    cadastrarProduto() {
      if (!this.produto.modeloValidaParaCadastro()) {
        alert("O nome do produto é obrigatório para o cadastro.");
        return;
      }

      this.produto.dataCadastro = 
         ConversorDeData.aplicarMascaraISOEmFormatoAmericano(this.produto.dataCadastro);

      produtoService
        .cadastrar(this.produto)
        .then(() => {
          alert("Produto cadastrado com sucesso!");
          // limpa o produto após o cadastro
          this.produto = new Produto();

          if (!this.continuarAdicionando)
            this.$router.push({ name: "ControleDeProdutos" });
        })
        .catch((error) => {
          console.error(error);
        });
    },

    atualizarProduto() {
      if (!this.produto.modeloValidaParaAtualizar()) {
        alert("O código e nome do produto são obrigatórios.");
        return;
      }

      this.produto.dataCadastro = 
         ConversorDeData.aplicarMascaraISOEmFormatoAmericano(this.produto.dataCadastro);

      produtoService.atualizar(this.produto)
      .then(() => {
        alert("Produto atualizado com sucesso!");
        this.$router.push({ name: "ControleDeProdutos" });
      })
      .catch( error => {
        console.log(error);
      })
    },

    salvarProduto() {
      console.log("this.modoCadastro", this.modoCadastro);
      this.modoCadastro ? this.cadastrarProduto() : this.atualizarProduto();
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}

.btn-primary {
  background-color: var(--color-primary);
  border: var(--color-primary);
}
</style>
