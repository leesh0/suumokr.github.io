<template>
  <div class="px-3 ">
    <div class="py-10 relative">
      <!-- <div
        class="absolute top-0 left-0 text-sm py-3 flex gap-x-3 items-center text-gray-600 text-lg dark:text-gray-400"
      >
        <i class="devicon-github-original "></i>
      </div> -->
      <div class="flex items-center gap-x-3 justify-start">
        <img
          :src="$themeConfig.avatar"
          class="w-12 h-12 bg-blue-50 rounded-full"
        />
        <div>
          <p class="mb-2 ubuntu dark:text-gray-200">
            {{ $themeConfig.name }}
          </p>
          <div class="flex gap-x-3 items-center dark:text-gray-400">
            <i class="devicon-github-original " />
          </div>
        </div>
      </div>

      <div class="my-5 text-gray-400 text-sm mb-20 ">
        📖 일본에서 유학중인 백엔드지망 학부생입니다. 공부한내용을 가끔씩
        정리하는곳입니다. 잘못된 부분이 있다면 댓글로 알려주시면 감사하겠습니다!
      </div>

      <div class="mb-3 max-w-max">
        <p class="text-gray-400 text-sm text-medium ubuntu">Sites</p>
        <div v-for="site in $themeConfig.sites" class="mx-auto">
          <a class="flex items-center" :href="site.url">
            <img :src="site.fav" class="w-4 h-4" v-if="site.fav" />
            <span class="text-gray-500">{{ site.name }}</span>
          </a>
        </div>
        <div class="border-b-2 border-blue-500 " style="width:80%" />
      </div>

      <div class="max-w-max">
        <p class="text-gray-400 text-sm text-medium ubuntu">
          Language ・ Frameworks
        </p>
        <div class="max-w-max">
          <div class="flex gap-x-3 items-center text-gray-600 mt-1">
            <div class="flex gap-x-1 items-center">
              <i
                v-for="lang in $themeConfig.skills.lang"
                :class="`devicon-${lang}-plain`"
              ></i>
            </div>

            <div class="flex gap-x-1 items-center">
              <i
                v-for="fw in $themeConfig.skills.framework"
                :class="`devicon-${fw}-plain`"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
