const fs = require('fs')

module.exports = function(url, file) {
	var oReq = new XMLHttpRequest()
	oReq.open("GET", url, true)
	oReq.responseType = "arraybuffer"

	oReq.onload = function(oEvent) {
		var arrayBuffer = oReq.response
		if (arrayBuffer) {
			var byteArray = new Uint8Array(arrayBuffer)
			fs.write(file, 'module.exports = ['+byteArray.join(',')+']')
		}
	}
	oReq.send(null)
}