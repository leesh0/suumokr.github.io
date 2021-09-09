<template>
  <div class="py-5 flex gap-x-5 h-full">
    <img :src="$themeConfig.avatar" class="w-12 h-12 rounded-full bg-blue-50" />
    <div>
      <div class="dark:text-gray-200 ubuntu">
        {{ $themeConfig.name }}
      </div>
      <a
        v-if="$themeConfig.sns.github"
        :href="`https://github.com/${$themeConfig.sns.github}`"
        class="text-dark-900 dark:text-gray-200"
      >
        <i class="devicon-github-original" />
      </a>
    </div>
  </div>
</template>
