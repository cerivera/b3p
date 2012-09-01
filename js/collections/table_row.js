define([
    'collections/abstract',
    'models/table_row',
    'models/sync'
], function(AbstractCollection, TableRowModel, LocalSync){
    var TableRowCollection = AbstractCollection.extend({
        model: TableRowModel,
    });

    return TableRowCollection;
});