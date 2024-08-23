<template>
  <div class="h-80 -mt-40 md:-mt-36">
    <h1
      class="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-3"
      >Projects Showcase</h1
    >
    <div class="flex justify-center items-center">
      <UAccordion
        color="primary"
        variant="soft"
        size="xl"
        :items="items"
        :ui="{
          default: { class: 'bg-primary-100' },
          wrapper: 'px-5 max-w-2xl',
        }">
        <template #default="{ item, index, open }">
          <UButton
            color="gray"
            variant="ghost"
            class="border-b border-gray-700 hover:bg-transparent dark:border-gray-700"
            :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
            <span class="truncate text-primary-100"
              >{{ index + 1 }}. {{ item.label }}</span
            >

            <template #trailing>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 text-primary-100 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-90']" />
            </template>
          </UButton>
        </template>

        <template #item="{ item }">
          <div class="text-gray-900 dark:text-white text-center">
            <p
              class="text-sm md:text-lg text-gray-200 dark:text-gray-400 mt-2 font-mono">
              {{ item.description }}
            </p>
            <UButton
              label="See more"
              target="_blank"
              icon="i-heroicons-arrow-top-right-on-square-20-solid"
              :trailing="true"
              variant="ghost"
              color="primary"
              class="mt-3"
              :to="`projects/${item.link}`"
              :ui="{
                variant: {
                  ghost:
                    'text-primary-100 dark:text-primary-100 hover:bg-primary-950',
                },
              }" />
          </div>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Projects',
});

const items = [
  {
    label: 'Finance Tracker',
    defaultOpen: true,
    description:
      'An application for POS Agents to quickly keep track of POS transactions on the go, get financial reports and chat with A.I about their finances.',
    link: 'finance-tracker',
  },
  {
    label: 'Natours Travels',
    description:
      'An application for tourist to book tours to scenic nature spots around the world, with geolocation tagging.',
    link: 'natours-travel',
  },
  {
    label: 'Omnifood Website',
    description:
      'A landing page for an A.I meal planning and delivery company, with modern UI/UX branding and responsive design.',
    link: 'omnifood-website',
  },
  {
    label: 'Natours Website',
    description:
      'A landing page for Natours travels web application, advanced animation, responsive design, and modern UI.',
    link: 'natours-website',
  },
];
</script>
