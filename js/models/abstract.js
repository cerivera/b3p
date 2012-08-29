define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var Model = Backbone.Model.extend({
        initialize: function(){
            // setup defaults
            for (var key in this.defaults) {
                if (!this.get(key)) {
                    this.set({key: this.defaults[key]});
                }
            }
        }
    });

    return Model;
});

