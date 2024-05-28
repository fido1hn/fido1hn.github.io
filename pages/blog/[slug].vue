<template>
  <div> We are inside a blog post </div>
  <div> Param: {{ route.params.slug }} </div>
</template>

<script lang="ts" setup>
const route = useRoute();
console.log(route);
</script>

<style></style>
