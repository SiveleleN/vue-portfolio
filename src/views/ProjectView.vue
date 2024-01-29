<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="project in $store.state.project" :key="project.id">
          <div class="card-box">
            <div class="card">
              <img :src="project.img_url" class="card-img-top" id="lol">
              <div class="card-body">
                <h5 class="card-title">{{ project.projectName }}</h5>
                <!-- <p class="card-text">{{ project.url }}</p> -->
                <a :href="project.github_url" class="btn btn-primary" target="_blank">GitHub</a>
                <a :href="project.url" class="btn btn-primary m-2" target="_blank">Netlify</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.state.project;
    }
  },
  mounted() {
    this.$store.dispatch('fetchDataProject');
  }
};
</script>

<style scoped>
.card-box {
  margin-bottom: 30px;
  
}
.card{
 
 width: 300px;
 height: 300px;
}


@media (max-width: 767.98px) {
  .col-md-6 {
    flex-basis: 100%;
    max-width: 100%;
  }
}
#lol{
  margin: 20%;
width:50%; 
height: 20%; 
}
</style>
