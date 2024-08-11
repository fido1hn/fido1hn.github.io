<template>
  <div
    class="container -mt-10 md:-mt-0 px-7 mx-auto flex items-center justify-center">
    <div
      class="grid grid-cols-1 grid-rows-[55px_250px_50px] md:grid-rows-2 md:grid-cols-[300px_300px] lg:grid-cols-[350px_350px] gap-y-5 lg:gap-y-11 max-w-[52rem]">
      <!-- Heading -->
      <h1
        class="text-2xl text-center mt-0 md:mt-5 md:text-4xl md:leading-tight lg:text-5xl md:text-left font-bold uppercase"
        >Let's make something amazing!</h1
      >
      <!-- Form -->
      <div
        class="md:row-span-2 w-10/12 ml-5 h-full md:h-[22.6rem] p-3 bg-dark-night rounded-[2.5rem]">
        <UForm
          :state="contactForm"
          class="space-y-2"
          @submit.prevent="submitForm">
          <UFormGroup
            label="Name"
            name="name"
            size="sm"
            :ui="{ label: { base: 'hidden' } }">
            <UInput
              type="text"
              placeholder="Name"
              :ui="{
                rounded: 'rounded-full',
                placeholder: 'dark:placeholder-gray-100 placeholder-gray-100',
                color: {
                  white: {
                    outline:
                      'ring-gray-600 dark:ring-gray-600 bg-dusk-night dark:bg-dusk-night dark:focus:ring-primary-100 focus:ring-primary-100',
                  },
                },
              }" />
          </UFormGroup>

          <UFormGroup
            label="Email"
            name="email"
            size="sm"
            :ui="{ label: { base: 'hidden' } }">
            <UInput
              type="email"
              placeholder="Email"
              :ui="{
                rounded: 'rounded-full',
                placeholder: 'dark:placeholder-gray-100 placeholder-gray-100',
                color: {
                  white: {
                    outline:
                      'ring-gray-600 dark:ring-gray-600 bg-dusk-night dark:bg-dusk-night dark:focus:ring-primary-100 focus:ring-primary-100',
                  },
                },
              }" />
          </UFormGroup>

          <UFormGroup
            label="Message"
            name="message"
            :ui="{ label: { base: 'hidden' } }">
            <UTextarea
              :rows="textareaRows"
              placeholder="Message"
              :ui="{
                rounded: 'rounded-2xl',
                placeholder: 'dark:placeholder-gray-100 placeholder-gray-100',
                color: {
                  white: {
                    outline:
                      'ring-gray-600 dark:ring-gray-600 bg-dusk-night focus:ring-primary-100 dark:bg-dusk-night dark:focus:ring-primary-100',
                  },
                },
              }" />
          </UFormGroup>

          <div class="flex items-center justify-center">
            <UButton
              size="sm"
              type="submit"
              class="rounded-lg"
              color="primary"
              :ui="{
                font: 'font-semibold',
                variant: {
                  solid: 'dark:bg-{color}-100 bg-{color}-100 text-gray-900',
                },
              }">
              Submit
            </UButton>
          </div>
        </UForm>
      </div>

      <!-- Personal Info -->
      <div
        class="personal-info gap-3 flex items-center justify-center md:-mt-20">
        <div
          class="bg-white rounded-full overflow-hidden border-4 border-light-peach">
          <img
            src="/images/face_card.png"
            alt="Profile Photo"
            class="h-10 md:h-20 w-10 md:w-20" />
        </div>
        <div class="info">
          <p class="font-bold text-sm md:text-xl lg:text-2xl text-primary-100"
            >Confidence A.E.</p
          >
          <p class="text-[0.6rem] md:text-xs lg:text-base"
            >confidoekeanya@gmail.com</p
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Contact Me',
});

const windowWidth = ref(0);

const contactForm = reactive({
  name: '',
  email: '',
  message: '',
});

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

const textareaRows = computed(() => {
  if (windowWidth.value < 768) return 4; // md:breakpoint
  return 10; //
});

const submitForm = () => {
  return;
};
</script>
