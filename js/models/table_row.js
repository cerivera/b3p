define([
    'underscore',
    'backbone',
    'models/abstract'
], function(_, Backbone, AbstractModel){
    var TableRow = AbstractModel.extend({
        initialize: function() {
            TableRow.__super__.parse.call(this);
        }
    });

    return TableRow;
});

