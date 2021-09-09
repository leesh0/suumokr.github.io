<template>
  <div class="bg-white dark:bg-dark-900">
    <div
      class=" mx-auto py-6 px-3 "
      :class="minimal ? 'max-w-screen-md' : 'max-w-screen-lg'"
    >
      <!-- card -->
      <div
        v-if="orderOption"
        class="flex justify-end py-10 text-gray-600 gap-x-1 select-none"
      >
        <div class="flex items-center cursor-pointer" @click="changeOrder">
          <Descending v-if="toOrder == 'Desc'" class="w-5 h-5" />
          <Ascending v-else class="w-5 h-5" />
          <span>{{ toOrder }}</span>
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-x-5 "
        :class="
          minimal ? 'gap-y-14' : 'gap-y-20 sm:grid-cols-2 lg:grid-cols-3 '
        "
      >
        <post-card
          v-for="(post, idx) in posts"
          :post="post"
          :index="index ? calcIndex(idx) : false"
          :minimal="minimal"
        />
      </div>
      <!-- end Card -->

      <!-- paginations -->
      <infinite-loading class="mt-20" @infinite="infinite" spinner="spiral">
        <div slot="spinner">Loading...</div>
        <div slot="no-more" class="dark:text-gray-300 text-gray-500">
          마지막 페이지 입니다.
        </div>
        <div
          slot="no-results"
          class="dark:text-gray-300 text-gray-500 text-xs"
        ></div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import Ascending from '@carbon/icons-vue/es/sort--ascending/32.js'
import Descending from '@carbon/icons-vue/es/sort--descending/32.js'
import InfiniteLoading from 'vue-infinite-loading'

const pageMax = 10

export default {
  components: { Ascending, Descending, InfiniteLoading },
  beforeMount() {
    console.log('init', this.$pagination)
    if (this.reverse == true) {
      this.orders = this.orders.slice().reverse()
    }
  },
  props: ['index', 'orderOption', 'minimal'],
  data() {
    return {
      orders: ['Desc', 'Asc'],
      currentPage: 1,
    }
  },
  computed: {
    posts() {
      let pages = this.$pagination._matchedPages
      if (this.orders[0] == 'Asc') {
        return pages
          .slice()
          .reverse()
          .slice(0, pageMax * this.currentPage)
      } else {
        return pages.slice(0, pageMax * this.currentPage)
      }
    },
    orderby() {
      return this.orders[0]
    },
    toOrder() {
      return this.orders.slice(-1)[0]
    },
  },
  methods: {
    changeOrder() {
      this.orders = this.orders.slice().reverse()
    },
    calcIndex(idx) {
      if (this.orderby == 'Asc') {
        return idx + 1
      } else {
        return this.posts.length - idx
      }
    },
    infinite($state) {
      const pageData = this.$pagination._matchedPages
      const lastPage =
        pageData.length / pageMax + (pageData.length % pageMax > 0 ? 1 : 0)
      this.currentPage += 1
      // console.log(this.currentPage, lastPage)
      if (this.currentPage >= lastPage) {
        $state.complete()
      } else {
        $state.loaded()
      }
    },
  },
}
</script>
