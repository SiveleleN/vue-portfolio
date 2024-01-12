import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    ResumeData:[],
    ProjectData: [],
    ReviewData: []
  },
  getters: {
  },
  mutations: {
    resumeData(state, data) {
      state.ResumeData = data;
    },
    projectData(state, data) {
      state.ProjectData = data;
    },
    reviewData(state, data) {
      state.ReviewData = data;
    }
  },
  actions: {
    fetchData({commit}){
      axios.get('http://localhost:3000/ data')
      .then((response)=>{
        console.log(response.data);
        commit('resumeData', response.data[0].resume);
       commit('projectData',response.data[1].project)
       commit('reviewData', response.data[2].review)
      })
      .catch(error =>{
        console.error('Error fetching data', error);
      });
    }
    
    },

  
  modules: {
  }
})
