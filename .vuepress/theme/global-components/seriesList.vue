<template>
  <div class="bg-gray-100 dark:bg-dark-900">
    <div class=" max-w-screen-lg mx-auto py-6 px-3 ">
      <!-- card -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5"
      >
        <series-card v-for="post in 10" />
      </div>
      <!-- end Card -->
      {{ $page.git }}
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    var pages = this.$pagination?._matchedPages
    pages.forEach((e) => {
      if (e.series) {
        if (this.series[e.series]) {
          this.series[e.series] += 1
        } else {
          this.series[e.series] = 1
        }
      } else {
        if (this.series.Etc) {
          this.series.Etc += 1
        } else {
          this.series.Etc = 1
        }
      }
    })
  },
  data() {
    return {
      series: {},
    }
  },
}
</script>
