const markdown = require('markdown-js')
const fs = require('fs')

const plain = fs.readFileSync('readme.md', 'utf-8')
const html = markdown.parse(plain)

module.exports = {
	text: plain,
	html: html,
}
