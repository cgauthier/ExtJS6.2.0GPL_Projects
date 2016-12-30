Ext.define('HeaderFields.view.main.Grid1ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid1',
    requires: ['HeaderFields.model.MainGrid'],
    stores: {
        "grid1": {
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