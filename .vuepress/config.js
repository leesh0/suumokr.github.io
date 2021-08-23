const pagination = {
  lengthPerPage: 10000, // A temporary solution until the paging component is completed
}

const defaultBlogPluginConfig = {
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      itemPermalink: '/:slug',
      pagination: pagination,
    },
  ],
  frontmatters: [
    {
      id: 'tag',
      keys: ['tag', 'tags'],
      path: '/tag/',
      layout: 'Tag',
      frontmatter: { title: 'Tag' },
      itemlayout: 'Tag',
      pagination: pagination,
    },
  ],
}

const blogPluginConfig = Object.assign({}, defaultBlogPluginConfig)
module.exports = {
  title: 'Suumokr',
  plugins: [
    '@kawarimidoll/tailwind',
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/blog',
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
      },
    ],
  ],
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.13.0/devicon.min.css',
      },
    ],
  ],
  themeConfig: {
    lastUpdated: true,
    avatar: 'https://avatars.githubusercontent.com/u/57043683?v=4',
    name: 'Suumokr',
    location: 'Korea',
    sites: [{ fav: '', name: 'TIL.', url: '' }],
    skills: {
      // https://devicon.dev/
      lang: ['javascript', 'python'],
      framework: ['vuejs', 'django'],
    },
  },
}
