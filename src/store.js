import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    count:0,
    shuju:100,
    user:[],
    hobby:[]
  },
  mutations: {
    addList(state,obj){
      state.list.push(obj);
    },
    addCount(state,n){
      state.count+=n;
    },
    change(state,obj){
      state.shuju=obj;
    },
    addUser(state,obj){
      state.user.push(obj);
    },
    addhobby(state,obj){
      state.hobby.push(obj);
    },
    addhobby2(state,obj){
    state.hobby.push(obj);
    },


  },
  actions: {

  }
})
