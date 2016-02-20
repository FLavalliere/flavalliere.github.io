(function() {

var Hack = window.Hack = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Hack.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

Hack.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

Hack.Router.map(function () {
  // Add your routes here
});


})();