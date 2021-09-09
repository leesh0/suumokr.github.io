<template>
  <div id="postInfo" class="max-w-screen-md mx-auto">
    <div v-if="$page.thumb.isDevicon" class="pt-10 px-3">
      <div class="flex justify-center items-center ">
        <img :src="$page.thumb.src" class="w-40 h-40 " />
      </div>
      <div>
        <p class="italic text-gray-400 font-medium text-lg">Post</p>
        <p class="text-2xl sm:text-3xl font-semibold dark:text-gray-200">
          {{ $page.title }}
        </p>
        <div
          class="flex items-center justify-between text-xs md:text-sm text-gray-400 ubuntu mt-1"
        >
          <div>{{ $page.created.str }}</div>
          <div>
            {{ $page.readingTime.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
