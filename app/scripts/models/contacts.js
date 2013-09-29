/*global Backbone:false, App:false, _:false*/

'use strict';

App.Models.Contacts = Backbone.Model.extend({
	defaults: {
		activeContactIndex: -1
	},

	contactsCollection: null,

	initialize: function () {
		this.contactsCollection = new App.Collections.Contacts([{
			name: 'Afrodisio Polanco Loya'
		}]);
	},

	getContacts: function () {
		return {
			contacts: this.contactsCollection.toJSON()
		};
	}
});

App.viewmodels.contacts = new App.Models.Contacts();