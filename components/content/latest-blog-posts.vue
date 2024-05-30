<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script lang="ts" setup>
const props = defineProps({
  limit: {
    type: String,
    default: null,
  },
});
</script>
