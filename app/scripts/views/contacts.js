/*global $:false, Backbone:false, App:false, Handlebars:false*/

'use strict';

App.Views.Contacts = Backbone.View.extend({
	tagName: 'div',
	className: 'b-contacts',
	model: App.viewmodels.contacts,
	template: Handlebars.compile($('#table').html()),

	initialize: function () {
		this.render();
		this.listenTo(App.viewmodels.contacts.contactsCollection, 'all', this.render);
	},

	render: function () {
		this.$el
			.html(this.template(this.model.getContacts()))
			.appendTo(App.view.partials.$table);
	}

});

