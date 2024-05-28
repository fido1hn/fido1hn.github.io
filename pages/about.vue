<template>
  <div> This page is about me. </div>
  <div>
    <button @click="updateCurrentLayout">Update Layout...</button>
  </div>
</template>

<script lang="ts" setup>
function updateCurrentLayout() {
  setPageLayout("another");
}

// definePageMeta({
//   layout: "another",
// });
</script>

<style></style>
