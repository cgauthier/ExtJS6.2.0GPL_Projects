Ext.define('StateManager.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.panel.Panel',
        'Ext.layout.container.Border',
        'Ext.toolbar.Toolbar',        
        'Ext.button.Button',
        'StateManager.view.main.West',
        'StateManager.view.main.Center',
        'Ext.plugin.Viewport'
    ],
    xtype: 'app-main',
    stateful: true,
    stateId: 'app-main',
    layout: {
        type: 'border'
    },
    bbar: {
        xtype: 'toolbar',
        items: [{
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'Save State'
        }, {
            xtype: 'button',
            text: 'Restore State'
        }]
    },
    items: [{
        xtype: 'west-panel',
        region: 'west',
        width: 250,
        split: true
    }, {
        xtype: 'center-tabpanel',
        region: 'center'
    }]
});