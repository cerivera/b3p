define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var Router = Backbone.Router.extend({
        routes: {
            '': 'homePage',
            'reports/accounts' : 'showAccountsReport',
            'reports/transactions' : 'showTransactionsReport'
        },

        homePage: function(){
            this.clearContent();
        },

        showAccountsReport: function(){
            var self = this;
            require(['views/reports/accounts', 'collections/table_row'],
                function(TableView, TableRowCollection){
                    self.updateContent(new TableView(new TableRowCollection(), {
                        url : O.OneIdUtil.adminApiUrl('get_outstanding_accounts_report')
                    }));
                }
            );
        },

        showTransactionsReport: function(){
            var self = this;
            require(['views/reports/transactions', 'collections/table_row'],
                function(TableView, TableRowCollection){
                    self.updateContent(new TableView(new TableRowCollection(), {
                        url : O.OneIdUtil.adminApiUrl('get_transaction_counts_report')
                    }));
                }
            );
        },

        updateContent: function(view) {
            $('#content').html(view.el);
        },

        clearContent: function() {
            $('#content').html('');
        }

    });


    return Router;
});