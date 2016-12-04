Ext.define('HyBrid.store.pages.presentations.form.FacultyGrid', {
    extend: 'Ext.data.Store',
    model: "HyBrid.model.pages.presentations.form.FacultyGrid",
    proxy: {
        type: 'ajax',
        url: 'resources/data/FacultyGrid.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});