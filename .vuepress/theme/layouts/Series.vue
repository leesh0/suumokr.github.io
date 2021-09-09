<template>
  <div class="h-full ">
    <div class="relative wrapper flex flex-col">
      <div>
        <ClientOnly>
          <navbar />
        </ClientOnly>
        <div class="max-w-screen-md mx-auto px-3">
          <series-info />
        </div>
      </div>
      <postList
        :minimal="true"
        :orderOption="true"
        :index="true"
        class="h-full flex-grow"
      />
    </div>
    <footer><foot /></footer>
  </div>
</template>

<script>
export default {}
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
