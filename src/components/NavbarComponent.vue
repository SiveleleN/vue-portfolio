<template>
  
    <!-- <router-link v-for="link in sortedLinks" :key="link.path" :to="link.path">
      {{ link.label }} -->
      <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <router-link to="/resume">Resume</router-link> 
    <router-link to="/project">Projects</router-link>
    <router-link to="/review">Review</router-link> 
    <router-link to="/contact">Contact</router-link>
  </nav>
  
  
  <router-view/>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #B11226;
}

nav {
  padding: 30px;
  margin-left: auto;
  position: center;
  top: 0%;
  right: 0;
  background-color: bisque;
  box-shadow: 5px 5px 20px rgba(245, 40, 145, 0.8);
}

nav a {
  margin: 10px;
  font-weight: bold;
  color: #EA3B52;
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #634490;
}

@media (max-width: 400px){
nav{
  padding: 21px;
    margin-left: -25px;
    position: center;
    top: 0%;
    right: 0;
    background-color: bisque;
    box-shadow: 5px 5px 20px rgba(245, 40, 145, 0.8);
    font-size: 14px;
}
}
</style>
