<template>
  <div class="container p-12 lg:p-7 mx-auto -mt-20 tablet:mt-0">
    <div
      class="grid grid-cols-1 tablet:grid-cols-[auto_350px] gap-y-5 tablet:gap-y-11 max-w-[52rem] h-full">
      <!-- Heading -->
      <h1
        class="text-xl lg:text-3xl text-center tablet:text-6xl/[1.25] font-bold uppercase grid-cols-4"
        >Let's make something amazing!</h1
      >
      <!-- Form -->

      <form
        class="space-y-2 tablet:space-y-5 row-span-2 p-5 lg:p-3 tablet:p-5 bg-dark-ash rounded-2xl tablet:rounded-[48px] flex flex-col">
        <div>
          <label for="name" class="hidden">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            class="px-5 py-2 rounded-full bg-ash text-white placeholder:text-white w-full cursor-pointer focus:outline-none focus:ring focus:ring-light-peach" />
        </div>
        <div>
          <label for="email" class="hidden">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="px-5 py-2 rounded-full bg-ash text-white placeholder:text-white w-full cursor-pointer focus:outline-none focus:ring focus:ring-light-peach" />
        </div>
        <div>
          <label for="message" class="hidden">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="6"
            class="px-5 py-2 rounded-xl bg-ash text-white placeholder:text-white w-full cursor-pointer focus:outline-none focus:ring focus:ring-light-peach"></textarea>
        </div>
        <button
          type="submit"
          class="rounded-full px-8 py-2 bg-light-peach font-bold text-dark max-w-fit self-center hover:bg-dark-peach focus:outline-none focus:ring focus:ring-dark-peach"
          >Submit</button
        >
      </form>

      <!-- Personal Info -->
      <div class="personal-info gap-3 flex items-center justify-center">
        <div
          class="bg-white rounded-full overflow-hidden border-4 border-light-peach">
          <img
            src="/images/face_card.png"
            alt="Profile Photo"
            class="h-6 tablet:h-20 w-6 tablet:w-20" />
        </div>
        <div class="info">
          <p class="font-bold text-sm tablet:text-2xl text-light-peach"
            >Confidence Ekeanya</p
          >
          <p class="text-[0.6rem] tablet:text-base">confidoekeanya@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Contact Me',
});
</script>
