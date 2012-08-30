define([
    'underscore',
    'backbone'
], function(_, Backbone){
    return function(method, model, options) {
        if (options.url == 'get_accounts_report') {
            return '[{"account_status": "all", "count": 28}, {"account_status": "active", "count": 1}, {"account_status": "inactive", "count": 27}]';
        } else if (options.url == 'get_transactions_report') {
            return '[{"change_pin_count": 0.0, "oob_response_count": 0.0, "change_password_count": 0.0, "change_panel_settings_count": 0.0, "user_guid": "763f0d11-e656-cd1b-6b41-54895872673e", "failed_pin_count": 0.0, "failed_password_count": 0.0, "device_cloned_count": 0.0, "device_signout_count": 3.0, "add_device_count": 0.0, "email": "riverautx+jaxxxx@gmail.com", "create_account_count": 1.0, "account_recovery_count": 0.0, "authenticate_count": 3.0, "deactivate_cd_count": 0.0, "device_rename_count": 0.0, "mode_change_count": 1.0, "device_login_count": 3.0, "account_recovery_failed_count": 0.0, "get_attributes_count": 5.0, "failed_pin_shutdown_count": 0.0, "secure_action_approved_count": 0.0, "failed_password_shutdown_count": 0.0, "secure_transaction_approved_count": 0.0, "add_cd_device_count": 0.0, "remove_device_count": 0.0}]';
        }

    }
});

