<template>
  <p class="mb-10">Take a look at my Github projects!</p>

  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Something went wrong... Please try again!</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="repo in repos"
        :key="repo.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
        <a :href="repo.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold">{{ repo.name }}</div>
            <div>{{ repo.stargazers_count }} ⭐</div>
          </div>
          <p class="text-sm mt-3">
            {{ repo.description }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/fido1hn/repos"
);

const repos = computed(() =>
  data.value
    .filter((repository) => repository.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>

<style></style>
