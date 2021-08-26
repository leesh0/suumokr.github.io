<template>
  <div
    class="text-gray-400 transform transition delay-100 hover:text-dark-600 dark:text-dark-50 dark:hover:text-gray-200  hover:-translate-y-2 cursor-pointer"
  >
    <p class="font-bold text-gray-400 italic text-sm sm:text-base">
      # {{ post.frontmatter.series ? post.frontmatter.series : 'Etc' }}.
    </p>
    <p
      class="font-semibold text-gray-700 text-base max-h-12 sm:text-lg sm:max-h-14 line-clamp-2 dark:text-gray-200"
    >
      {{ post.title }}
    </p>
    <p class="line-clamp-4 text-sm my-3 h-20">{{ post.desc }}</p>
    <div class="flex pb-3 gap-x-2">
      <div
        v-for="tag in post.frontmatter.tags"
        class="text-sm font-medium text-gray-600 dark:text-gray-400"
      >
        <span>#{{ tag }}</span>
      </div>
    </div>
    <div class="flex gap-x-3 items-center">
      <div
        class="w-10 h-10 bg-gray-50 flex justify-center items-center text-2xl rounded-md dark:bg-gray-700"
      >
        <img v-if="isDevicon" :src="thumb" class="w-7 h-7" />
        <span v-else>{{ thumb }}</span>
      </div>
      <div>
        <p class="text-xs text-gray-400 pb-1">{{ post.readingTime.text }}</p>
        <p class="text-xs text-gray-400 ">{{ post.created.str }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import devicons from '@theme/assets/data/devicon.json'
import gitmoji from '@theme/assets/data/gitmojis.json'

const checkDevicons = (t) => {
  for (var i = 0; i < devicons.length; i++) {
    if (devicons[i].name == t) {
      let version = devicons[i].versions.svg[0]
        ? devicons[i].versions.svg[0]
        : 'original'
      let url = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devicons[i].name}/${devicons[i].name}-${version}.svg`
      return url
    }
  }
  return false
}

const checkGitmojis = (t) => {
  var emojis = gitmoji.gitmojis
  for (var i = 0; i < emojis.length; i++) {
    if (emojis[i].code == t) {
      return emojis[i].emoji
    }
  }
  return false
}

export default {
  beforeMount() {
    this.setThumb()
  },
  props: ['post'],
  data() {
    return {
      devicons,
      isDevicon: false,
      thumb: undefined,
    }
  },
  methods: {
    setThumb() {
      const thumb = this.post.frontmatter.thumb
      const emojis = gitmoji.gitmojis
      console.log(this.post.frontmatter)
      if (!thumb) {
        this.thumb = this.randEmoji()
        return null
      }
      var isDev = checkDevicons(thumb)
      if (isDev) {
        this.isDevicon = true
        this.thumb = isDev
        return null
      }
      var isGit = checkGitmojis(thumb)
      if (isGit) {
        this.thumb = isGit
        return null
      }

      this.thumb = this.randEmoji()

      return null
    },
    randEmoji() {
      const emojis = gitmoji.gitmojis
      let emojiId = Math.floor(Math.random() * emojis.length)
      return emojis[emojiId].emoji
    },
  },
}
</script>
