<template>
    <div>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page4",
    data(){
        return{
            user:"",
            pass:"",
            msg:this.$store.state.shuju,
            message:""
        }
    },
    }
</script>

<style scoped>

</style>