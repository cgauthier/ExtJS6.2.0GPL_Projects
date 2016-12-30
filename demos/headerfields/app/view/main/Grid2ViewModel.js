Ext.define('HeaderFields.view.main.Grid2ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid2',
    requires: ['HeaderFields.model.MainGrid'],
    stores: {
        "grid2": {
            model: 'HeaderFields.model.MainGrid',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: "resources/data/db_100Recs_32Cols.json",
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});