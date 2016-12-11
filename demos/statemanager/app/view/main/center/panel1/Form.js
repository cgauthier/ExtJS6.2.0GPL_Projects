Ext.define('StateManager.view.main.center.panel1.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'center-tabpanel-panel1-form',
    requires: [
        'Ext.layout.container.Anchor',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'StateManager.view.main.center.panel1.FormViewModel'
    ],
    viewModel: "center-tabpanel-panel1-form",
    stateful: true,
    stateId: 'center-tabpanel-panel1-form',
    layout: {
        type: 'anchor',
        anchor: '100%'
    },
    defaults: {
        margin: "10 20",
        anchor: "100%",
        enableKeyEvents: true,
        stateful: true
    },
    items: [{
        xtype: 'textfield',
        name: 'fullname',
        fieldLabel: 'Full Name',
        stateful: true,
        stateId: 'center-tabpanel-panel1-form-fullname',
        stateEvents: ['change']
    }, {
        xtype: 'combo',
        name: 'sign',
        fieldLabel: "Zodiac Sign",
        bind: {
            store: "{combo}"
        },
        queryMode: 'local',
        displayField: "sign",
        valueField: "sign",
        stateful: true,
        stateId: 'center-tabpanel-panel1-form-sign',
        stateEvents: ['select']                    
    }]  
});