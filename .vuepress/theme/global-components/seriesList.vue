<template>
  <div class="bg-gray-100 dark:bg-dark-900">
    <div class=" max-w-screen-lg mx-auto py-6 px-3 ">
      <!-- card -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5"
      >
        <series-card v-for="s in series" :data="s" />
      </div>
      <!-- end Card -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    series() {
      const seriesObj = this.$frontmatterKey.list
      let series = []
      for (const e of seriesObj) {
        series.push({
          name: e.name,
          thumb: e.pages.slice(-1)[0].thumb,
          cnt: e.pages.length,
        })
      }
      return series
    },
  },
}
</script>
