/*jslint browser: true*/
/*global $, jQuery, alert, App, Ember*/
App.IndexController = Ember.ArrayController.extend({
    renderTemplate: function () {
        "use strict";
        // Render in the named outlet using the right controller
        this.render('ex1', {into: 'index', outlet: 'ex1', controller: 'ex1'});
        this.render('ex2', {into: 'index', outlet: 'ex2', controller: 'ex2'});
    },
    serialize: function (model) {
        "use strict";
        return {
            ex1: model,
            ex2: model
        };
    },
    setupController: function (controller, model) {
        "use strict";
        // Setup each controller with its own model
        this.controllerFor('ex1').set('model', model);
        this.controllerFor('ex2').set('model', model);
    }
});

//controller for first ex route
App.IndexEx1Controller = Ember.ArrayController.extend({
    needs: "index",
    actions : {
        checkAnswers : function (model) {
            "use strict";
            $(".hint-content.ex2").addClass("validation");   //css hack for disable visible inputs class valid:invalid
            $.each(model.get('content'), function (index, value) {
                if ($.trim(value.get("name")).toLowerCase() !== value.get("answer")) { //check the retrived value of input, remove spaces, and use lower case method to match anwser
                    value.set("isValid", false);    //set up model value to show invalid answers
                } else {
                    value.set("isValid", true);     //set up model value to show valid answers
                }
            });
        }
    }
});

//controller for second ex route
App.IndexEx2Controller = Ember.ArrayController.extend({
    needs: "index",
    actions : {
        checkAnswers : function (model) {
            "use strict";
            $("form").addClass("validation");
            $.each(model.get('content'), function (index, value) {
                if ($.trim(value.get("name")).toLowerCase() !== value.get("answer")) {
                    value.set("isValid", false);
                } else {
                    value.set("isValid", true);
                }
            });
        }
    }
});