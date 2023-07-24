<template>
    <div>
        <label for="">{{label}}</label><br>
        <!-- v:bind -> reconhecendo um objeto, não precisando do {{ }} -->
        <input v-bind:type="type" :placeholder="placeHolder" v-model="valor">
    </div>
</template>

<script>
    export default {
        name: 'InputComponent',
        model: {
            prop: "value",
            event: "onChange"
        },
        // Nunca pode-se alterar o valor de uma prop, ela é imutável
        props: {
            // obrigado a passar uma label
            label: { type: String, require },
            // é possível passar o valor do default, que por padrão, é vazio
            placeHolder: { type: String, default: ''},
            type: { type: String, default: 'text' },
            value: { type: String, default: '' },
        },
        data() {
            return {
                valor: this.value
            }
        },
        // observando uma propriedade, quando for alterado ira disparar o metodo
        watch: {
            // o nome deve ser o da propriedade desejada
            valor() {
                // irá disparar um evento com este valor
                this.$emit('onChange', this.valor)
            }
        }
    }
</script>

<style scoped>
    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0px;
        display: inline-block;
        outline: none;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>