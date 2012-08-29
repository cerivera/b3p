define([
    'underscore',
    'backbone',
    'views/helper',
    'views/abstract/collection',
    'text!templates/generic/table.html',
    'text!templates/_modals.html'
], function(_, Backbone, Helper, CollectionView, tableTemplate, modalsTemplate){

    var TableView = CollectionView.extend({
        template: _.template(tableTemplate),
        modalsTemplate : _.template(modalsTemplate),

        events: {
            'click input#table-select-all': 'selectAll',
            'click a#start-email-action': 'showEmailModal',
            'click a#send-email': 'sendEmail'
        },

        initialize: function(collection, options) {
            TableView.__super__.initialize.call(this, collection, options);
            _.bindAll(this, 'selectAll', 'showEmailModal', 'sendEmail');
        },

        selectAll : function() {
            $('input.table-row', this.el).attr('checked',
                $('input#table-select-all').is(':checked'));

            return this;
        },

        appendItem: function(row) {
            var rowView = new this.rowViewModule({
                model: row
            });
            $('table tbody', this.el).append(rowView.render().el);
        },

        showEmailModal : function() {
            $('#email-modal').modal();
        },

        sendEmail : function() {
            var filters = Array();
            $('input.table-row:checked').each(function() {
                filters.push($(this).val());
            });

            var subject = $('#email-modal input[name="subject"]', this.el).val();
            var message = $('#email-modal textarea[name="message"]', this.el).val();

            var self = this;
            /*OneIdUtil.ajax({
                url : OneIdUtil.adminApiUrl(this.options.email_api_call),
                type : 'POST',
                data : {row_filters : filters, subject: subject, message:message},

                success : function(data, textStatus, jqXHR) {
                    $('a.close-modal', self.el).click();
                    self.globalDispatcher.trigger('flashSuccessMsg', 'Email sent.')
                },
                error: function(){
                    $('a.close-modal', self.el).click();
                    self.globalDispatcher.trigger('flashErrorMsg', 'Email could not be sent.')
                }
            });*/
        }
    });

    return TableView;
});

