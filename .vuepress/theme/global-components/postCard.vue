<template>
  <router-link :to="post.path">
    <div
      class="text-gray-300 transform transition delay-100 hover:text-dark-600 dark:text-dark-100 dark:hover:text-gray-200  hover:-translate-y-2 cursor-pointer"
    >
      <div class="flex  gap-x-2 mb-2">
        <p
          v-if="index"
          class="font-semibold text-gray-400 italic text-lg sm:text-xl mb-2"
        >
          # {{ index }}.
        </p>
        <p
          v-if="minimal"
          class="text-lg sm:text-xl text-black font-semibold dark:text-gray-200"
        >
          {{ post.frontmatter.title }}
        </p>
      </div>
      <div :class="minimal ? 'flex gap-x-3' : ''">
        <div
          class="  bg-gray-50 dark:bg-dark-800 mb-3 rounded-md"
          :class="
            minimal ? 'w-20 h-20 flex-shrink-0' : 'aspect-w-10 aspect-h-5'
          "
        >
          <div class="flex justify-center items-center w-full h-full">
            <div
              v-if="!index && !minimal"
              class="absolute bottom-2 right-2 bg-black bg-opacity-50  text-xs max-w-max h-auto px-1 rounded-sm "
            >
              <span class="text-white dark:text-gray-300 italic">
                {{ index ? index : post.frontmatter.series + ' Series' }}.</span
              >
            </div>
            <img
              v-if="post.thumb.isDevicon"
              :src="post.thumb.src"
              :class="minimal ? 'w-12 h-12' : 'w-28 h-28'"
            />
            <span v-else style="font-size:5rem">{{ post.thumb.src }}</span>
          </div>
        </div>
        <div>
          <p
            v-if="!minimal"
            class="font-semibold text-black text-base max-h-12 sm:text-lg sm:max-h-14 line-clamp-2 dark:text-gray-200"
          >
            {{ post.title }}
          </p>
          <div v-if="!minimal" class="flex justify-between items-center">
            <p class="text-xs text-gray-400 ubuntu py-2">
              {{ post.created.str }}
            </p>
            <p class="text-xs text-gray-400 pb-1 ubuntu px-1">
              {{ post.readingTime?.text }}
            </p>
          </div>
          <p
            class="text-sm"
            :class="minimal ? 'line-clamp-3 ' : 'line-clamp-3  my-3 '"
            :style="minimal ? 'height:3.75rem;' : 'height:3.75rem;'"
          >
            {{ post.desc }}
          </p>
          <p
            v-if="minimal"
            class="text-xs text-gray-600 dark:text-gray-400 ubuntu mt-1"
          >
            {{ post.created.str }}
          </p>
        </div>
      </div>
      <div class="line-clamp-1" v-if="!minimal">
        <div class="flex pb-3 gap-x-2 ">
          <div
            v-for="tag in post.frontmatter.tags"
            class="text-sm  text-gray-600 dark:text-gray-400"
          >
            <span class="text-blue-500 font-normal ">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['post', 'index', 'minimal'],
}
</script>
