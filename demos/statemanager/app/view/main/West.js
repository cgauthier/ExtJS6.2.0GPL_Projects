Ext.define('StateManager.view.main.West', {
    extend: 'Ext.panel.Panel',
    xtype: 'west-panel',
    requires: [
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],
    stateful: true,
    stateId: 'west-panel',
    title: "State Manager Test",
    html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
    tbar: [{
        text: 'Button',
        handler: 'onClickButton'
    }]
});