<template>
  <section class="px-5 w-full">
    <div
      class="flex -mt-16 md:-mt-0 flex-col md:flex-row justify-center items-center md:items-start gap-2 md:gap-4">
      <div class="flex items-center justify-center">
        <NuxtImg
          provider="cloudinary"
          :src="project?.imageUrl"
          sizes="100vw 250px md:400px"
          class="rounded-lg" />
      </div>
      <div class="max-w-96">
        <h2 class="font-semibold text-lg md:text-3xl mb-2">{{
          project?.title
        }}</h2>
        <p class="font-mono text-sm md:text-lg text-primary-100 mb-2">{{
          project?.description
        }}</p>
        <div class="flex items-center gap-1 mb-4 md:mb-8">
          <UButton
            label="Live Preview"
            size="sm"
            icon="i-heroicons-arrow-top-right-on-square-20-solid"
            variant="ghost"
            :to="project?.live_preview"
            :trailing="true"
            :ui="{
              variant: {
                ghost: 'hover:bg-primary-950',
              },
            }" />
          <UButton
            label="Source Code"
            size="sm"
            icon="i-heroicons-arrow-top-right-on-square-20-solid"
            variant="ghost"
            :to="project?.source_code"
            :trailing="true"
            :ui="{
              variant: {
                ghost: 'hover:bg-primary-950',
              },
            }" />
        </div>
        <p class="font-medium text-xs md:text-lg mb-2">Tech Used:</p>
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
useHead({
  title: `${project.value.title}`,
});
</script>
