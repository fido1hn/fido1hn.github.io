<template>
  <div class="mx-auto p-10">
    <div class="mainbox">
      <article class="corner-text top-left">
        <p class="corner-detail">Longitude ~ <span>3.3958</span></p>
        <p class="corner-detail">Latitude ~ <span>6.4530</span></p>
      </article>

      <article class="corner-text top-right">
        <p class="corner-detail"><span>Chrome V127.0.6523.4</span> ~ Browser</p>
        <p class="corner-detail"><span>Linux, Fedora</span> ~ OS</p>
      </article>

      <article class="corner-text bottom-left">
        <p class="corner-detail">Local time ~ <span>44:00 PM</span></p>
        <p class="corner-detail">Time spent ~ <span>5s</span></p>
      </article>

      <article class="corner-text bottom-right">
        <p class="corner-detail"><span>41.203.78.171</span> ~ IP</p>
        <p class="corner-detail"><span>Lagos, Nigeria</span> ~ Location</p>
      </article>

      <!-- <article>
        <p>Hi, i am</p>
        <p>Confidence, Ekeanya</p>
        <p>Full Stack Developer</p>
      </article> -->

      <Menu />

      <!-- <main class="p-2 mt-5">
        <slot />
      </main> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s - Confidence A.E',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap',
      crossorigin: '',
    },
  ],
});
</script>

<style>
body {
  font-family: 'Orbitron', sans-serif;
  /* @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300; */
  background-color: rgb(17, 17, 17);
  color: white;
}

.mainbox {
  height: 90vh;
  border-radius: 3rem;
  /* padding: 2rem 1rem; */

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: linear-gradient(
        90deg,
        transparent 0%,
        transparent 0.5px,
        rgba(31, 31, 45, 0.7) 0.5px,
        rgba(31, 31, 45, 0.7) 1px
      )
      0 0,
    linear-gradient(
        transparent 0%,
        transparent 0.5px,
        rgba(31, 31, 45, 0.7) 0.5px,
        rgba(31, 31, 45, 0.7) 1px
      )
      0 0;
  background-size: 20px 20px;
}

.corner-text {
  position: absolute;
}

.top-left {
  top: 20px;
  left: 20px;
}

.top-right {
  text-align: right;
  top: 20px;
  right: 20px;
}

.bottom-left {
  bottom: 20px;
  left: 20px;
}

.bottom-right {
  text-align: right;
  bottom: 20px;
  right: 20px;
}

.corner-detail {
  color: #eff1c5;

  span {
    color: white;
  }
}
</style>
