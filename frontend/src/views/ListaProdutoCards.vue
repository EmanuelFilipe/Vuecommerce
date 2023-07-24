<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="titulo">Cards de produtos</h1>
            </div>
        </div>
        <div class="row mt-3">
            <div v-for="produto in produtos" :key="produto.id">
                <Card>  
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
            
        },
    }
</script>

<style scoped>

</style>