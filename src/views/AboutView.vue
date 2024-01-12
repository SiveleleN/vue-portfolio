<template>
  <div class="about">
     <img class="profile-image" src="https://live.staticflickr.com/65535/53454990283_2754dfd423_m.jpg" :class="rounded-circle" alt="Your Name" />
     <h1>About Me</h1>
     <div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">Greetings! I'm thrilled to welcome you to my about page, where I aim to provide you with an in-depth glimpse into who I am and what drives me in the world of technology. Born on March 31, 1998, I am a Full Stack Developer student Life Choice's Academy with a passion for continuous growth and skill enhancement.</div>
 <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">I firmly believe in the philosophy of skill acquisition and development over time, viewing it as the cornerstone of personal and professional evolution. Embarking on this journey has not only shaped my career but has also allowed me to contribute meaningfully to the dynamic landscape of technology. My commitment to ongoing learning is unwavering, and I actively seek opportunities for theoretical study, collaboration with peers, and mentorship to ensure that my knowledge and expertise remain relevant in an ever-evolving environment.</div>
 <div class="shadow p-3 mb-5 bg-body-tertiary rounded">Motivation is the driving force behind my pursuit of knowledge. Whether delving into the intricacies of coding languages, exploring innovative solutions to complex problems, or staying abreast of the latest industry trends, I am dedicated to staying at the forefront of my field. This commitment extends to fostering an environment of collaboration and shared learning, where I can both contribute to and benefit from the collective expertise of my colleagues.</div>
 <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">My personal attributes serve as pillars that support my professional endeavors. Punctuality is not just a habit but a value I hold dear, recognizing its impact on productivity and teamwork. Adaptability is a skill I've honed, allowing me to navigate the ever-changing landscape of technology with ease. Analytical thinking is a tool that sharpens my problem-solving abilities, enabling me to approach challenges with a strategic mindset. Assertiveness rounds out my qualities, empowering me to communicate effectively and make impactful contributions to collaborative projects.</div> 
 <div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">One of the most rewarding aspects of my journey is the ability to establish and maintain meaningful relationships. With a deep appreciation for diversity in socioeconomic backgrounds, social statuses, and life experiences, I find it effortless to connect with individuals from all walks of life. This not only enriches my personal and professional life but also broadens my perspective, fostering an inclusive approach to problem-solving and innovation.</div>
 <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">Thank you for taking the time to explore my about page. I am excited about the possibilities that lie ahead, and I look forward to connecting with like-minded individuals who share a passion for continuous learning, innovation, and the ever-evolving world of technology.</div>
 </div>
 <div class="hobbies-container">
     <h2>Hobbies:</h2>
     <ul class="list-group">
       <li class="list-group-item">Learning New Skill</li>
       <li class="list-group-item">Researching New Technology</li>
       <li class="list-group-item">Watching Documentaries</li>
       <li class="list-group-item">Hiking</li>
       <li class="list-group-item">Watching International Football</li>
     </ul>
   </div> 
 </template>
 
  <script>
 </script>
 
 <style scoped>
 .hobbies-container {
       border: 1px solid #ccc;
       border-radius: 8px;
       padding: 15px;
       width: 300px; /* Adjust the width as needed */
       margin: 20px auto;
     }
 
     h2 {
       text-align: center;
     }
 
     .list-group {
       list-style: none;
       padding: 0;
       margin: 0;
     }
 
     .list-group-item {
       border: 1px solid #ddd;
       border-radius: 4px;
       margin: 5px 0;
       padding: 8px;
     }
 .about {
   max-width: 800px;
   margin: auto;
   padding: 20px;
   font-family: 'Arial', sans-serif;
 }
 
 .profile-image {
   width: 100%;
   max-width: 300px;
   border-radius: 10px;
   margin-top: 20px;
 }
 
 h1, h2 {
   color: #EA3B52;
 }
 
 .fade-in {
   opacity: 0;
   animation: fadeIn ease-in-out 1s forwards;
 }
 
 @keyframes fadeIn {
   from {
     opacity: 0;
   }
   to {
     opacity: 1;
   }
 }
 
 .container {
     max-width: 800px;
     margin: auto;
     padding: 20px;
     display: flex;
     flex-direction: column;
     align-items: center;
   }
 
   .about, .hobbies {
     background-color: #ffffff; /* Set background color for the box */
     padding: 20px;
     margin-bottom: 20px;
     border-radius: 10px; /* Add rounded corners */
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
   }
 
   .profile-image {
     width: 100%;
     max-width: 300px;
     border-radius: 10px;
     margin-top: 20px;
   }
 
   h1, h2 {
     color: #EA3B52;
   };
 </style>