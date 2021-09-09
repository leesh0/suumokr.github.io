<template>
  <div>
    <script
      src="https://utteranc.es/client.js"
      repo="suumokr/suumokr.github.io"
      issue-term="pathname"
      :theme="commentTheme"
      crossorigin="anonymous"
      async
    ></script>
  </div>
</template>
<script>
export default {
  computed: {
    commentTheme() {
      return window.localStorage.getItem('dark') === 'true'
        ? 'github-dark'
        : 'github-light'
    },
  },
}
</script>
