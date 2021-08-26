const pagination = {
  lengthPerPage: 10, // A temporary solution until the paging component is completed
}

const defaultBlogPluginConfig = {
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      itemPermalink: '/post/:slug',
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
    require('./plugins/page'),
    '@kawarimidoll/tailwind',
    'vuepress-plugin-nprogress',
    [
      'vuepress-plugin-git-log',
      {
        additionalArgs: '--no-merges',
        onlyFirstAndLastCommit: true,
      },
    ],
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/blog',
      {
        sorter: (prev, next) => {
          const prevTime = prev.created.timestamp
          const nextTime = next.created.timestamp
          return prevTime - nextTime < 0 ? -1 : 1
        },
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
            itemPermalink: '/:slug',
            pagination: {
              lengthPerPage: 100000000,
            },
          },
        ],
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
1629725874000
1629917125000
1629725874000
