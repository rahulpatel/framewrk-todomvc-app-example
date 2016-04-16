(function (window) {
	'use strict';

	const framework = require('framewrk');
	const PersistenceClass = require('stores/Persistence');

	framework.setup({ PersistenceClass });

	require('stores/todos');
	require('routes');

	framework.start();

})(window);
