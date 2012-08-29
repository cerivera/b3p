define([
    'collections/abstract',
    'models/abstract',
    'models/sync'
], function(AbstractCollections, AbstractModels, LocalSync){
    var TableRowCollection = AbstractCollections.Collection.extend({
        model: AbstractModels.TableRow,
        sync: LocalSync.sync
    });

    return TableRowCollection;
});