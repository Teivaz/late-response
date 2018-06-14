const Uri = require('urijs')
const Http = require('http')
const Logger = require('./logger')

const text = require('./text')
const image = require('./image')

const config = {
	l_default: 0,
	l_min: 0, // 1 ms
	l_max: 10000, // 10 s
	t_default: 'text/html',
	t_allowed: {
		'text/html': text.html,
		'text/xml': text.html,
		'text/plain': text.plain,
		'text/markdown': text.plain,
		'image/png': image.png,
		'image/jpeg': image.jpeg,
		'image/svg+xml': image.svg_xml,
		'image/bmp': image.bmp,
		'image/gif': image.gif,
		'image/x-icon': image.ico,
	}
}

Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max)
}

function nothingPlease(res) {
	res.writeHead(404, {'Content-Type': 'text/plain'})
	res.end('404. Not found')
}

function faviconPlease(res){
	res.writeHead(200, {'Content-Type': 'image/x-icon'})
	res.end(image.ico)
}

function servePlease(params, res) {
	var l = Number(params.l) || config.l_default
	l = l.clamp(config.l_min, config.l_max)

	var t = params.t
	if((t in config.t_allowed) === false)
		t = config.t_default

	function responde() {
		res.writeHead(200, {'Content-Type': t})
		res.end(config.t_allowed[t])
	}
	if (l === 0){
		responde()
	}
	else {
		setTimeout(responde, l)
	}
}

var s = Http.createServer(function (req, res) {
	var uri = Uri(req.url)
	var path = uri.pathname()
	if(path === '/favicon.ico'){
		faviconPlease(res)
	}
	else{
		var params = uri.search(true)
		if(path === '/') {
			log('info', req, path, params)
			servePlease(params, res)
		}
		else {
			log('warn', req, path, params)
			nothingPlease(res)
		}
	}
})
s.listen(3200)

function log(level, req, path, params) {
	Logger[level]({
		method: req.method,
		params: params,
		path: path,
		remote: req.headers['x-forwarded-for'],
		referer: req.headers.referer
	})
}
