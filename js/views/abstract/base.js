define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var BaseView = Backbone.View.extend({
        initialize : function() {
            _.bindAll(this, 'clear');
        },
        clear : function() {
            $(this.el).empty();
        }
    });

    return BaseView;
});

