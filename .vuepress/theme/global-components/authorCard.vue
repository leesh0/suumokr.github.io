<template>
  <div class="sticky top-0 md:relative z-10 mb-10">
    <div class="author-card">
      <router-link to="/" class="flex gap-x-3">
        <img
          :src="$themeConfig.avatar"
          class="rounded-full bg-blue-50 w-10 h-10"
        />
        <div>
          <div class="ubuntu dark:text-gray-200">{{ $themeConfig.name }}</div>
          <div class="text-sm text-gray-400 ">{{ $themeConfig.title }}</div>
        </div>
      </router-link>
      <div
        class="select-none cursor-pointer hover:text-blue-500 dark:text-gray-200 md:hidden"
        @click="toc = !toc"
      >
        TOC
      </div>
    </div>
    <div
      v-show="toc"
      class="px-3 absolute w-full bg-white dark:bg-dark-900 max-h-72 overflow-hidden overflow-y-scroll border-b  dark:border-dark-500"
    >
      <toc class="bg-white dark:bg-dark-900 dark:bg-opacity-80" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toc: false,
    }
  },
}
</script>

<style scoped>
.author-card {
  @apply flex justify-between items-center py-2  px-3 max-w-screen-md mx-auto sm:relative mt-3  bg-white backdrop-filter backdrop-blur-sm bg-opacity-70 dark:bg-transparent;
}
</style>
