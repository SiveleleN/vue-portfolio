<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="project in $store.state.ProjectData" :key="project.id">
          <div class="card-box">
            <div class="card mt-3">
              <img :src="project.img_url" class="card-img-top" id="lol">
              <div class="card-body">
                <h5 class="card-title">{{ project.projectName }}</h5>
                <p class="card-text">{{ project.url }}</p>
                <a href="" class="btn btn-primary">GitHub</a>
                <a :href="project.netlifyUrl" class="btn btn-primary">Netlify</a>
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
    fetchDataresume() {
      return this.$store.dispatch('fetchData');
    }
  },
  mounted() {
    this.fetchDataresume.catch(error => {
      console.error('Error fetching data:', error);
    });
    this.fetchDataresume;
  }
};
</script>

<style scoped>
.card-box {
  margin-bottom: 20px;
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
}
</style>
