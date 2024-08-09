<template>
  <div class="container p-10 mx-auto -mt-16 tablet:mt-0">
    <h1
      class="uppercase font-bold text-xl lg:text-3xl tablet:text-5xl text-center mb-3"
      >Projects Showcase</h1
    >
    <div
      class="projects flex flex-col justify-center items-center gap-y-5 min-[870px]:gap-x-20 min-[870px]:flex-row">
      <div class="flex flex-col items-center justify-center max-w-44">
        <div class="img-box">
          <img src="/images/omnifood-webpage.png" alt="" />
        </div>
        <div class="img-box small">
          <img src="/images/natours-webpage.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Projects',
});
</script>

<style scoped>
.img-box {
  width: 350px;
  height: 400px;
  overflow: hidden;
  border-radius: 18px;
}

@media (max-width: 870px) {
  .img-box {
    height: 350px;
    width: 300px;
  }
  .img-box.small {
    height: 90px;
    width: 300px;
  }
}
</style>
