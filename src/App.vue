<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/page1">Page1</router-link> |-->
      <!--<router-link to="/page2">Page2</router-link> |-->
      <!--<router-link to="/page3">Page3</router-link> |-->
      <!--<router-link to="/page4">Page4</router-link>|-->

      <!--<router-link to="/login">login</router-link>|-->
      <!--<router-link to="/register">register</router-link>|-->
      <!--<router-link to="/loginsuccess">loginsuccess</router-link>|-->

      <router-link to="/hobby1">hobby1</router-link>|
      <!--<router-link to="/hobby2">hobby2</router-link>|-->
      <!--<router-link to="/hobby3">hobby3</router-link>|-->
      <router-link to="/hh">hh</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
