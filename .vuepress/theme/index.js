const path = require('path')

module.exports = {
  layoutDir: 'layouts',
  plugins: [
    '@vuepress/back-to-top',
    'vuepress-plugin-reading-time',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/register-components'],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs')
          const utc = require('dayjs/plugin/utc')
          const timezone = require('dayjs/plugin/timezone')
          dayjs.extend(utc)
          dayjs.extend(timezone)
          return dayjs(timestamp)
            .tz('Asia/Tokyo')
            .format('YYYY/MM/DD HH:mmZ')
        },
      },
    ],
  ],
}
