define([
    'underscore',
    'backbone',
    'views/abstract/base'
], function(_, Backbone, BaseView){

    var GlobalMsgView = BaseView.extend({

        initialize : function(selector, doPrepend) {
            _.bindAll(this, 'render', 'flashSuccessMsg', 'flashWarningMsg', 'flashInfoMsg', 'flashErrorMsg');
            this.el = $(selector);
            this.render(doPrepend);
            var self = this;

            this.globalDispatcher.bind('flashSuccessMsg', function(msg) {
                self.flashSuccessMsg(msg);
            });
            this.globalDispatcher.bind('flashInfoMsg', function(msg) {
                self.flashInfoMsg(msg);
            });
            this.globalDispatcher.bind('flashWarningMsg', function(msg) {
                self.flashWarningMsg(msg);
            });
            this.globalDispatcher.bind('flashErrorMsg', function(msg) {
                self.flashErrorMsg(msg);
            });
        },

        render : function(doPrepend){
            var html = '<div id="global-msg" class="alert hide"></div>';
            if (doPrepend) {
                $(this.el).prepend(html);
            } else {
                $(this.el).append(html);
            }
            return this;
        },

        flashErrorMsg: function(msg) {
            this.flashMsg(msg, 'alert-error');
        },

        flashWarningMsg: function(msg) {
            this.flashMsg(msg, '');
        },

        flashSuccessMsg: function(msg) {
            this.flashMsg(msg, 'alert-success');
        },

        flashInfoMsg: function(msg) {
            this.flashMsg(msg, 'alert-info');
        },

        flashMsg: function(msg, cssClass) {
            var msgElm = $('#global-msg');

            msgElm.addClass(cssClass);
            msgElm.html(msg).fadeIn();

            setTimeout(function() {
                msgElm.fadeOut(null, function() {
                    msgElm.removeClass(cssClass);
                });
            }, 3000);
        }
    });


    return GlobalMsgView;
});