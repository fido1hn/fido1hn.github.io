<template>
  <div class="not-prose">
    <section v-if="pending">Loading...</section>
    <section v-else-if="error"
      >Something went wrong... Please try again!</section
    >
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in repos"
          :key="repo.id"
          class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono">
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
  </div>
</template>

<script lang="js" setup>
const { error, pending, data } = await useFetch(
  'https://api.github.com/users/fido1hn/repos'
);

const repos = computed(() =>
  data.value
    .filter((repository) => repository.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>

<style></style>
