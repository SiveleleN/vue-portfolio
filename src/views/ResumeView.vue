<template>
  <div>
    <div class="about">
      <h1>Education and Skills</h1>
    </div>
    <div class="alli">
      <h2>Education</h2>
      <div class="card-container" v-if="$store.state.ResumeData.length > 0">
        <div v-for="edu in $store.state.ResumeData[0].education" :key="edu.Id" class="card">
          <div class="card-icon">
            :mortar_board:
          </div>
          <div class="card-content1">
            <p>{{ edu.institution}}</p>
            <p>{{ edu.grade}}</p>
            <p>{{ edu.year }}</p>
          </div>
        </div>
      </div>
      <h2>Skills</h2>
      <div class="skills-container" v-if="$store.state.ResumeData.length > 1">
        <div v-for="skill in $store.state.ResumeData[1].skills" :key="skill.Id" class="card skill-card">
          <div class="card-content">
            <img :src="skill.url" class="skill-image" />
            <p class="skill-name">{{ skill.skillName }}</p>
          </div>
        </div>
      </div>
      <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    resume() {
      return this.$store.state.ResumeData;
    },
  },
  mounted() {
    this.fetchDataresume().then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }).catch((error) => {
      console.error('Error fetching data:', error);
      this.loading = false;
    });
  },
  methods: {
    fetchDataresume() {
      return this.$store.dispatch('fetchData');
    },
  },
};
</script>
<style scoped>

</style>