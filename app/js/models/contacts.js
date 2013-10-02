/*global Backbone:false, App:false, _:false*/

/**
 * Created with JetBrains WebStorm.
 * User: irbis
 * Date: 10/2/13
 * Time: 11:44 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

App.Models.Contacts = Backbone.Model.extend({

    contactsCollection: null,

    initialize: function () {
        this.contactsCollection = new App.Collections.Contacts([{
            name: 'Test name for field'
        }]);
    },

    getContacts: function () {
        return {
            contacts: this.contactsCollection.toJSON()
        };
    }

});

App.viewmodels.contacts = new App.Models.Contacts();