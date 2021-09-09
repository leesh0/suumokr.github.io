const devicons = require('../assets/data/devicon.json')
const gitmoji = require('../assets/data/gitmojis.json')
const icons = require('../assets/data/icons.js')
const path = require('path')
const _path = require('path')
const spawn = require('cross-spawn')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
var markDownIt = require('markdown-it'),
  md = new markDownIt()
const plainText = require('markdown-it-plain-text')

const dIcons = icons.icons

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

    // set thumb data
    const thumb = frontmatter.thumb
    const emojis = gitmoji.gitmojis
    if (!thumb) {
      $page.thumb = { isDevicon: false, src: randEmoji() }
    } else {
      var isDev = checkDevicons(thumb)
      var isGit = checkGitmojis(thumb)
      if (isDev) {
        $page.thumb = { isDevicon: true, src: isDev }
      } else if (isGit) {
        $page.thumb = { isDevicon: false, src: isGit }
      } else {
        $page.thumb = { isDevicon: false, src: randEmoji() }
      }
    }
    // end thumb

    // get created time from git logs
    const lang = _computed.$lang
    const createdTimeStamp = getGitCreatedTimeStamp(_filePath)
    const createdTime = transformer(createdTimeStamp, lang)
    $page.created = createdTime
    $page.frontmatter.date = createdTime.str

    // 1. Add extra fields.
    var contentLength = _strippedContent?.length
    var contentString = _strippedContent?.substr(
      0,
      contentLength > 300 ? 300 : contentLength
    )

    md.render(contentString ? contentString : '')
    $page.desc = md.plainText
    $page.series = frontmatter?.series

    // // 2. Change frontmatter.
    // frontmatter.sidebar = 'auto'
    if (!$page.frontmatter.series && $page.desc != '') {
      $page.frontmatter.series = 'Etc'
    }
  },
}

function randEmoji() {
  const emojis = gitmoji.gitmojis
  let emojiId = Math.floor(Math.random() * emojis.length)
  return emojis[emojiId].emoji
}

const checkDevicons = (t) => {
  for (var i = 0; i < dIcons.length; i++) {
    if (dIcons[i].name == t) {
      let url = `https://raw.githubusercontent.com/suumokr/vscode-material-icon-theme/main/icons/${t}.svg`
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
          '--no-merges',
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
