<template>
  <div class="py-5 flex gap-x-5 h-full">
    <img :src="$themeConfig.avatar" class="w-12 h-12 rounded-full bg-blue-50" />
    <div>
      <div class="dark:text-gray-200 ubuntu">
        {{ $themeConfig.name }}
      </div>
      <div class="text-dark-900 dark:text-gray-200">
        <i class="devicon-github-original" />
      </div>
    </div>
  </div>
</template>
