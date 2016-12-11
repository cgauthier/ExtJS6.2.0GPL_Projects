Ext.define('StateManager.view.main.Center', {
    extend: 'Ext.tab.Panel',
    xtype: 'center-tabpanel',
    requires: [
        'StateManager.view.main.CenterController',
        'StateManager.view.main.center.Panel1',
        'StateManager.view.main.center.Panel2'
    ],
    controller: 'center-tabpanel',
    stateful: true,
    stateId: 'center-tabpanel',
    items:[{
        xtype: 'center-tabpanel-panel1'
    }, {
        xtype: 'center-tabpanel-panel2'
    }]
});