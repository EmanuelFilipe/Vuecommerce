<template>
  <div id="app">
    <MenuComponent v-if="this.$router.currentRoute.name != 'Login'" />
    <!-- <nav>
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/controle-de-produtos">Produtos</router-link> |
      <router-link to="/controle-de-clientes">Clientes</router-link> |
      <router-link to="/login">Login</router-link> |
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import MenuComponent from "@/components/menu/MenuComponent.vue";

export default {
  components: {
    MenuComponent: MenuComponent,
  },
  // mounted() {
  //   const script = document.createElement('script');
  //   script.src = `${process.env.BASE_URL}voltmx-sdk.js`;
  //   console.log(script.src);
  //   script.defer = true;
  //   document.head.appendChild(script);
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

:root {
  --color-primary: #1c223b;
  --color-secondary: #1d529c;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
}

hr { 
  margin: 0;
}
.container {
  margin-top: 15px;
}

.titulo {
  font-weight: 600;
  color: #363636;
  font-size: 25px;
}

.btn-primary,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:focus-visible,
.btn-primary:visited,
.btn-primary:not(:disable):not(.disable):active {
  color: white;
  background-color: var(--color-primary) !important;
  border: var(--color-primary) !important;
  outline: none;
  box-shadow: none;
}

.btn-primary:hover {
  color: white;
    background-color: var(--color-secondary) !important;
    border: var(--color-secondary) !important;
} 

.btn-light {
  border: 1px solid #6c757d;
  height: 36px;
}

</style>