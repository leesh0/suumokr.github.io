<template>
  <div class="px-3 ">
    <div class="text-center py-10 relative">
      <div
        class="absolute top-0 left-0 text-sm py-3 flex gap-x-3 items-center text-gray-600 text-lg dark:text-gray-400"
      >
        <i class="devicon-github-original "></i>
      </div>
      <img :src="$themeConfig.avatar" class="w-10 h-10 mx-auto" />
      <hr class="w-20 mx-auto dark:border-black" />
      <p
        class="ubuntu text-lg text-black  max-w-min mx-auto px-2 rounded-sm mt-2 dark:text-gray-300"
      >
        {{ $themeConfig.name }}
      </p>
      <div class="flex justify-center items-center text-xs text-gray-400">
        <Location class="w-3 h-3 " />{{ $themeConfig.location }}
      </div>
      <div id="sites" class="gap-x-3 flex items-center py-3">
        <div v-for="site in $themeConfig.sites" class="mx-auto">
          <a class="flex items-center" :href="site.url">
            <img :src="site.fav" class="w-4 h-4" v-if="site.fav" />
            <span class="text-gray-500 underline-dotted underline">{{
              site.name
            }}</span>
          </a>
        </div>
      </div>
      <div class="gap-y-3">
        <div id="langs" class="flex gap-x-1 justify-center text-gray-600 py-2">
          <i
            v-for="lang in $themeConfig.skills.lang"
            :class="`devicon-${lang}-plain`"
          ></i>
        </div>

        <div id="langs" class="flex gap-x-1 justify-center text-gray-600 py-2">
          <i
            v-for="fw in $themeConfig.skills.framework"
            :class="`devicon-${fw}-plain`"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
