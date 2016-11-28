Ext.define('MobileDemo.view.main.home.Panel', {
    extend: 'MobileDemo.view.main.Base',
    xtype: 'home-panel',
    initialize: function() {
        var me = this;

        var items = [{
            xtype: 'panel',
            html: 'test home panel',
            flex: 1
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