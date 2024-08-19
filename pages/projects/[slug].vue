<template>
  <section class="px-5">
    <div class="flex">
      <div class="image-box"></div>
      <div class="content"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const projects = useProjects();
const project = computed(() => projects.value.find((p) => p.slug === slug));
</script>
