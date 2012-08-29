/**
 * Base Collection class.
 */

define([
    'backbone'
], function(Backbone){
    var Collection = Backbone.Collection.extend({
        parse: function(response) {
            if (response.results) {
                return response.results;
            }
            return response;
        }
    });

    return Collection;
});

