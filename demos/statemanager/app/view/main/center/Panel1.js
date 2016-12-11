Ext.define('StateManager.view.main.center.Panel1', {
    extend: 'Ext.panel.Panel',
    xtype: 'center-tabpanel-panel1',
    requires: [
        'Ext.layout.container.HBox',
        'StateManager.view.main.center.panel1.Grid',
        'StateManager.view.main.center.panel1.Form'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    stateful: true,
    stateId: 'center-tabpanel-panel1',
    title: 'Tab 1',
    defaults: {
        flex: 1
    },
    items: [{
        xtype: "center-tabpanel-panel1-grid"
    }, {
        xtype: "center-tabpanel-panel1-form"
    }]    
});
