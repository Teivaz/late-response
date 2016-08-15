const Winston = require('winston')

const logger = new (Winston.Logger)({
	level: 'info',
	transports: [
		new (Winston.transports.File)({ filename: __dirname + '/logs/info.log', json: true })
	],
	exceptionHandlers: [
		new (Winston.transports.File)({ filename: __dirname + '/logs/exceptions.log', json: false })
	],
	exitOnError: false
})

module.exports = logger.info