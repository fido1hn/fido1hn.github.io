<template>
  <div class="h-svh p-3 md:p-8 lg:p-12 bg-primary-dark w-screen">
    <div
      class="flex min-h-full justify-center items-center rounded-3xl md:rounded-4xl relative bg-[length:15px_15px] md:bg-[length:10px_10px] blur-effect custom-grid-background">
      <div class="absolute font-medium top-5 left-5 text-[.6rem] md:text-base">
        <p
          ><span class="text-primary-100">Longitude ~ </span
          ><span>3.3958</span></p
        >
        <p
          ><span class="text-primary-100">Latitude ~ </span
          ><span>6.4530</span></p
        >
      </div>

      <div class="absolute font-medium top-5 right-5 text-[.6rem] md:text-base">
        <p class="">
          <span>Chrome</span>
          <span class="hidden md:inline"> V127.0.6523.4</span>
          <span class="text-primary-100">~ Browser</span></p
        >
        <p class="text-right"
          ><span>Linux, Fedora</span>
          <span class="text-primary-100">~ OS</span></p
        >
      </div>

      <div
        class="absolute font-medium bottom-5 left-5 text-[.6rem] md:text-base">
        <p
          ><span class="text-primary-100">Local time ~ </span
          ><span>{{ formattedTime }}</span></p
        >
        <p
          ><span class="text-primary-100">Time spent ~ </span><span>5s</span></p
        >
      </div>

      <div
        class="absolute font-medium bottom-5 right-5 text-[.6rem] md:text-base">
        <p class="text-right"
          ><span>41.203.78.171</span>
          <span class="text-primary-100">~ IP</span></p
        >
        <p
          ><span>Lagos, Nigeria</span>
          <span class="text-primary-100">~ Location</span></p
        >
      </div>

      <Menu />

      <main class="relative z-10 w-full flex items-center justify-center">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatTime } from '~/lib/utils';

useHead({
  titleTemplate: '%s - Confidence Ekeanya | Web Developer',
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
});

const time = new Date().toLocaleTimeString('en-NG', { hour12: false });
const formattedTime = computed(() => formatTime(time));
</script>

<style>
body {
  font-family: 'Orbitron', sans-serif;
  background-color: #111111;
  color: white;
}
</style>
