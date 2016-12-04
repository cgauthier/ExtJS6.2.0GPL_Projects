Ext.define('HyBrid.view.main.content.innercontainer.InnerWrapper', {
    extend: 'Ext.container.Container',
    xtype: 'content-innercontainer-innerwrapper',
    requires: [
        'Ext.layout.container.Fit'
        
    ],
    initComponent: function() {
        var me = this;
        me.layout = {
            type: 'fit'
        };
        me.padding = "30";
        me.margin = "0";
        me.cls = 'classic-content-innercontainer-innerwrapper';

        me.items = [];
           
        me.callParent(arguments);
    }
    
});
