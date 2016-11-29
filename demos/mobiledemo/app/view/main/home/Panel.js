Ext.define('MobileDemo.view.main.home.Panel', {
    extend: 'MobileDemo.view.main.Base',
    xtype: 'home-panel',
    requires: [
        'Ext.Button',
        'MobileDemo.view.main.home.PanelController'
    ],
    controller: "home-panel",
    menuCfg: {
        "home": false
    },
    initialize: function() {
        var me = this;

        var items = [{
            xtype: 'button',
            text: 'Simple Dynamic Page Scaffolding',
            action: 'simpledynamicpage'
        }, {
            xtype: 'button',
            text: 'Debugger;',
            action: 'debug'
        }];

        me.toolbarCfg = {
            title: me.appTitle,
            hideBackButton: true,
            hideContextMenuButton: false,
            showCorpLogo: true
        };

        me.setConfig("items", items);
        me.callParent(arguments);
    }

});