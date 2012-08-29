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
                        row_id : this.model.get('account_status'),
                        cols : [
                            this.model.get('account_status'),
                            this.model.get('count')
                        ]
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
            this.options.headers = ['Account Status', 'Count'];
            this.options.report_title = ['Outstanding Accounts'];
            this.options.email_api_call = 'do_outstanding_accounts_report_email';
            this.fetchAndRender();
        }

    });

    return TableView;
});

