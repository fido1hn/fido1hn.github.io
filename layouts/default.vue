<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex items-center justify-between mt-2">
      <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
        >Confidence A.E</NuxtLink
      >

      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/">Main</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
