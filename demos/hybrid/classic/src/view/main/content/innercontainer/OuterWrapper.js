Ext.define('HyBrid.view.main.content.innercontainer.OuterWrapper', {
    extend: 'Ext.container.Container',
    xtype: 'content-innercontainer-outerwrapper',
    requires: [
        'Ext.layout.container.Fit',
        'HyBrid.view.main.content.innercontainer.InnerWrapper'
    ],
    initComponent: function() {
        var me = this;
        me.layout = {
            type: 'fit'
        };
        me.padding = "0";
        me.margin = "10";
        me.cls = 'classic-content-innercontainer-outerwrapper';

        me.items = [{
            xtype: 'content-innercontainer-innerwrapper'
        }];
           
        me.callParent(arguments);
    }
    
});
