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

    export default {
        name: "LoginView",
        components: { Input, Button },
        data() {
            return {
                usuario: {
                    email: '',
                    senha: ''
                }
            }
        },
        methods: {
            login(){
                // logica para acessar o sistema
                this.$router.push({ name: 'ControleDeProdutos'});
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