<template>
  <div>
    <div class="max-w-screen-lg mx-auto px-3">
      <navbar />
      <infocard />
    </div>
    <hometab />
    <postList />
    {{ $site }}
    qqq{{ $pagination }}qqqq
    <div class="text-blue-500">aaabbbsss</div>
    <foot />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
.logo {
  font-family: 'Rampart One', cursive;
}
</style>
