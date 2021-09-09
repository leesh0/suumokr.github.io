<template>
  <div>
    {{ pageItems }}
  </div>
</template>

<script>
export default {
  computed: {
    pageItems() {
      const matchedItems = this.$pagination._matchedPages
      return matchedItems
    },
  },
}
</script>
