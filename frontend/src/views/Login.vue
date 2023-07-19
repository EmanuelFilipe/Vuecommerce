<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>
        <div>
            <Input 
                label="E-mail" 
                placeHolder="exemplo@gmail.com"
            />
            <Input 
                label="Senha" 
                placeHolder="123456"
                type="password"
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
        methods: {
            login(){
                // logica para acessar o sistema
                this.$router.push({ name: 'Dashboard'});
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