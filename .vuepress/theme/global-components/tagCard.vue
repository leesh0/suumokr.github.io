<template>
  <div>
    <p class="text-2xl text-gray-600 dark:text-gray-400 mb-2">
      <span class="text-blue-500 dark:text-dark-50 italic mr-1">#</span
      >{{ tag.name }}
    </p>

    <div>
      <router-link :to="post.path">
        class="flex gap-x-2 pb-5 dark:text-gray-300 items-center" v-for="post in
        tag.pages.slice(0, 2)" >
        <div
          class="flex-shrink-0 w-16 h-16 rounded-md bg-gray-50 dark:bg-dark-800  flex justify-center items-center"
        >
          <img
            class="w-10 h-10"
            v-if="post.thumb.isDevicon"
            :src="post.thumb.src"
          />
          <span v-else class="text-3xl">{{ post.thumb.src }}</span>
        </div>
        <div>
          <p class="font-medium text-base h-12 line-clamp-2">
            {{ post.title }}
          </p>
          <span class="text-xs text-gray-400 dark:text-dark-100 ubuntu">{{
            post.created.str
          }}</span>
        </div>
      </router-link>
    </div>

    <router-link
      :to="`/tags/${tag.name}/`"
      class="flex justify-end"
      v-if="tag.pages.length > 2"
    >
      <span class="text-xs text-gray-400 dark:text-gray-600"
        >전체보기({{ tag.pages.length }})
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['tag'],
}
</script>
