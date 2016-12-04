Ext.define('HyBrid.view.main.pages.Agenda', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-agenda',
    requires: [],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'panel',
            html: 'Agenda Stuff'           
        }];
        me.callParent(arguments);
    }
    
});
