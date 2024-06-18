<template>
  <nav class="navbar">
    <ul
      class="flex flex-col min-[870px]:flex-row justify-between min-[870px]:space-x-10 space-y-6 min-[870px]:space-y-0">
      <li>
        <NuxtLink to="/" class="link text-light-peach">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="link">Contact</NuxtLink>
      </li>
    </ul>
  </nav>

  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <ThreeBars />
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.navbar {
  background-color: #3d3d3d;
  padding: 1rem 3.5rem;
  border-radius: 100px;

  position: absolute;
  bottom: 0;
  transform: translateY(50%);

  font-weight: bold;
}

.navbar-toggler {
  display: none;
  background-color: #3d3d3d;
  padding: 1rem 1rem;
  border-radius: 100px;

  position: absolute;
  bottom: 70px;
}

@media (max-width: 870px) {
  .navbar {
    font-size: 1rem;
    font-weight: 800;
    padding: 1rem 5rem;
    bottom: 150px;
    border-radius: 18px;
    transform: translateY(0);
    text-align: center;

    background-color: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  .navbar-toggler {
    display: block;
  }
}
</style>
