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
    'element-ui',
    require('./theme/plugins/page'),
    '@kawarimidoll/tailwind',
    'vuepress-plugin-nprogress',
    [('@vuepress/back-to-top', true)],
    [
      '@vuepress/blog',
      {
        sitemap: {
          hostname: 'http://localhost:8000',
        },
        feed: {
          canonical_base: 'http://localhost:8080',
        },
        frontmatters: [
          {
            id: 'series',
            keys: ['series'],
            path: '/series/',
            layout: 'IndexPost',
            scopeLayout: 'Series',
          },
          {
            id: 'tags',
            keys: ['tag', 'tags'],
            path: '/tags/',
            layout: 'IndexPost',
            scopeLayout: 'Tags',
          },
        ],
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/',
            itemPermalink: 'blog/:slug',
            pagination: {
              lengthPerPage: 100000000,
            },
          },
          {
            id: 'til',
            dirname: '_til',
            path: '/til/',
            layout: 'TIL',
            itemPermalink: 'til/:year/:month/:day/:slug',
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
    title: '開発記録',
    location: 'Korea',
    sns: { github: 'suumokr' },
    sites: [{ fav: '', name: 'TIL.', url: '/til/' }],
    skills: {
      // https://devicon.dev/
      lang: ['javascript', 'python'],
      framework: ['vuejs', 'django'],
    },
  },
}
