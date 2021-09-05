<template>
  <div class="items-center py-10">
    <div class="left-0">
      <p class="font-semibold text-gray-400 italic text-xl ">Tag</p>
      <div class="max-w-max">
        <p class="text-2xl font-semibold dark:text-gray-200">{{ pageName }}.</p>
        <div class="border-b-4 border-blue-500" style="width:80%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pageName() {
      const pageTitle = this.$page.frontmatter.title
      return pageTitle
        .split(' ')
        .slice(0, -1)
        .join(' ')
    },
  },
}
</script>
