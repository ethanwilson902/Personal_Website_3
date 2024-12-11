<template>
  <div>
    <!-- Bootstrap Navbar -->
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
        </ul>
      </div>
    </nav>

    <div class="container text-center">
      <h1 class="mb-4">Projects</h1>
    </div>

    <div class="container text-left">
      <ul>
        <li>Class Information Technology Website</li>
        <li>A C# hosptial charges program</li>
        <li>A Burger Specials progam that changed day to see the daily special.</li>
      </ul>
    </div>

    <div class="container text-center">
      <h1>Skills</h1>
    </div>

    <div class="container text-left">
      <ul>
        <li>Microsoft Word</li>
        <li>Microsoft Powerpoint</li>
        <li>Microsoft Excel</li>
        <li>Microsoft Access</li>
      </ul>
    </div>

    <div class="container text-center">
      <h1 class="mb-4">Experience</h1>
    </div>

    <div class="container text-left">
      <ul>
        <li>Second year student at Central Communinty College</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>
