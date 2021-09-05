<template>
  <div class="py-10 flex justify-center text-sm text-gray-500 d">
    © Suumokr. Powered by GitHub Pages.
  </div>
</template>

<script>
const yyyy = new Date().getFullYear()
export default {
  data() {
    return {
      yyyy,
    }
  },
}
</script>

<style>
footer {
  height: 104px;
  position: relative;
  transform: translateY(-100%);
}
</style>
