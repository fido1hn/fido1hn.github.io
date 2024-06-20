<template>
  <div class="">
    <h1 class="heading">Projects Showcase</h1>
    <div
      class="projects flex flex-col justify-center items-center gap-y-5 min-[870px]:gap-x-20 min-[870px]:flex-row">
      <div class="img-box">
        <img src="/images/omnifood-webpage.png" alt="" />
      </div>
      <div class="img-box small">
        <img src="/images/natours-webpage.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.heading {
  font-size: 56px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  word-spacing: 0;
}
.img-box {
  width: 350px;
  height: 400px;
  overflow: hidden;
  border-radius: 18px;
}

@media (max-width: 870px) {
  .heading {
    font-size: 48px;
    word-spacing: 100vw;
    line-height: 1.2;
  }
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
