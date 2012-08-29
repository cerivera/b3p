define([
    'underscore',
    'backbone',
    'views/helper',
    'views/abstract/base',
    'views/global_msg',
    'views/navbar',
    'text!templates/panel.html',
], function(_, Backbone, Helper, BaseView, GlobalMsgView, NavBarView, panelTemplate){

    var PanelView = BaseView.extend({
        el: $('#main-ctr'),
        template : _.template(panelTemplate),

        initialize : function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render : function(){
            $(this.el).html('');
            new NavBarView();
            new GlobalMsgView('#navbar');
            $(this.el).append(this.template());
            return this;
        }
    });

    return PanelView;
});