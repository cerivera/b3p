define([
    'underscore',
    'backbone',
    'views/abstract/base'
], function(_, Backbone, BaseView){

    var ModelView = BaseView.extend({
        initialize : function() {
            wrap.ModelView.__super__.initialize.call(this);
            _.bindAll(this, 'saveBackup', 'rollBack', 'remove');
        },
        saveBackup: function(){
            this.modelBackup = this.model.toJSON();
        },

        rollBack: function() {
            this.model.set(this.modelBackup);
        },

        remove: function(){
            var elm = this.el;
            this.model.destroy({
                wait: true,
                success: function(){
                    $(elm).remove();
                }
            });
        }
    });

    return ModelView;
});

