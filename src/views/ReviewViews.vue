<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-3" v-for="reviews in $store.state.ReviewData" :key="reviews.id">
          <div class="card h-100">
            <img :src="reviews.img_url" class="card-img-top" id="hey">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ reviews.name }}</h5>
              <p class="card-text flex-grow-1">{{ reviews.description }}</p>
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
    fetchDataproject() {
      return this.$store.dispatch('fetchData');
    }
  },
  mounted() {
    this.fetchDataproject.catch(error => {
      console.error('Error fetching data:', error);
    });
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}

.card-body {
  height: 100%; /* Set a fixed height for the card body */
}

@media (max-width: 575.98px) {
  .col-md-4 {
    flex-basis: 100%;
    max-width: 100%;
  }
}
#hey{
  width:50%;
  margin:20%;
}
</style>