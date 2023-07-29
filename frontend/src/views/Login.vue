<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>
        <div>
            <Input 
                label="E-mail" 
                placeHolder="exemplo@gmail.com"
                v-model="usuario.email"
            />
            <Input 
                label="Senha" 
                placeHolder="123456"
                type="password"
                v-model="usuario.senha"
            />

            <Button 
                value="Entrar" 
                :callBack="login"
            />

        </div>
    </div>
</template>

<script>
import Input from "@/components/input/Input.vue";
import Button from "@/components/button/Button.vue";
import Usuario from '../models/Usuario'
import usuarioService from "../api/usuario-service"
import UtilsStorage from '../utils/storage'

    export default {
        name: "LoginView",
        components: { Input, Button },
        data() {
            return {
                usuario: new Usuario()
            }
        },
        methods: {
            login(){

                if(!this.usuario.modeloValidoLogin()){

                    this.$swal({
                            icon: "warning",
                            title: "Email e Senha são obrigatórios.",
                            confirmButtonColor: "#1c223b",
                            animate: true
                        })
                    return;
                }

                usuarioService.login(this.usuario.email, this.usuario.senha)
                    .then(response => {
                        this.usuario = new Usuario(response.data.usuario);
                        UtilsStorage.SalvarUsuarioNaStorage(this.usuario);
                        UtilsStorage.SalvarTokenNaStorage(response.data.token);

                        this.$router.push({ name: 'ControleDeProdutos'});
                    })
                    .catch(error => {
                        console.error(error);
                        this.$swal({
                            icon: "error",
                            title: error.message,
                            animate: true,
                            showConfirmButton: true,
                            confirmButtonColor: "#1c223b",
                        });
                    })
            }
        }
    }    
</script>

<style scoped>
.box-login {
    width: 300px;
    margin: auto;
    margin-top: 70px;
    border: 1px solid #ddd;
    padding: 30px;
}

.logo {
    text-align: center;
    color: var(--color-primary);
    font-size: 22px;
}
</style>