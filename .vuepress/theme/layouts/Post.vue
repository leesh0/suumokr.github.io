<template>
  <div>
    <navbar />
    <div class="max-w-screen-md mx-auto px-3">
      <div id="postInfo"></div>
      <Content class="prose-sm " />
    </div>
    <foot />
  </div>
</template>

<script>
import 'prismjs/themes/prism-tomorrow.css'
export default {}
</script>

<style lang="scss">
.dark {
  @apply bg-dark-900;
}

.bg-dark {
  @apply bg-dark-800;
}

.bg-dark2 {
  @apply bg-dark-900;
}
</style>
