/*global Backbone:false, App:false*/
/**
 * Created with JetBrains WebStorm.
 * User: irbis
 * Date: 10/2/13
 * Time: 11:44 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

App.Routers.Workspace = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',
        '404': 'page404',
        ':page': 'index'
    },

    index: function () {
    // #index
        App.router.navigate('index');
        new App.Views.Contacts();
    },

    page404: function () {
        // #404
        App.router.navigate('404');
    }

});