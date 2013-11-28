/*jslint browser: true*/
/*global $, jQuery, alert, App, Ember*/

App.IndexRoute = Ember.Route.extend({
    model: function () {
        "use strict";
        return this.store.find('ex1');
    },
    redirect: function () {
        "use strict";
        this.transitionTo('index.ex1');
    }
});

//set up model for first route
App.IndexEx1Route = Ember.Route.extend({
    model: function () {
        "use strict";
        return this.store.find('ex1');
    }
});
App.IndexEx2Route = Ember.Route.extend({
    model: function () {
        "use strict";
        return this.store.find('ex2');
    }
});
