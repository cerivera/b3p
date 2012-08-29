define([
    'underscore',
    'backbone',
    'views/helper',
    'views/abstract/model',
    'views/generic/table',
    'text!templates/generic/table.html',
    'text!templates/generic/table_row.html'
], function(_, Backbone, Helper, ModelView, GenericTableView, tableTemplate, rowTemplate){

    var RowView = ModelView.extend({
        tagName: 'tr',
        template: _.template(rowTemplate),

        initialize: function(options){
            RowView.__super__.initialize.call(this);
            _.bindAll(this, 'render');
            this.options = options;
        },


        render: function(){
            $(this.el).html(
                this.template({
                        row_id : this.model.get('email'),
                        cols : [
                            this.model.get('email'),
                            this.model.get('add_device_count'),
                            this.model.get('change_password_count'),
                            this.model.get('change_pin_count'),
                            this.model.get('get_attributes_count'),
                            this.model.get('device_login_count')]
                    }
                ));
            return this;
        }
    });

    var TableView = GenericTableView.extend({
        template: _.template(tableTemplate),

        initialize: function(collection, options) {
            TableView.__super__.initialize.call(this, collection, options);
            this.rowViewModule = RowView;
            this.options.headers = ['Email', 'Add Device', 'Change PW', 'Change PIN', 'Share Attrs', 'Login'];
            this.options.report_title = 'Transactions Report';
            this.options.email_api_call = 'do_transactions_report_email';
            this.fetchAndRender();
        }
    });

    return TableView;
});

