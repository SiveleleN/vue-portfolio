<template>
    <div class="container">
      <div class="row">
        <div class="text">
          <!-- <h1 class="animate">Sivelele Nkamane</h1> -->
          <div class="pict-text">
            <img src="https://cdn-thumbs.imagevenue.com/bf/67/92/ME17JEDC_t.png" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container">
  <h1 class="typed">I am Full Stack Web Developer</h1>
</div>
        <p class="lol">
          Hello! I am animated to welcome you to my portfolio. I am
          <span class="animate">Sivelele Nkamane</span>,
          <br />possessing a deep understanding of user-centered design principles and
          <br />a strong portfolio that showcases my ability to create intuitive and visually appealing interfaces.
        </p>
        <div class="peaches">
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
  components: {

  }, 
  data() {
    return {
      loading: true,
    }
  },
}
</script>

<style scoped>
*{

  background-color: #f2b995;
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
  /* overflow: hidden; */
}

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

</style>
