<template>
  <div class="py-4 sm:py-8 px-3 sm:px-10">
    <div class="flex justify-between items-center">
      <router-link to="/">
        <div>
          <span class="brand text-2xl text-black dark:text-gray-200">
            {{ $themeConfig.title }}
          </span>
          <span class="ubuntu text-xs text-blue-600 px-1 py-0.5">{{
            siteType
          }}</span>
        </div>
      </router-link>
      <div class="flex gap-x-3 items-center">
        <router-link
          :to="site.url"
          v-for="site in $themeConfig.sites"
          class="ubuntu underline-dotted underline pr-2 text-gray-600 dark:text-gray-300"
        >
          {{ site.name }}
        </router-link>
        <Contrast
          @click="toggleMode"
          class="w-6 h-6 text-dark-800 hover:text-blue-500  cursor-pointer select-none dark:text-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Contrast from '@carbon/icons-vue/es/brightness-contrast/32'
export default {
  components: { Contrast },
  mounted() {
    var mode = window.localStorage.getItem('dark')
    if (mode == null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        window.localStorage.setItem('dark', true)
      } else {
        window.localStorage.setItem('dark', false)
      }
    }
    mode = window.localStorage.getItem('dark') === 'true' ? true : false
    if (mode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  },
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
  computed: {
    siteType() {
      const rootId = this.$page.path.split('/')[1]
      return rootId !== 'til' ? 'Blog.' : 'TIL.'
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
