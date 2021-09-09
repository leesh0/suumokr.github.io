<template>
  <div>
    <p
      v-for="head in $page.headers"
      class="truncate toc-item"
      :class="`level-${head.level}`"
      @click="moveTo(head.slug)"
    >
      {{ head.title }}
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    moveTo(id) {
      document.getElementById(id).scrollIntoView()
    },
  },
}
</script>

<style scoped>
.toc-item {
  @apply text-sm sm:text-base select-none cursor-pointer;
}
.toc-item.level-2 {
  @apply text-gray-600 dark:text-gray-600 py-1 hover:text-blue-500 dark:hover:text-blue-500;
}

.toc-item.level-3 {
  @apply pl-6 text-gray-500 dark:text-gray-600 py-1 hover:text-blue-500 dark:hover:text-blue-500;
}
</style>
