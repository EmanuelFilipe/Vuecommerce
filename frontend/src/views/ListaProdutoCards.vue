<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="titulo">Cards de produtos</h1>
                <hr>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col d-flex justify-content-between">
                <button @click="verProdutosEmLista" class="btn ml-auto ver-card bi bi-card-list" title="Ver em Lista"></button>
            </div>
        </div>
        <div class="row mt-3">
            <div v-for="produto in produtos" :key="produto.id">
                <Card>                      
                    <template v-slot:foto>
                        <img :src="produto.foto" :alt="produto.name" width="100%"/>
                    </template>
                    <template v-slot:nome>
                        {{ produto.nome }}
                    </template>
                    <template v-slot:valor>
                         {{ produto.valor| real }}
                    </template>
                    <template v-slot:observacao>
                         {{ produto.observacao }}
                    </template>
                    <template v-slot:acoes>
                        <i @click="editarProduto(produto)" class="bi bi-pencil-fill icones-tabela" title="Editar"></i>
                        <i @click="excluirProduto(produto)" class="bi bi-trash3-fill icones-tabela" title="Excluir"></i>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/card/Card.vue'
import ProdutoMixin from "../mixins/produto-mixin";

    export default {
        name: 'ListaProdutoCards',
        mixins: [ProdutoMixin],
        components: {
            Card
        },
        data() {
            return {
                
            }
        },
        methods: {
            verProdutosEmLista() {
                this.$router.push({ name: 'ControleDeProdutos'})
            },
        },
    }
</script>

<style scoped>
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