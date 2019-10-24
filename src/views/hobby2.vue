<template>
    <div class="login">
    <h2>问卷调查问卷调查表填写</h2>
    <label>请选择你的兴趣爱好:</label>
    <p>
        <input type="checkbox"  value="看书" name=""/>
        <label>看书</label>
        <input type="checkbox"  value="游泳" name=""/>
        <label>游泳</label>
        <input type="checkbox"  value="跑步" name="" />
        <label>跑步</label>
        <input type="checkbox"  value="看电影" name="" />
        <label>看电影</label>
        <input type="checkbox"  value="听音乐" name="" />
        <label>听音乐</label>
        <input type="checkbox"  value="动漫" name="" />
        <label>动漫</label>
    </p>
    <p>
        <button @click="next1()">下一步</button>
        <button @click="next2()">上一步</button>
        <button>重置</button>
    </p>
    </div>
</template>

<script>
    export default {
        name: "hobby2",
        data() {
            return {
                sex1: '',
                sex2: '',
                sex3: '',
            }
        },
        methods: {
            next1() {
                this.$store.commit("addhobby2",{sex1:this.sex1,sex2:this.sex2,sex3:this.sex3})
                this.$router.push("/hobby3");
            },
            next2() {
                // this.$store.commit("addhobby",{sex1:this.sex1,sex2:this.sex2,sex3:this.sex3})
                this.$router.push("/hobby1");
            },
        }
    }
</script>

<style scoped>

</style>