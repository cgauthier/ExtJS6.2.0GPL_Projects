Ext.define('HyBrid.store.pages.presentations.Grid', {
    extend: 'Ext.data.Store',
    model: "HyBrid.model.pages.presentations.Grid",
    proxy: {
        type: 'ajax',
        url: 'resources/data/PresentationsGrid.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});