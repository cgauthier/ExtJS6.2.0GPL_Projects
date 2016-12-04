Ext.define('HyBrid.view.main.content.Container', {
    extend: 'Ext.container.Container',
    xtype: 'content-container',
    requires: [
        'Ext.layout.container.Fit',
        'HyBrid.view.main.content.InnerContainer'
    ],
    initComponent: function() {
        var me = this;
        me.layout = {
            type: 'fit'
        };
        me.cls = 'classic-content-container';
        me.padding = "0";
        me.margin = "12";
        me.items = [{
            xtype: 'content-innerContainer'
        }];   
        me.callParent(arguments);
    }
    
});
