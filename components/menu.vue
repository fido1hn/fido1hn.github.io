<template>
  <nav class="navbar" :class="{ 'navbar-open': isNavOpen }">
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
    @click="toggleNavbar"
    class="navbar-toggler"
    :class="{ 'toggle-shadow': isNavOpen }"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <ThreeBars />
  </button>
</template>

<script lang="ts" setup>
const isNavOpen = ref(false);
const toggleNavbar = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

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

    display: none;
  }

  .navbar-toggler {
    display: block;
  }

  .navbar-open {
    display: block;
  }

  .toggle-shadow {
    box-shadow: 0 0 10px rgba(239, 241, 197, 0.8),
      0 0 20px rgba(239, 241, 197, 0.5), 0 0 30px rgba(239, 241, 197, 0.2),
      0 0 40px rgba(239, 241, 197, 0.1);
  }
}
</style>
