<template>
  <div
    class="container grid grid-cols-2 gap-x-12 gap-y-12 max-w-4xl h-full mx-auto">
    <!-- Heading -->
    <h1 class="text-6xl font-bold uppercase leading-tight"
      >Let's make something amazing!</h1
    >

    <!-- Form -->
    <form
      class="space-y-5 row-span-2 p-5 bg-dark-ash rounded-[48px] flex flex-col">
      <div>
        <label for="name" class="hidden">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          class="px-5 py-2 rounded-full bg-ash text-white placeholder:text-white w-full" />
      </div>
      <div>
        <label for="email" class="hidden">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          class="px-5 py-2 rounded-full bg-ash placeholder:text-white w-full" />
      </div>
      <div>
        <label for="message" class="hidden">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows="6"
          class="px-5 py-2 rounded-xl bg-ash placeholder:text-white w-full"></textarea>
      </div>
      <button
        type="submit"
        class="rounded-full px-8 py-2 bg-light-peach font-bold text-dark max-w-fit self-center"
        >Submit</button
      >
    </form>

    <!-- Personal Info -->
    <div class="personal-info gap-3 flex items-center">
      <div
        class="bg-white rounded-full overflow-hidden border-4 border-light-peach">
        <img
          src="/images/face_card.png"
          alt="Profile Photo"
          class="h-20 w-20" />
      </div>
      <div class="info">
        <p class="font-bold text-2xl text-light-peach">Confidence Ekeanya</p>
        <p>Confidoekeanya@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
