/*global $:false, Backbone:false, App:false, Handlebars:false, Holder:false*/

'use strict';

App.Views.Contacts = Backbone.View.extend({
    tagName: 'div',
    className: 'b-contacts',
    model: App.viewmodels.contacts,
    template: Handlebars.compile($('#table').html()),

    events: {
        'click .js-table-button--callform': 'showForm',
        'click .js-header_name': 'sortPanel'
    },

    initialize: function () {
        this.render();
        this.listenTo(App.viewmodels.contacts.contactsCollection, 'all', this.render);
    },

    render: function () {
        this.$el
            .html(this.template(this.model.getContacts()))
            .appendTo(App.view.partials.$table);
    },

    showForm: function () {
        App.view.partials.$form.removeClass('hide');
    },

    sortPanel: function () {
        this.model.sortContactData();

        this.render();
        
        this.model.set('isAsc', !this.model.get('isAsc'));
        
        /*App.view.partials
            .$table
            .find(".js-header_name")
            .css("background-color", "green");*/
        
        Holder.run();
    }
});