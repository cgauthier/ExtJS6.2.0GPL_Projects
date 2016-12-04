Ext.define('HyBrid.view.main.pages.Archive', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-archive',
    requires: [],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'panel',
            html: 'Archive Stuff'           
        }];
        me.callParent(arguments);
    }
    
});
