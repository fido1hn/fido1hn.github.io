<template>
  <div class="h-80 -mt-40 md:-mt-36">
    <h1
      class="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-3"
      >Projects Showcase</h1
    >
    <div class="flex justify-center items-center">
      <!-- <UAccordion
        color="primary"
        variant="soft"
        size="xl"
        :items="items"
        :ui="{ default: { class: 'bg-primary-100' } }">
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

        <template #finance-tracker>
          <div class="text-gray-900 dark:text-white text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              An application for POS Agents to quickly keep track of POS
              transactions on the go and get financial reports.
            </p>
          </div>
        </template>
      </UAccordion> -->

      <!-- <img src="/images/finance-tracker.png" alt="" class="h-96 w-96" /> -->
      <NuxtImg
        provider="cloudinary"
        src="al0mnnmfnq1lebj1jxmb.png"
        sizes="320px md:369px"
        height="md:380px"
        class="mt-2 md:mt-5"
        :modifiers="{ roundCorner: '20' }" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Projects',
});

// const items = [
//   {
//     label: 'Finance Tracker',
//     slot: 'finance-tracker',
//   },
// ];
</script>
