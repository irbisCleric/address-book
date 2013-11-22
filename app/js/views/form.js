/*global $:false, Backbone:false, App:false, Handlebars:false*/


'use strict';

App.Views.Form = Backbone.View.extend({
    tagName: 'div',
    className: 'b-form',
    model: App.viewmodels.contacts,
    template: Handlebars.compile($('#form').html()),

    events: {
        'click .js-form-button--submit': 'addConctact',
        'click .js-form-button--clear': 'clearForm'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el
            .html(this.template())
            .appendTo(App.view.partials.$form);
    },

    addConctact: function () {
        this.model.addContactData({
            name: this.$el.find('[name="name"]').val()
        });
        Holder.run();
        this.render();
    },

    clearForm: function () {
        this.render();
    }

});