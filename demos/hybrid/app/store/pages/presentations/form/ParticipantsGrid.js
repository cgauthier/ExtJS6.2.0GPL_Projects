Ext.define('HyBrid.store.pages.presentations.form.ParticipantsGrid', {
    extend: 'Ext.data.Store',
    model: "HyBrid.model.pages.presentations.form.ParticipantsGrid",
    proxy: {
        type: 'ajax',
        url: 'resources/data/ParticipantsGrid.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});