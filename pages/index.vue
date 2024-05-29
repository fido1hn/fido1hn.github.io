<template>
  <h1>My Nuxt Blog</h1>
</template>

<script setup>
useSeoMeta({
  title: "Dev Portfolio",
  description: "This is the main page",
  ogTitle: "Main page",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Main page",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
