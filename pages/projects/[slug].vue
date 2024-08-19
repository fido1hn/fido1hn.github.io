<template>
  <section class="px-5">
    <div class="flex items-start gap-4">
      <div>
        <NuxtImg
          provider="cloudinary"
          :src="project?.imageUrl"
          width="400px"
          class="rounded-lg" />
      </div>
      <div class="w-96">
        <h2 class="font-semibold text-3xl mb-2">{{ project?.title }}</h2>
        <p class="font-mono text-lg text-primary-100 mb-2">{{
          project?.description
        }}</p>
        <div class="flex items-center gap-1 mb-8">
          <UButton
            label="Live Preview"
            icon="i-heroicons-arrow-top-right-on-square-20-solid"
            variant="ghost"
            :to="project?.live_preview"
            :trailing="true" />
          <UButton
            label="Source Code"
            icon="i-heroicons-arrow-top-right-on-square-20-solid"
            variant="ghost"
            :to="project?.source_code"
            :trailing="true" />
        </div>
        <p class="font-medium text-lg mb-2">Tech Used:</p>
        <div class="flex items-center gap-2">
          <UBadge
            v-for="tech in project?.technologies"
            :label="tech"
            variant="outline" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const projects = useProjects();
const project = computed(() => projects.value.find((p) => p.slug === slug));
</script>
