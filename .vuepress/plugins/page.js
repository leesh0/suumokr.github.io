const path = require('path')
const _path = require('path')
const spawn = require('cross-spawn')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
var markDownIt = require('markdown-it'),
  md = new markDownIt()
const plainText = require('markdown-it-plain-text')

md.use(plainText)

module.exports = {
  extendPageData($page) {
    const {
      _filePath, // file's absolute path
      _computed, // access the client global computed mixins at build time, e.g _computed.$localePath.
      _content, // file's raw content string
      _strippedContent, // file's content string without frontmatter
      key, // page's unique hash key
      frontmatter, // page's frontmatter object
      regularPath, // current page's default link (follow the file hierarchy)
      path, // current page's real link (use regularPath when permalink does not exist)
    } = $page

    // get created time from git logs
    const lang = _computed.$lang
    const createdTimeStamp = getGitCreatedTimeStamp(_filePath)
    $page.created = transformer(createdTimeStamp, lang)

    // 1. Add extra fields.
    var contentLength = _strippedContent?.length
    var contentString = _strippedContent?.substr(
      0,
      contentLength > 300 ? 300 : contentLength
    )

    md.render(contentString ? contentString : '')
    $page.desc = md.plainText
    $page.series = frontmatter?.series
    $page.absPath =
      _path.dirname(_filePath ? _filePath : '') +
      _path.basename(_filePath ? _filePath : '')

    // // 2. Change frontmatter.
    // frontmatter.sidebar = 'auto'
  },
}

function transformer(timestamp, lang) {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  return {
    str: dayjs(timestamp)
      .tz('Asia/Tokyo')
      .format('YYYY/MM/DD HH:mm'),
    timestamp,
  }
}
// 1629725874
function getGitCreatedTimeStamp(filePath) {
  let lastUpdated
  try {
    let gitLog = spawn
      .sync(
        'git',
        [
          'log',
          '--reverse',
          '--oneline',
          '--format=%at',
          path.basename(filePath),
        ],
        {
          cwd: path.dirname(filePath),
        }
      )
      .stdout.toString('utf-8')

    lastUpdated = parseInt(gitLog.split('\n')[0]) * 1000
  } catch (e) {
    /* do not handle for now */
  }
  return lastUpdated
}
