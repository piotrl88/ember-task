/*jslint browser: true*/
/*global $, jQuery, alert, App, Ember*/

//set up app model
//here i should pass both fixtures models, this is why second ex doesn't work
App.IndexRoute = Ember.Route.extend({
    model: function () {
        "use strict";
        return this.store.find('ex1');
    }
});

//set up model for first route
App.IndexEx1Route = Ember.Route.extend({
    model: function () {
        "use strict";
        //console.log(App.Ex1.FIXTURES);
        //console.log(this.modelFor('index').get('content'));
        //this.modelFor('index').set('content', App.Ex1.FIXTURES);
        return this.modelFor('index');
    }
});

//set up model for second route
//get error message here
App.IndexEx2Route = Ember.Route.extend({
    model: function () {
        "use strict";
        return App.Ex2.FIXTURES;
        //return this.modelFor('index');
    }
});
