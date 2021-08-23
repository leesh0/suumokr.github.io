<template>
  <div class="py-4 ">
    <div class="flex justify-between items-center">
      <div>
        <span class="logo text-2xl text-gray-600">{{ $site.title }}</span>
        <span class="text-xs bg-gray-500 text-white px-1 py-0.5 rounded-sm ml-1"
          >Blog.</span
        >
      </div>

      <div class="flex gap-3 items-center">
        <SearchBox />
        <Contrast
          class="w-6 h-6 hover:text-blue-500  hover:cursor-help select-none"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox },
}
</script>

<style>
.search-box input:focus {
  border-color: blue !important;
}
</style>
