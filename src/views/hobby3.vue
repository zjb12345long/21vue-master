<template>
    <div class="login">
        <h2>问卷调查问卷调查表填写</h2>
        <label>3.请介绍一下自己:</label>
        <p>
            <textarea style="width:50%;height:100px;"></textarea>
        </p>
        <p>
            <button @click="next1()">提交</button>
            <button @click="next2()">上一页</button>
            <button>重置</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "hobby3",
        data() {
            return {
                sex1: '',
                sex2: '',
                sex3: '',
            }
        },
        methods: {
            next1() {
                // this.$store.commit("addhobby",{sex1:this.sex1,sex2:this.sex2,sex3:this.sex3})
                let found=this.$store.state.hobby.find(
                    (obj)=>{return((obj.sex==this.sex)&&(obj.password==this.password))}
                );
                if (found!=undefined)
                    this.$router.push(
                        {name:'hh',params:{sex:found.sex,password:found.password}}
                    );
            },
            next2() {
                // this.$store.commit("addhobby",{sex1:this.sex1,sex2:this.sex2,sex3:this.sex3})
                this.$router.push("/hobby2");
            },
        }
    }
</script>

<style scoped>

</style>