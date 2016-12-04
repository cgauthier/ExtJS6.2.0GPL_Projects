Ext.define('HyBrid.view.main.Content', {
    extend: 'Ext.container.Container',
    xtype: 'app-content',
    requires: [
        'Ext.layout.container.Border',
        'HyBrid.view.main.content.Menu',
        'HyBrid.view.main.content.Container'
    ],
    initComponent: function() {
        var me = this;
        
        me.layout = {
            type: 'border'
        };
        
        me.items = [{
            xtype: 'content-menu',
            width: 200,
            region: 'west',
            margin: "10, 0, 0, 0"
        }, {
            xtype: 'content-container',
            region: 'center'
        }];
        
        me.callParent(arguments);
    }
    
});
