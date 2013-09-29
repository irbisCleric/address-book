/*global $:false, Backbone:false*/

'use strict';

var App = {};

App.Routers = {};
App.Views = {};
App.Collections = {};
App.Models = {};
App.viewmodels = {};

$(function () {
	App.router = new App.Routers.Workspace();
	App.view = new App.Views.Workspace();
	Backbone.history.start();
});