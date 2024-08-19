<template>
  <div class="flex flex-col space-y-6 text-center px-5">
    <p class="md:text-left text-3xl md:text-4xl">Hi, I am</p>
    <h1
      class="uppercase font-bold text-3xl translate-x-0 md:translate-x-14 lg:text-5xl"
      >Confidence Ekeanya</h1
    >
    <div class="flex justify-center md:justify-start items-center gap-3">
      <p
        class="md:text-left font-TitilliumWeb font-normal text-base md:text-3xl text-primary-100"
        >Full Stack Developer</p
      >

      <ULink to="https://github.com/fido1hn">
        <UIcon name="i-fa6-brands-github" class="h-4 w-4 md:h-8 md:w-8 block" />
      </ULink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Home',
});
</script>
