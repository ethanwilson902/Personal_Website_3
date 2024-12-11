<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Ethan Wilson</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bio" class="nav-link">Bio</router-link>
          </li>
          <!-- Add more navbar items as needed -->
        </ul>
      </div>
    </nav>

      
      
      <div class="container text-center">
        <h1 class="mb-4">About Me</h1>
        <img src="@/assets/PFP.jpg" alt="Professional Image" class="img-fluid mx-auto d-block" style="max-width: 300px;">
        <p>I am a dedicated and passionate About Information Technology with only two years of experience in IT. My journey began with a profound interest in the ins and outs of computers, leading me to want to further my knowledge on them.
            Interests:
          In my free time, I enjoy Playing video games and spending time with friends and family.</p>
          <div class="container text-center">
          <p>Vision: <br>
I am driven by my thurst for knowledge and knowing every part of a computer and how they work. I aim to graduate from CCC and get a job where I can further grow my knowledge.</p>
          </div> 
        

      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Your component logic...
  }
  </script>
  
  <style>
  /* Your CSS styles... */
  </style>
  