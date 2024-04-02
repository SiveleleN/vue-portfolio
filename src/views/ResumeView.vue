<template>
  <div class="row">
    <h2>Education</h2>
    <div class="col-md-6 col-lg-4" v-for="edu in education" :key="edu.id">
      <div class="card">
        <div class="card-icon">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="card-content">
          <img :src="edu.img_url" class="card-img-top" alt="Education Image" />
          <p>{{ edu.institution }}</p>
          <p>{{ edu.grade }}</p>
          <p>{{ edu.year }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <h2>Skills</h2>
    <div class="col-md-6 col-lg-4" v-for="skill in skills" :key="skill.id">
      <div class="card">
        <div class="card-content">
          <img :src="skill.img_url" class="card-img-top" alt="Skill Image" id="Skill-Image" />
          <p class="skill-name">{{ skill.skillName }}</p>
          <p class="skill-type">{{ skill.type }}</p>
          <p class="skill-description">{{ skill.description }}</p>
          <a v-if="skill.type === 'Curriculum Vitae'" :href="skill.url" download>
            <button class="download-button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-if="loading" class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
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
    skills() {
      return this.$store.state.skill;
    }
  },
  mounted() {
    this.$store.dispatch('fetchDataEducation');
    this.$store.dispatch('fetchDataSkill');
  },
};
</script>

<style scoped>
.about {
  margin-bottom: 20px;
}

.row {
  margin-bottom: 20px;
}

.card {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
}

.card-icon {
  margin-right: 10px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.skill-card {
  width: 200px; 
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 150px;
}

.card-content1 {
  padding: 10px; 
  text-align: center;
}

.card-content {
  padding: 10px;
  text-align: center;
}

#Skill-Image {
  max-width: 100%;
  height: 10rem;
  border-radius: 8px;
} 

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.bounce1,
.bounce2,
.bounce3 {
  width: 15px;
  height: 15px;
  background-color: #333;
  border-radius: 50%;
  display: inline-block;
  animation: bounce 0.6s infinite alternate;
}

.bounce2 {
  animation-delay: 0.2s;
}

.bounce3 {
  animation-delay: 0.4s;
}

@keyframes bounce {
  to {
    transform: translateY(-15px);
  }
}
</style>
