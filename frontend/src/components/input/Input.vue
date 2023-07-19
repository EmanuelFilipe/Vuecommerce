<template>
    <div>
        <label for="">{{label}}</label><br>
        <!-- v:bind -> reconhecendo um objeto, não precisando do {{ }} -->
        <input v-bind:type="type" :placeholder="placeHolder">
    </div>
</template>

<script>
    export default {
        name: 'InputComponent',
        props: {
            // obrigado a passar uma label
            label: { type: String, require },
            // é possível passar o valor do default, que por padrão, é vazio
            placeHolder: { type: String, default: ''},
            type: { type: String, default: 'text' }
        },
        data() {
            return {

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