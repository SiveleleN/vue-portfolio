<template>
  <section>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="text">
          <!-- <h1 class="animate">Sivelele Nkamane</h1> -->
          <div class="pict-text">
            <img src="https://cdn-thumbs.imagevenue.com/bf/67/92/ME17JEDC_t.png" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container">
  <h1 class="typed">I am Full Stack Web Developer</h1>
</div>
        <p class="lol">
          Hello! I am animated to welcome you to my portfolio. I am
          <span class="animate">Sivelele Nkamane</span>,
          <br />possessing a deep understanding of user-centered design principles and
          <br />a strong portfolio that showcases my ability to create intuitive and visually appealing interfaces.
        </p>
        <div class="peaches">
        <a href="/public/img/icons/sivelele (1).pdf" download="Resume">
          <button class="CV animate">Resume</button>
        </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="about">
     <img class="profile-image" src="https://cdn-thumbs.imagevenue.com/bf/67/92/ME17JEDC_t.png" :class="rounded-circle" alt="Your Name" />
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
</section>
<section>
  <div>
    <div class="about">
    </div>
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
  </div>
</section>
<section>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="project in $store.state.project" :key="project.id">
          <div class="card-box">
            <div class="card">
              <img :src="project.img_url" class="card-img-top" id="lol">
              <div class="card-body">
                <h5 class="card-title">{{ project.projectName }}</h5>
                <!-- <p class="card-text">{{ project.url }}</p> -->
                <a :href="project.github_url" class="btn btn-primary" target="_blank">GitHub</a>
                <a :href="project.url" class="btn btn-primary m-2" target="_blank">Netlify</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4" v-for="review in reviews" :key="review">
        <div class="card">
          <img :src="review.img_url" class="card-img-top" id="hey">
          <div class="card__content">
            <p class="card__title">{{ review.name }}</p>
            <p class="card__description">{{ review.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="row">
      <div class="col-md-6">
        <div class="contact-container">
          <h2>Connect With Me :</h2>
          <div class="form-container">
            <form action="https://formspree.io/f/xgegvewy" method="POST" class="float start">
              <div class="form-row">
                <label for="name">Name</label>
                <input name="name" id="name" type="text" required>
              </div>
              <div class="form-row">
                <label for="number">Contact Number</label>
                <input name="number" id="number" type="tel" required>
              </div>
              <div class="form-row">
                <label for="email">Your Email</label>
                <input name="email" id="email" type="email" required>
              </div>
              <div class="form-row">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4" required></textarea>
              </div>
              <button class="btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Maps</h2>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.2785191852795!2d18.645920775514774!3d-34.011061073172534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4f3dc29b3e19%3A0x44f175a51319fbb0!2sSiphumelele%20Cres%2C%20Ikwezi%20Park%2C%20Cape%20Town%2C%207784!5e0!3m2!1sen!2sza!4v1705047158947!5m2!1sen!2sza"
             width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          <div class="map-info">
            <p><img src="https://cdn-thumbs.imagevenue.com/6b/ee/b0/ME17GMOB_t.png" alt="address" width="30px" height="20px">: Cape Town</p>
            <p><img src="https://cdn-thumbs.imagevenue.com/2d/e1/9e/ME17GMOD_t.png" alt="phone" width="30px" height="20px">: +2 (769) 252-7573</p>
            <p><img src="https://cdn-thumbs.imagevenue.com/c2/64/27/ME17GMOC_t.png" alt="email" width="30px" height="20px">: info@example.com</p>
          </div>
        </div>
      </div>
    </div>
</section>
</template>


<script>
export default {
  name: 'HomeView',
  components: {

  }, 
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skill;
    },
    project() {
      return this.$store.state.project;
    },
    reviews() {
      return this.$store.state.review;
    }
  },
  mounted() {
    this.$store.dispatch('fetchDataEducation');
    this.$store.dispatch('fetchDataSkill');
    this.$store.dispatch('fetchDataProject');
    this.$store.dispatch('fetchDataReview');
  },
  
  
}
</script>

<style scoped>
*{
  background-color: #f2b995;
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
  /* overflow: hidden; */
}

.container{
  display: inline-block;
  font-family: "arial";
  font-size: 24px;
}

.typed {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
}
  
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blinking {
  0% {border-right-color: transparent}
  50% {border-right-color: #f2b996}
  100% {border-right-color: transparent}
}

.container {
  display: flex;
}

body {
  background-color: #f2b995;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img{
  height: 300px !important;
}
h2{
  font-size: 3rem;
  text-align: center !important;
}
.home {
  text-align: center;
  padding: 50px;
  max-width: 1000px;
  margin: 150px;
}
/* 
h1,
h2,
p,
span {
  margin
  
} */
h1{
  text-align: center !important;
  font-size: 2.5rem;
}

h1,
h2 {
  color: #ea3b52;
/* text-align: left;
  text-size-adjust: 100px; */
}

h2 {
  text-align: right;
}

p {
  text-align: right;
}


.CV {
  background-color: #ea3b52;
  color: #f2b995;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

span {
  color: #ea3b52;
  text-shadow: 1px 1px 2px #f2b995;
  font-weight: bold;
}

.animate {
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lol{
  text-align: center;
  padding: 2rem;
  /* border: solid 1px black; */
}

@media (max-width: 400px){
img{
    height: 230px;
    position: relative;
    right: 91px;
    bottom: 164px
}
.lol{
  text-align: center;
    position: relative;
    right: 385px;
    bottom: -69px;
}
.typed{
  position: relative;
    right: 391px;
    bottom: -67px;
    font-size: 28px;
    top: 66px;
}
.peaches{
  text-align: center;
    position: relative;
    right: 385px;
    bottom: -69px;
}
}


@media (max-width: 400px) {
  .lol {
    font-size: 4em;
  }
}


.typed{
  /* border: solid black 1px; */
  padding: 1rem;
  text-wrap: wrap;
}
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
  width: 200px; /* Set a fixed width for better alignment */
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 150px;
}

.card-content1 {
  padding: 10px; /* Adjust padding as needed */
  text-align: center;
}

.card-content {
  padding: 10px;
  text-align: center;
}

#Skill-Image {
  max-width: 100%;
  height: 10rem;
  /* aspect-ratio: 3/3; */
  /* object-fit: contain; */
  border-radius: 8px;
}
.card-box {
  margin-bottom: 30px;
  
}
.card{
 
 width: 300px;
 height: 300px;
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
height: 20%; 
}
.container {
  max-width: 1200px;
}

.card {
  position: relative;
  width: 350px;
  height: 300px;
  background-color: #cc2424;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-top: 10%;
}

.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}
#hey{
  height: 100%;
  width: 200px;
}
.contact-container {
    position: relative;
    text-align: center;
    margin-top: 5px;
    max-width: 800px;
    margin: auto;
  }
  h1 {
    position: relative;
    display: inline-block;
    margin-bottom: 3px;
    font-family: 'Inter', sans-serif;
    color: #333;
    z-index: 2;
  }
  .form-container,
  .map-container {
    position: relative;
    z-index: 2;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .form-container {
    margin-right: 15px;
  }
  .map-info {
    margin-top: 15px;
  }
  iframe {
    width: 100%;
    height: 300px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    width: 100%;
  }
  button {
    background-color: #EA3B52;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.20s ease;
  }
  .btn:hover {
    background-color: #634490;
  }
</style>
