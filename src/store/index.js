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
      axios.get("https://sivelelen.github.io/jasonfile/Data/")
        .then((response) => {
          const projectData = response.data.project;
          console.log(projectData);
          context.commit('setProject', projectData);
        })
    },
    fetchDataReview(context) {
      axios.get("https://sivelelen.github.io/jasonfile/Data/")
        .then((response) => {
          const reviewData = response.data.review;
          console.log(reviewData);
          context.commit('setReview', reviewData);
        })
        .catch((error) => {
          console.error('Error fetching project data:', error);
        });
    },
    
    fetchDataEducation(context) {
      axios.get("https://sivelelen.github.io/jasonfile/Data/")
        .then((response) => {
          const educationData = response.data.education;
          console.log(educationData);
          context.commit('setEducation', educationData);
        })
    },
    fetchDataSkill(context) {
      axios.get("https://sivelelen.github.io/jasonfile/Data/")
        .then((response) => {
          const skillData = response.data.skill;
          console.log(skillData);
          context.commit('setSkill', skillData);
        })
    },
  },
  
    

  
  modules: {
  }
})
