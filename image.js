const fs = require('fs')

const png = fs.readFileSync('resources/logo.png')
const favicon_png = fs.readFileSync('resources/favicon.png')
const jpg = fs.readFileSync('resources/logo.jpg')
const svg = fs.readFileSync('resources/logo.svg', 'utf-8')
const bmp = fs.readFileSync('resources/favicon.bmp')
const gif = fs.readFileSync('resources/logo.gif')

module.exports = {
	favicon_png: favicon_png,
	png: png,
	jpeg: jpg,
	svg_xml: svg,
	bmp: bmp,
	gif: gif,
}
