<template>
  <div class="py-4 ">
    <div class="flex justify-between items-center">
      <div>
        <span class="logo text-2xl text-gray-600 dark:text-gray-200">{{
          $site.title
        }}</span>
        <span
          class="text-xs bg-gray-500 text-white px-1 py-0.5 rounded-sm ml-1 dark:bg-dark-900"
          >Blog.</span
        >
      </div>

      <div class="flex gap-3 items-center">
        <Contrast
          @click="toggleMode"
          class="w-6 h-6 text-gray-600 hover:text-blue-500  cursor-pointer select-none dark:text-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMode() {
      var isDark = localStorage.getItem('dark') === 'true' ? true : false
      localStorage.setItem('dark', !isDark)
      if (!isDark) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    },
  },
}
</script>

<style>
.search-box input:focus {
  border-color: blue !important;
}
</style>
