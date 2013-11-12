/*global $:false, Backbone:false, App:false*/

'use strict';

App.Views.Workspace = Backbone.View.extend({
    el: 'body',
    partials: {},

    initialize: function () {
        this.partials = {
            $window: $(window),
            $document: $(document),
            $html: $('html'),
            $body: this.$el,
            $table: $('.js-table', this.$el),
            $form: $('.js-form', this.$el),
            $form_head_name: $('.js-header_name', this.$el)
        };
    }
});
