<template>
    <div class="page3">
    <button @click="doClick()">点击后跳转到page2</button>
    <input type="button" @click="change1()" v-model="msg">
       </div>
</template>

<script>
    export default {
        name: "Page3",
    data(){
        return{
            user:"",
            pass:"",
            msg:this.$store.state.shuju,
            message:""
        }
    },
        methods:{
            doClick(){
            this.$router.push('/page4');
        },
            change1(){
                this.$store.commit("change",123);
            },
        }
    }
</script>

<style scoped>

</style>