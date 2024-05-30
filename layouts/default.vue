<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex items-start md:items-center justify-between mt-2">
      <div class="flex items-center md:space-x-12">
        <div class="hidden md:block">
          <NuxtLink
            to="/"
            class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            >Confidence A.E</NuxtLink
          >
        </div>

        <Menu />
      </div>

      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>

    <main class="p-2 mt-5">
      <slot />
    </main>
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
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: '',
    },
  ],
});
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
