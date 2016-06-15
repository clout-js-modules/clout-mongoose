/*!
 * clout-mongoose
 * Copyright(c) 2015 - 2016 Muhammad Dadu
 * MIT Licensed
 */
const
	debug = require('debug')('clout-mongoose:hooks/models'),
	mongoose = require('mongoose');

module.exports = {
	mongoose: {
		event: 'start',
		priority: 'MODEL',
		fn: function (next) {
			var conf = this.config.mongoose,
				uri = conf.uri,
				opts = conf.opts || {};

			if (uri === '<mongodb://localhost/myapp>') {
				debug('Configuration for clout-mongoose missing')
				this.logger.warn('Configuration for clout-mongoose missing');
				return next();
			}

			mongoose.connect(uri, opts);

			this.mongoose = mongoose;

			debug('mongoose initialized');
			next();
		}
	}
};
