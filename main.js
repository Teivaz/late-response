const Uri = require('urijs')
const Http = require('http')

const text = require('./text')

const config = {
	l_default: 1000,
	l_min: 0, // 1 ms
	l_max: 10000, // 10 s
	t_default: 'text/html',
	t_allowed: {
		'text/html': text.html,
		'text/xml': text.html,
		'text/plain': text.plain,
		'text/x-markdown': text.plain,
		'image/gif': require('./image-gif')
	}
}

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max)
}

var s = Http.createServer(function (req, res) {
	var uri = Uri(req.url)
	params = uri.search(true)

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
})
s.listen(3200)
