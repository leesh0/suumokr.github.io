<template>
  <div class="h-full font-sans">
    <div class="relative wrapper flex flex-col">
      <div>
        <navbar />
        <div class="max-w-screen-lg mx-auto px-3 mt-5">
          <infocard />
        </div>
      </div>
      <hometab v-model="tab" />
      <postList
        v-if="$page.frontmatter.title == 'Post'"
        class="h-full flex-grow"
      />
      <seriesList
        v-if="$page.frontmatter.title == 'Series'"
        class="h-full flex-grow"
      />
      <tagsList
        v-if="$page.frontmatter.title == 'Tags'"
        class="h-full flex-grow"
      />
    </div>

    <footer><foot /></footer>
  </div>
</template>

<script>
export default {
  mounted() {
    var mode = localStorage.getItem('dark')
    if (mode == null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        localStorage.setItem('dark', true)
      } else {
        localStorage.setItem('dark', false)
      }
    }
    mode = localStorage.getItem('dark') === 'true' ? true : false
    if (mode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  },
  data() {
    return {
      tab: 1,
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
.logo {
  font-family: 'Rampart One', cursive;
}

html,
body {
  height: 100%;
  width: 100%;
}

.wrapper {
  height: auto;
  min-height: 100%;
  width: 100%;
  padding-bottom: 104px;
}

#app {
  height: 100%;
}
</style>
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
