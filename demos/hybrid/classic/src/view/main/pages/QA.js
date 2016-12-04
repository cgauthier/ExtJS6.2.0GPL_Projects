Ext.define('HyBrid.view.main.pages.QA', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-qa',
    requires: [],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'panel',
            html: 'QA Stuff'           
        }];
        me.callParent(arguments);
    }
    
});
