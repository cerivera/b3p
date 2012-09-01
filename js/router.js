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
                    self.updateContent(new TableView(new TableRowCollection(
                        [
                            {"account_status": "all", "count": 28},
                            {"account_status": "active", "count": 1},
                            {"account_status": "inactive", "count": 27}
                        ]
                    )));
                }
            );
        },

        showTransactionsReport: function(){
            var self = this;
            require(['views/reports/transactions', 'collections/table_row'],
                function(TableView, TableRowCollection){
                    self.updateContent(new TableView(new TableRowCollection(
                        [
                            {"change_pin_count": 0.0, "oob_response_count": 0.0, "change_password_count": 0.0, "change_panel_settings_count": 0.0, "user_guid": "763f0d11-e656-cd1b-6b41-54895872673e", "failed_pin_count": 0.0, "failed_password_count": 0.0, "device_cloned_count": 0.0, "device_signout_count": 3.0, "add_device_count": 0.0, "email": "riverautx+jaxxxx@gmail.com", "create_account_count": 1.0, "account_recovery_count": 0.0, "authenticate_count": 3.0, "deactivate_cd_count": 0.0, "device_rename_count": 0.0, "mode_change_count": 1.0, "device_login_count": 3.0, "account_recovery_failed_count": 0.0, "get_attributes_count": 5.0, "failed_pin_shutdown_count": 0.0, "secure_action_approved_count": 0.0, "failed_password_shutdown_count": 0.0, "secure_transaction_approved_count": 0.0, "add_cd_device_count": 0.0, "remove_device_count": 0.0},
                            {"change_pin_count": 0.0, "oob_response_count": 0.0, "change_password_count": 0.0, "change_panel_settings_count": 0.0, "user_guid": "763f0d11-e656-cd1b-6b41-54895872673e", "failed_pin_count": 0.0, "failed_password_count": 0.0, "device_cloned_count": 0.0, "device_signout_count": 3.0, "add_device_count": 0.0, "email": "riverautx+jaxxxx@gmail.com", "create_account_count": 1.0, "account_recovery_count": 0.0, "authenticate_count": 3.0, "deactivate_cd_count": 0.0, "device_rename_count": 0.0, "mode_change_count": 1.0, "device_login_count": 3.0, "account_recovery_failed_count": 0.0, "get_attributes_count": 5.0, "failed_pin_shutdown_count": 0.0, "secure_action_approved_count": 0.0, "failed_password_shutdown_count": 0.0, "secure_transaction_approved_count": 0.0, "add_cd_device_count": 0.0, "remove_device_count": 0.0},
                            {"change_pin_count": 0.0, "oob_response_count": 0.0, "change_password_count": 0.0, "change_panel_settings_count": 0.0, "user_guid": "763f0d11-e656-cd1b-6b41-54895872673e", "failed_pin_count": 0.0, "failed_password_count": 0.0, "device_cloned_count": 0.0, "device_signout_count": 3.0, "add_device_count": 0.0, "email": "riverautx+jaxxxx@gmail.com", "create_account_count": 1.0, "account_recovery_count": 0.0, "authenticate_count": 3.0, "deactivate_cd_count": 0.0, "device_rename_count": 0.0, "mode_change_count": 1.0, "device_login_count": 3.0, "account_recovery_failed_count": 0.0, "get_attributes_count": 5.0, "failed_pin_shutdown_count": 0.0, "secure_action_approved_count": 0.0, "failed_password_shutdown_count": 0.0, "secure_transaction_approved_count": 0.0, "add_cd_device_count": 0.0, "remove_device_count": 0.0}
                        ]
                    )));
                }
            );
        },

        updateContent: function(view) {
            $('#content').html(view.el);
            $('.dropdown-toggle').dropdown();
        },

        clearContent: function() {
            $('#content').html('');
        }

    });


    return Router;
});