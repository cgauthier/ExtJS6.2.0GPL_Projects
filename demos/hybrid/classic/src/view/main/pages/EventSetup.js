Ext.define('HyBrid.view.main.pages.EventSetup', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-eventsetup',
    requires: [],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'panel',
            html: 'Event Setup Stuff'           
        }];
        me.callParent(arguments);
    }
    
});
