<template>
  <nav class="navbar">
    <ul class="nav flex flex-col md:flex-row justify-between space-x-10">
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
    <ThreeBars class="nav-icon" />
  </nav>
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

.nav-icon {
  display: none;
}

@media (max-width: 870px) {
  .navbar {
    padding: 0.5rem 0.5rem;
    bottom: 70px;
    transform: translateY(0);
  }

  .nav {
    display: none;
  }

  .nav-icon {
    display: block;
  }
}
</style>
