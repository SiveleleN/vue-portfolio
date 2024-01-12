<template>
  <div v-if="isLoading" class="spinner-container">
     <div class="spinner"></div>
  </div>
 </template>
 
 <script>
 export default {
  data() {
     return {
       isLoading: true, 
     };
  },
  mounted() {
     this.isLoading = true; 
  },
 };
 </script>
 
 <style scoped>
 .spinner-container {
  position: relative;
  z-index: 1000; 
 }
 
 .spinner {
  border: 4px solid rgba(205, 92, 92, 0.1);
  border-top: 4px solid rgba(233, 150, 122, 01);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;
 }
 
 @keyframes spin {
   0% {
     transform: rotate(0deg);
  }
   100% {
     transform: rotate(360deg);
  }
 }
 </style>