Ext.define('HyBrid.model.pages.presentations.Grid', {
    extend: 'Ext.data.Model',
    fields: [{
        name: "start_time", type: 'string'        
    }, {
        name: "faculty_name", type: 'string', mapping: "faculty.data", convert: function(val, rec) {
            
        }        
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
        name: "faculty", type: 'auto'        
    }]
});