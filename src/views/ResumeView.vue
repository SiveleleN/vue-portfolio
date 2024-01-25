<template>
  <div>
    <div class="about">
      <h1>Education and Skills</h1>
    </div>
    <div class="alli">
      <h2>Education</h2>
      <div class="card-container" v-for="edu in education" :key="edu.id">
        <div class="card">
          <div class="card-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="card-content1">
            <p>{{ edu.institution }}</p>
            <p>{{ edu.grade }}</p>
            <p>{{ edu.year }}</p>
          </div>
        </div>
      </div>
      <h2>Skills</h2>
      <div class="skills-container" v-for="skill in skill" :key="skill.id">
        <div class="card skill-card">
          <div class="card-content">
            <!-- Make sure skill.url is a valid URL or provide a default image -->
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
    education() {
      return this.$store.state.education;
    },
    skill() {
      return this.$store.state.skill;
    }
  },
  mounted() {
    this.$store.dispatch('fetchDataEducation');
    this.$store.dispatch('fetchDataSkill');
  }
};
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
