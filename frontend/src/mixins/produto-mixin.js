import produtoService from "../api/produto-service.js";
import produtoModel from "../models/Produto.js";
import conversorDeData from "../utils/conversor-data.js";
import conversorMonetario from "../utils/conversor-monetario.js";

let produtoMixin = {
  filters: {
    data(data) {
      return conversorDeData.aplicarMascaraEmDataIso(data);
    },
    real(valor) {
      return conversorMonetario.aplicarMascaraParaRealComPrefixo(valor);
    },
  },
  data() {
    return {
      produtos: [],
    };
  },
  mounted() {
    this.obterTodosOsProdutos();
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
};

export default produtoMixin;
