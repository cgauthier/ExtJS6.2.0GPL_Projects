Ext.define('HyBrid.model.pages.presentations.Grid', {
    extend: 'Ext.data.Model',
    fields: [{
        name: "id", type: 'string'        
    }, {
        name: "start_time", type: 'string'        
    }, {
        name: "participants_name", type: 'string', mapping: "participants.data", convert: function(val, rec) {}        
    }, {
        name: "title", type: 'string'        
    }, {
        name: "room", type: 'string'        
    }, {
        name: "session", type: 'string'        
    }, {
        name: "track", type: 'string'        
    }, {
        name: "day", type: 'string'        
    }, {
        name: "participants", type: 'auto'        
    }]
});