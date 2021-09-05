<template>
  <div ref="markdown w-full">
    <Content class="dark" />
  </div>
</template>

<script>
import 'prismjs/themes/prism-tomorrow.css'
export default {}
</script>

<style lang="scss">
.CodeMirror {
  height: auto !important;
}
pre > code {
  @apply text-sm;
  font-family: 'Ubuntu', sans-serif;
}
</style>
