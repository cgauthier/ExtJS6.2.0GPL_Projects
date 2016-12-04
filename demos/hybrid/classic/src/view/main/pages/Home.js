Ext.define('HyBrid.view.main.pages.Home', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-home',
    requires: [],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'panel',
            html: 'Home Stuff'           
        }];
        me.callParent(arguments);
    }
    
});
