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
        
        console.log(App.view.partials.$form_head_name);
    },

    showForm: function () {
        App.view.partials.$form.removeClass('hide');
    },

    sortPanel: function () {
        this.model.sortContactData();

        App.view
            .partials
            .$form_head_name
                .css('backround-color', 'blue');

        console.log(App.view.partials.$form_head_name);
        
        this.render();
        Holder.run();
    }
});