<template>
  <div
    class="sticky top-0 bg-white pl-3 backdrop-filter backdrop-blur-sm bg-opacity-70 dark:bg-dark-800 z-10"
  >
    <div
      class=" ubuntu flex gap-x-5 text-base  sm:text-base max-w-screen-lg mx-auto "
    >
      <div
        class="tab"
        :class="$page.frontmatter.title == 'Post' ? 'active' : ''"
        @click="$router.push('/')"
      >
        <span>Articles</span>
      </div>
      <div
        class="tab"
        :class="$page.frontmatter.title == 'Series' ? 'active' : ''"
        @click="$router.push('/series/')"
      >
        Series
      </div>
      <div
        class="tab"
        :class="$page.frontmatter.title == 'Tags' ? 'active' : ''"
        @click="$router.push('/tags/')"
      >
        Tags
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab {
  @apply max-w-max font-medium  text-gray-400 pt-3 pb-2 px-2 dark:text-gray-600 select-none cursor-pointer;
}

.tab.active {
  @apply text-black dark:text-gray-300;
}
</style>
