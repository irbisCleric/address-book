/*global $:false, Backbone:false, App:false, Handlebars:false*/


'use strict';

App.Views.Form = Backbone.View.extend({
    tagName: 'div',
    className: 'b-form',
    model: App.viewmodels.contacts,
    template: Handlebars.compile($('#form').html()),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el
            .html(this.template())
            .appendTo(App.view.partials.$form);
    }
});