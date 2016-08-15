const fs = require('fs')

const png = fs.readFileSync('resources/logo.png')
const jpg = fs.readFileSync('resources/logo.jpg')
const svg = fs.readFileSync('resources/logo.svg', 'utf-8')
const bmp = fs.readFileSync('resources/favicon.bmp')
const gif = fs.readFileSync('resources/logo.gif')
const ico = fs.readFileSync('resources/favicon.ico')

module.exports = {
	png: png,
	jpeg: jpg,
	svg_xml: svg,
	bmp: bmp,
	gif: gif,
	ico: ico,
}
