<template>
  <div class="bg-gray-100 py-20 flex justify-center">
    Suumokr (c) {{ yyyy }}
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
