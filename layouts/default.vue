<template>
  <div class="mx-auto p-10">
    <div class="bg-light-dark mainbox-height grid grid-cols-3">
      <article>
        <p>longitude ~ <span>3.3958</span></p>
        <p>latitude ~ <span>6.4530</span></p>
      </article>

      <div></div>

      <article>
        <p>browser ~ <span>Chrome V127.0.6523.4</span></p>
        <p>os ~ <span>Linux, Fedora</span></p>
      </article>

      <div></div>

      <article>
        <p>Hi, i am</p>
        <p>Confidence, Ekeanya</p>
        <p>Full Stack Developer</p>
      </article>

      <div></div>

      <article>
        <p>local time ~ <span>44:00 PM</span></p>
        <p>time spent ~ <span>5s</span></p>
      </article>

      <div></div>

      <article>
        <p>ip ~ <span>41.203.78.171</span></p>
        <p>location ~ <span>Lagos, Nigeria</span></p>
      </article>

      <!-- <article>
        <p>Hi, i am</p>
        <p>Confidence, Ekeanya</p>
        <p>Full Stack Developer</p>
      </article> -->

      <!-- <Menu /> -->

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

.mainbox-height {
  height: 90vh;
}
</style>
