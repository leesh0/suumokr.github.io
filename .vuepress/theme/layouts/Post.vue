<template>
  <div>
    <ClientOnly>
      <navbar />
    </ClientOnly>
    <postInfo />
    <author-card />

    <div class="flex items-center max-w-screen-md mx-auto px-3 gap-x-3 mb-10">
      <router-link
        :to="`/tags/${tag}`"
        class="border px-3 py-0.5 rounded-full text-sm text-gray-600 dark:border-dark-200 dark:text-gray-400"
        v-for="tag in $page.frontmatter.tags"
      >
        <span class="text-blue-500">#</span>{{ tag }}
      </router-link>
    </div>

    <router-link
      :to="`/series/${$page.frontmatter.series}`"
      class="flex items-center justify-between gap-x-3 max-w-screen-md mx-auto px-3 my-10 bg-gray-50 dark:bg-dark-800 py-3 "
    >
      <div>
        <div class="text-gray-400 italic font-medium dark:text-gray-600">
          Series.
        </div>
        <div class="dark:text-gray-200 text-xl font-semibold">
          {{ $page.frontmatter.series }}
        </div>
      </div>
      <div class="flex-shrink-0">
        <img
          src="https://raw.githubusercontent.com/suumokr/vscode-material-icon-theme/main/icons/folder-docs.svg"
          class="w-10 h-10"
        />
      </div>
    </router-link>
    <div class="relative">
      <div class="hidden xl:block sticky top-0 max-w-screen-md mx-auto">
        <div class="absolute -right-64 top-10 w-64 ">
          <toc class="border-l-2 pl-3 ml-3 dark:border-dark-100" />
        </div>
      </div>
      <Content class="md-content" />
    </div>
    <div class="mt-10 max-w-screen-md mx-auto">
      <ClientOnly>
        <utterances />
      </ClientOnly>
    </div>

    <foot />
  </div>
</template>

<script>
import '@theme/styles/vscode.css'
export default {}
</script>

<style lang="scss">
.dark {
  @apply bg-dark-900;
}

.bg-dark {
  @apply bg-dark-800;
}

.bg-dark2 {
  @apply bg-dark-900;
}

.md-content {
  @apply prose-sm sm:prose dark:prose-dark mx-auto sm:max-w-screen-md max-w-screen-md px-3;
}
</style>
