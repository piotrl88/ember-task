/*jslint browser: true*/
/*global $, jQuery, alert, Ember*/

//set up emberjs application with logs
var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    LOG_ACTIVE_GENERATION: true,
    TestField : Ember.TextField.extend({})
});

//set up routes of my application
App.Router.map(function () {
    "use strict";
    this.resource('index', {path: '/'}, function () {
        this.route('ex1');
        this.route('ex2');
    });
});