<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="text">
          <h1 class="animate">Sivelele Nkamane</h1>
          <div class="pict-text">
            <img src="https://cdn-thumbs.imagevenue.com/bf/67/92/ME17JEDC_t.png" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container">
  <h1 class="typed">I am Full Stack Web Developer</h1>
</div>
        <p>
          Hello! I am animated to welcome you to my portfolio. I am
          <span class="animate">Sivelele Nkamane</span>,
          <br />possessing a deep understanding of user-centered design principles and
          <br />a strong portfolio that showcases my ability to create intuitive and visually appealing interfaces.
        </p>
        <a href="/public/img/icons/sivelele (1).pdf" download="Resume">
          <button class="CV animate">Resume</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
};
</script>

<style scoped>

.container{
  display: inline-block;
  font-family: "arial";
  font-size: 24px;
}

.typed {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
}
  
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blinking {
  0% {border-right-color: transparent}
  50% {border-right-color: #f2b996}
  100% {border-right-color: transparent}
}

.container {
  display: flex;
}

body {
  background-color: #f2b995;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img{
  height: 300px;
}
h2{
  font-size: 3rem;
  text-align: center !important;
}
.home {
  text-align: center;
  padding: 50px;
  max-width: 1000px;
  margin: 150px;
}
/* 
h1,
h2,
p,
span {
  margin
  
} */
h1{
  text-align: center !important;
  font-size: 2.5rem;
}

h1,
h2 {
  color: #ea3b52;
  /* text-align: left;
  text-size-adjust: 100px; */
}

h2 {
  text-align: right;
}

p {
  text-align: right;
}


.CV {
  background-color: #ea3b52;
  color: #f2b995;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

span {
  color: #ea3b52;
  text-shadow: 1px 1px 2px #f2b995;
  font-weight: bold;
}

.animate {
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
