<template>
  <router-link :to="`/series/${data.name}/`">
    <div class="flex px-2 gap-x-5">
      <div
        class="w-20 h-20 rounded-md bg-gray-50 dark:bg-dark-800  flex justify-center items-center thumb-text flex-shrink-0"
      >
        <img
          v-if="data.thumb.isDevicon"
          :src="data.thumb.src"
          class="w-12 h-12"
        />
        <span v-else>{{ data.thumb.src }}</span>
      </div>
      <div>
        <p
          class="line-clamp-2 font-medium text-lg h-14 pb-5 dark:text-gray-200"
        >
          {{ data.name }}
        </p>
        <p class="text-xs pt-2 text-gray-400 bottom-0 h-full">
          {{ data.cnt }} articles
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.thumb-text {
  font-size: 3rem;
}
</style>
