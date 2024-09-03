<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Confidence Ekeanya - Web Developer Portfolio',
  ogTitle: 'Confidence Ekeanya - Web Developer Portfolio',
  description:
    'Web Portfolio, get to know Confidence Ekeanya and see his works and projects, specializing in JavaScript/TypeScript and Vue/Nuxt',
  ogDescription:
    'Web Portfolio, get to know Confidence Ekeanya and see his works and projects, specializing in JavaScript/TypeScript and Vue/Nuxt',
  ogImage: '/favicon-32x32.png',
  twitterCard: '/favicon-32x32.png',
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: blur(0.2rem);
}
</style>
