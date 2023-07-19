<template>
    <button @click="callBack">{{value}}</button>
</template>

<script>
    export default {
        name: 'ButtonComponent',
        props: {
            value: { type: String, require },
            // função vazia no default
            callBack: { type: Function, default: () => {} } 
        }
    }
</script>

<style scoped>
    button {
        width: 100%;
        background-color: var(--color-primary);
        color: white;
        padding: 8px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;   
        cursor: pointer;
    }

    button:hover {
         background-color: var(--color-secondary);
    }
</style>