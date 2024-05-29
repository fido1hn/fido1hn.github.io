<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink></li
      >
    </ul>
  </section>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('blog-list', () =>
  queryContent('/blog').only(['_path', 'title']).find()
);

useHead({
  title: 'Blog',
});
</script>

<style></style>
