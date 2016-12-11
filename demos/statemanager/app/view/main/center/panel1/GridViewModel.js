Ext.define('StateManager.view.main.center.panel1.GridViewModel', {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.center-tabpanel-panel1-grid",
    stores: {
        "grid": {
            "fields": ["id", "start_time", "participant", "title", "room", "session", "track", "day"],
            "proxy": {
                "url" : "resources/data/GridDemo.json",
                "type": "ajax",
                "reader": {
                    "type": "json",
                    "rootProperty": "data"
                }
            },
            "autoLoad": true
        }
    }    
});