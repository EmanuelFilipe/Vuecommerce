<template>
  <div class="about">
    <h1>{{mensagem}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ControleDeClientes',
  data() {
    return {
      mensagem: 'Estou na tela Controle de Clientes'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>