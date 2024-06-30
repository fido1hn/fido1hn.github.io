<template>
  <div class="flex flex-col space-y-6 text-box">
    <p class="top">Hi, i am</p>
    <h1 class="middle uppercase">Confidence Ekeanya</h1>
    <p class="bottom">Full Stack Developer</p>
  </div>
</template>

<style scoped>
.top {
  /* font-weight: 400; */
  font-size: 2rem;
}
.middle {
  font-weight: 700;
  font-size: 3rem;
  transform: translateX(50px);
}
.bottom {
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Titillium Web', sans-serif;
  color: #eff1c5;
}

@media (max-width: 925px) {
  .top {
    /* font-weight: 400; */
    font-size: 2rem;
  }
  .middle {
    font-weight: 700;
    font-size: 2.5rem;
    transform: translateX(50px);
  }
  .bottom {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Titillium Web', sans-serif;
    color: #eff1c5;
  }
}

@media (max-width: 720px) {
  .top {
    /* font-weight: 400; */
    /* font-size: 1.5rem; */
    @apply text-3xl;
  }
  .middle {
    font-weight: 700;
    font-size: 2rem;
    transform: translateY(0);
    line-height: 2.4rem;
  }
  .bottom {
    /* font-size: 0.8rem; */
    font-weight: 400;
    font-family: 'Titillium Web', sans-serif;
    color: #eff1c5;
  }
  .text-box {
    text-align: center;
    max-width: 300px;
  }
}
</style>

<script setup>
useHead({
  title: 'Home',
});
</script>
