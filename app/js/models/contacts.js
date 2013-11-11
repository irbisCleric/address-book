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
        this.contactsCollection = new App.Collections.Contacts([
            {name: 'Dretinon'},
            {name: 'Aughos'},
            {name: 'Nalnsay'},
            {name: 'Thergar'},
            {name: 'Morlye'},
            {name: 'Ight\'pola'},
            {name: 'Erutan'}

        ]);
    },

    getContacts: function () {
        return {
            contacts: this.contactsCollection.toJSON()
        };
    },

    addContactData: function (contacts) {
        if (_.some(_.toArray(contacts))) {
            this.contactsCollection.add(contacts);
        }
        else {
            alert('Пустое поле!');
        }
    }

});

App.viewmodels.contacts = new App.Models.Contacts();