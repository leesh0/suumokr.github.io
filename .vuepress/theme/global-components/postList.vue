<template>
  <div class="bg-gray-100 dark:bg-dark-900">
    <div class=" max-w-screen-lg mx-auto py-6 px-3 ">
      <!-- card -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5"
      >
        <post-card v-for="post in $pagination._matchedPages" :post="post" />
      </div>
      <!-- end Card -->
    </div>
  </div>
</template>
