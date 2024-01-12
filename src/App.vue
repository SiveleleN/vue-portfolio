<template>
  <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/reviews">Reviews</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  -->
 
  <NavbarComponent />
  <FooterComponent />
  <SpinnerComponent />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SpinnerComponent from './components/SpinnerComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    SpinnerComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #B11226;
  background-color: #F2B995;

}

nav {
  padding: 30px;
  margin-left: auto;
  position: center;
  top: 0%;
  right: 0;
  background-color: 5px 5px 20px rgba(245, 40, 145, 0.8);;
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
@media screen and (max-width: 300px) {
   h1{
      color:  #EA3B52;
   }
  }
</style>
