/**
 * This adds a globalDispatcher to all objects.  That way anyone can bind things to this globalDispatcher.  All other
 * objects can trigger this event from their own classes.
 *
 * (This feature is not supported out-of-box)
 */
(function() {
    var dispatcher;
    if (this.isExtended) {
        return;
    }
    dispatcher = _.extend({}, Backbone.Events, {
        cid: "dispatcher"
    });
    _.each([Backbone.Collection.prototype, Backbone.Model.prototype, Backbone.View.prototype, Backbone.Router.prototype], function(proto) {
        proto =  _.extend(proto, {
            globalDispatcher: dispatcher
        });
    });
})();