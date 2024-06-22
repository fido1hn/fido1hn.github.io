<template>
  <div class="max-w-3xl">
    <h1 class="heading">About</h1>
    <div
      class="text-box px-5 flex flex-col space-y-4 leading-7 text-sm min-[870px]:text-lg">
      <p>
        I'm Confidence, I'm a web developer. I'm 27, living in Lagos Nigeria.
        JavaScript Ninja.
      </p>
      <p>
        I started my web development journey in 2017 using WordPress and
        Shopify. Two years later I started programming in python with a focus on
        web development, and then gracefully moved on to more JavaScript and
        Typescript.
      </p>
      <p>
        I'm a full stack developer with a passion for building web applications.
        I enjoy working with Vue/Nuxt and Supabase for a quick prototype, and
        NestJS, Node/Bun, PostgreSQL/MongoDB for backend.
      </p>
    </div>
  </div>
</template>

<style scoped>
.heading {
  font-size: 56px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
}
.text-box {
  color: #eff1c5;
}
@media (max-width: 870px) {
  .heading {
    font-size: 40px;
  }
}
</style>
