import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    project: [],
    review: [],
    education: [],
    skill: []
  },
  getters: {
  },
  mutations: {
    setProject(state, data) {
      state.project = data;
    },
    setReview(state, data) {
      state.review = data;
    },
    setEducation(state, data) {
      state.education = data;
    },
    setSkill(state, data) {
      state.skill = data;
    }
  },
  actions: {
    fetchDataProject(context) {
      axios.get("http://localhost:3000/project")
        .then((response) => {
          const projectData = response.data;
          console.log(projectData);
          context.commit('setProject', projectData);
        })
    },
    fetchDataReview(context) {
      axios.get("http://localhost:3000/review")
        .then((response) => {
          const reviewData = response.data;
          console.log(reviewData);
          context.commit('setReview', reviewData);
        })
        .catch((error) => {
          console.error('Error fetching project data:', error);
        });
    },
    
    fetchDataEducation(context) {
      axios.get("http://localhost:3000/education")
        .then((response) => {
          const educationData = response.data;
          console.log(educationData);
          context.commit('setEducation', educationData);
        })
    },
    fetchDataSkill(context) {
      axios.get("http://localhost:3000/skill")
        .then((response) => {
          const skillData = response.data;
          console.log(skillData);
          context.commit('setSkill', skillData);
        })
    },
  },
  
    

  
  modules: {
  }
})
