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
  },
}
