<template>
    <div id="app">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>