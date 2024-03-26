<template>
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
  </template>
  <script>
  export default {};
  </script>
  <style scoped>
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