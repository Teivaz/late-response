const Uri = require('urijs')
const Http = require('http')

const config = {
	l_default: 1000,
	l_min: 1, // 1 ms
	l_max: 10000, // 10 s
	t_default: 'text/plain',
	t_allowed: {
		'text/plain': require('./text-plain'),
		'image/gif': require('./image-gif')
	}
}

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
}

var s = Http.createServer(function (req, res) {
	var uri = Uri(req.url)
	params = uri.search(true)

	var l = Number(params.l) || config.l_default
	l = l.clamp(config.l_min, config.l_max)

	var t = params.t
	if( (t in config.t_allowed) == false)
		t = config.t_default

	setInterval(function() {
		res.writeHead(200, {'Content-Type': t})
		res.end(config.t_allowed[t]);
	}, l)
})
s.listen(3200)