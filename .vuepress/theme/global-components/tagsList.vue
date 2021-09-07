<template>
  <div class="bg-transparent">
    <div class=" max-w-screen-lg mx-auto py-6 px-3 ">
      <!-- card -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-5"
      >
        <tag-card v-for="tag in $frontmatterKey.list" :tag="tag" />
      </div>
      <!-- end Card -->
    </div>
  </div>
</template>

<style scoped>
.underline-gray-500 {
  --tw-line-opacity: 1;
  -webkit-text-decoration-color: rgba(107, 114, 128, var(--tw-line-opacity));
  text-decoration-color: rgba(107, 114, 128, var(--tw-line-opacity));
}
</style>
