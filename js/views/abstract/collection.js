define([
    'underscore',
    'backbone',
    'views/abstract/base'
], function(_, Backbone, BaseView){

    var CollectionView = BaseView.extend({
        initialize : function(collection, options) {
            CollectionView.__super__.initialize.call(this);
            _.bindAll(this, 'render', 'fetchAndRender');
            this.collection = collection;

            this.options = options || {};
            if (this.options.data == undefined) {
                this.options.data = '{}';
            }
        },

        render : function() {
            this.clear();
            this._renderTemplates();

            // Iterates over all items and calls appendItem on each
            var self = this;
            _(this.collection.models).each(function(item){
                self.appendItem(item);
            }, this);

            return this;
        },

        appendItem: function() {
            // needs to be overloaded
            alert('View is missing appendItem function');
        },

        // used to refresh our list
        fetchAndRender : function(additionalRendering) {
            var self = this;
            this.collection.fetch(_.extend({
                success: function(){
                    self.render();
                }
            }, this.options));

            return this;
        },

        _renderTemplates : function() {
            if (this.template){
                $(this.el).html(
                    this.template(this.options)
                );
            }
            if (this.modalsTemplate) {
                $(this.el).append(
                    this.modalsTemplate());
            }
        }
    });

    return CollectionView;
});

