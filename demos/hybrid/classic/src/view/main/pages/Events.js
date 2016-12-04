Ext.define('HyBrid.view.main.pages.Events', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-events',
    requires: [],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'panel',
            html: 'Events Stuff'           
        }];
        me.callParent(arguments);
    }
    
});
