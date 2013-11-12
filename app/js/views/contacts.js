/*global $:false, Backbone:false, App:false, Handlebars:false*/

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

    sortPanel: function (event) {
        var $header = $(event.currentTarget),
            sort_status = true;

        this.model.sortContactData();

        $header
            .toggleClass('js-sort');
        console.log($header);

        this.render();
    }
});