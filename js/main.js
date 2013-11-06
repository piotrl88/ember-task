var App = Em.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    LOG_ACTIVE_GENERATION: true,
    TestField : Ember.TextField.extend({})
});

App.Router.map(function () {
    this.resource('index', {path: '/'}, function () {
        this.route('ex1');
        this.route('ex2');
    });
});


App.store = DS.Store.create({});
App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.IndexController = Em.ArrayController.extend({
    renderTemplate: function () {
        // Render in the named outlet using the right controller
        this.render('ex1', {into: 'index', outlet: 'ex1', controller: 'ex1'});
        this.render('ex2', {into: 'index', outlet: 'ex2', controller: 'ex2'});
    },
    serialize: function (model) {
        return {
            ex1: model,
            ex2: model
        };
    },
    setupController: function (controller, model) {
        // Setup each controller with its own model
        this.controllerFor('ex1').set('model', model);
        this.controllerFor('ex2').set('model', model);
    }
});


App.Ex1 = DS.Model.extend({
    name : DS.attr("string"),
    pict: DS.attr("string"),
    isValid: DS.attr(),
    answer: DS.attr("string")
});
App.Ex2 = DS.Model.extend({
    name : DS.attr("string"),
    pict2: DS.attr("string"),
    isValid: DS.attr(),
    answer: DS.attr("string"),
    desc : DS.attr("string")
});


App.Ex1.FIXTURES = [
    {
        id: 1,
        name : "fogg",
        pict: "img/exercise1/1.png",
        isValid : null,
        answer: "foggy"
    },
    {
        id: 2,
        name : "raining",
        pict: "img/exercise1/2.png",
        isValid : null,
        answer: "raining"
    },
    {
        id: 3,
        name : "sunny",
        pict: "img/exercise1/3.png",
        isValid : null,
        answer: "sunny"
    },
    {
        id: 4,
        name : "cloudy",
        pict: "img/exercise1/4.png",
        isValid : null,
        answer: "cloudy"
    },
    {
        id: 5,
        name : "windy",
        pict: "img/exercise1/5.png",
        isValid : null,
        answer: "windy"
    },
    {
        id: 6,
        name : "snowing",
        pict: "img/exercise1/6.png",
        isValid : null,
        answer: "snowing"
    }
];

App.Ex2.FIXTURES = [
    {
        id: 1,
        name : "0",
        pict: "img/exercise2/1.png",
        answer: "1",
        isValid : null,
        desc : "doing a project"
    },
    {
        id: 2,
        name : "2",
        pict: "img/exercise2/2.png",
        answer: "2",
        isValid : null,
        desc : "enjoying a field trip"
    },
    {
        id: 3,
        name : "3",
        pict: "img/exercise2/3.png",
        answer: "3",
        isValid : null,
        desc : "working on computers"
    },
    {
        id: 4,
        name : "4",
        pict: "img/exercise2/4.png",
        answer: "4",
        isValid : null,
        desc : "taking a test"
    },
    {
        id: 5,
        name : "5",
        pict: "img/exercise2/5.png",
        answer: "5",
        isValid : null,
        desc : "giving a presentation"
    },
    {
        id: 6,
        name : "6",
        pict: "img/exercise2/6.png",
        answer: "6",
        isValid : null,
        desc : "practicing yoga"
    }
];

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('ex1');
    }
});

App.IndexEx1Controller = Ember.ArrayController.extend({
    checked : false,
    needs: "index",
    actions : {
        checkAnswers : function(model, checked) {
            //var validFlag = true;
            $("form").addClass("validation");
            $.each(model.get('content'), function( index, value ) {
                if ($.trim(value.get("name")).toLowerCase() !== value.get("answer") ) {
                    value.set("isValid", false);
                } else {
                    value.set("isValid", true);
                }
            });
        }
    }
});

App.IndexEx2Controller = Ember.ArrayController.extend({
    needs: "index",
    actions : {
        checkAnswers : function(model) {
            $("form").addClass("validation");
            $.each(model.get('content'), function( index, value ) {
                if ($.trim(value.get("name")).toLowerCase() !== value.get("answer") ) {
                    value.set("isValid", false);
                } else {
                    value.set("isValid", true);
                }
            });
        }
    }
});


App.IndexEx1Route = Ember.Route.extend({
    model: function() {
        //console.log(App.Ex1.FIXTURES);
        //console.log(this.modelFor('index').get('content'));
        //this.modelFor('index').set('content', App.Ex1.FIXTURES);
        return this.modelFor('index');
        //return this.modelFor('index');
    }
});

App.IndexEx2Route = Ember.Route.extend({
    model: function() {
        //return this.modelFor('index');
        return App.Ex2.FIXTURES;
        //return this.modelFor('index');
    }
});

/*Ember.Handlebars.registerBoundHelper("hints", function(model) {
    var theArray = model.get('content').content;
    var len = theArray.length;
    var i = len;
    while (i--) {
        var p = parseInt(Math.random()*len);
        var t = theArray[i];
        console.log(theArray[i].get('answer'));
        theArray[i] = theArray[p];
        theArray[p] = t;
    }
});*/


