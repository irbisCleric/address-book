/*global Backbone:false, App:false*/

'use strict';

App.Routers.Workspace = Backbone.Router.extend({
	routes: {
		'': 'index',
		'index': 'index'
	},

	index: function () {
		// #index
		App.router.navigate('index');
		new App.Views.Contacts();
	}
});