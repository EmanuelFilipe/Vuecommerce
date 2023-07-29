<template>
    <div>
        <ul class="menu">
            <li>
                <a @click="() => this.$router.push({ path: '/'})">Dashboard</a>
            </li>
            <li>
                <a @click="() => this.$router.push({ path: '/controle-de-produtos'})">Produtos</a>
            </li>
            <li>
                <a @click="() => this.$router.push({ path: '/controle-de-clientes'})">Clientes</a>
            </li>
            <li>
                <a @click="logout">Sair</a>
            </li>
            <!-- <li v-for="item in menuItems" :key="item.id" :class="{ active: item.active }">
                <a @click="selectMenuItem(item)">{{ item.title }}</a>
            </li> -->
        </ul>
    </div>
</template>

<script>
import usuarioService from '../../api/usuario-service';
import UtilsStorage from '../../utils/storage';

    export default {
        name: 'MenuComponent',
        data() {
            return {
            // menuItems: [
            //     { id: 1, title: 'Item 1', active: false },
            //     { id: 2, title: 'Item 2', active: false },
            //     { id: 3, title: 'Item 3', active: false },
            // ],
            };
        },
        methods: {
            logout(){
                usuarioService.logout()
                .then(() => {
                    UtilsStorage.RemoverUsuarioNaStorage();
                    UtilsStorage.RemoverTokenNaStorage();
                    this.$router.push({ path: '/login'})
                })
                .catch(error => {
                    this.$swal({
                        icon: "error",
                        title: error.message,
                        animate: true,
                        showConfirmButton: true,
                        confirmButtonColor: "#1c223b",
                    });
                })
            }
        },
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: var(--color-primary);
    }

    li {
        float: left;
    }

    li:first-child {
        margin-left: 40px;
    }

    li:last-child {
        float: right;
        margin-right: 10px;
    }

    ul.menu li a {
        display: block;
        color: white;
        padding: 15px 17px;
        text-decoration: none;
        text-align: center;
    }

    ul.menu li a:hover {
        background-color: var(--color-secondary);
        color: white;
        cursor: pointer;
    }

    li a:active {
        background-color: var(--color-secondary);
    }
/* .sidebar {
  width: 200px;
  height: 100vh;
  background-color: #f1f1f1;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #333;
}

li.active a {
  font-weight: bold;
} */
</style>