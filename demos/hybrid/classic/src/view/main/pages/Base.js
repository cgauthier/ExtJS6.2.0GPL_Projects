Ext.define('HyBrid.view.main.pages.Base', {
    extend: 'Ext.panel.Panel',
    xtype: 'pages-base',
    requires: [],
    mainScope: null,
    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }
    
});
