<template>
  <div class="py-4 sm:py-8 px-3 lg:px-20">
    <div class="flex justify-between items-center">
      <router-link to="/">
        <div>
          <span class="brand text-2xl text-black dark:text-gray-200">
            開発記録
          </span>
          <span class="ubuntu text-xs text-blue-600 px-1 py-0.5">Blog.</span>
        </div>
      </router-link>
      <div class="flex gap-3 items-center">
        <Contrast
          @click="toggleMode"
          class="w-6 h-6 text-dark-800 hover:text-blue-500  cursor-pointer select-none dark:text-gray-400"
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
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Ubuntu:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@600&display=swap');
.search-box input:focus {
  border-color: blue !important;
}

.brand {
  font-family: 'Shippori Mincho B1', serif;
}

.ubuntu {
  font-family: 'Ubuntu', sans-serif;
}
</style>
