const markdown = require('markdown-js')
const fs = require('fs')

const plain = fs.readFileSync('readme.md', 'utf-8')
const html = 
'<html>'+
	'<head>'+
		'<link rel="stylesheet" href="http://static.teivaz.com/github-markdown.css"/>'+
	'</head>'+
	'<body class="markdown-body">' + 
		markdown.parse(plain) + 
	'</body>' +
'</html>'

module.exports = {
	plain: plain,
	html: html,
}
