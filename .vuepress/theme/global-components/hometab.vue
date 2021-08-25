<template>
  <div class="sticky top-0 bg-white dark:bg-dark-800 z-10">
    <div
      class="  flex gap-x-5 text-base  sm:text-base max-w-screen-lg mx-auto "
    >
      <div
        class="tab"
        :class="value == 1 ? 'active' : ''"
        @click="changeTab(1)"
      >
        <span>Articles ({{ $pagination._matchedPages.length }})</span>
      </div>
      <div
        class="tab"
        :class="value == 2 ? 'active' : ''"
        @click="changeTab(2)"
      >
        Series
      </div>
      <div
        class="tab"
        :class="value == 3 ? 'active' : ''"
        @click="changeTab(3)"
      >
        Tags
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 1,
    },
  },
  methods: {
    changeTab(tab) {
      this.value = tab
      this.$emit('input', tab)
    },
  },
}
</script>

<style scoped lang="scss">
.tab {
  @apply max-w-max font-medium  text-gray-400 py-3 px-2 dark:text-gray-600 select-none cursor-pointer;
}

.tab.active {
  @apply border-b-2 border-gray-600 text-gray-600 dark:text-gray-300 dark:border-gray-300;
}
</style>
