const markdown = require('markdown-js')
const fs = require('fs')

const md = fs.readFileSync('readme.md', 'utf-8')

module.exports = markdown.parse(md)
