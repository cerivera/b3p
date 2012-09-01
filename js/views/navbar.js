/**
 * author: riverautx@gmail.com
 */
define([
    'underscore',
    'backbone',
    'views/helper',
    'views/abstract/base',
    'text!templates/navbar.html'
], function(_, Backbone, Helper, BaseView, navBarTemplate){

    var NavBarView = BaseView.extend({
        el : $('#main-ctr'),
        template : _.template(navBarTemplate),

        initialize : function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render : function(){
            $(this.el).prepend(this.template());
            return this;
        }
    });

    return NavBarView;
});

