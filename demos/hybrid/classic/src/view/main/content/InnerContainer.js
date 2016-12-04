Ext.define('HyBrid.view.main.content.InnerContainer', {
    extend: 'Ext.container.Container',
    xtype: 'content-innerContainer',
    requires: [
        'Ext.layout.container.VBox',
        'HyBrid.view.main.content.Title',
        'HyBrid.view.main.content.innercontainer.OuterWrapper',
        'HyBrid.view.main.content.Footer'
    ],
    initComponent: function() {
        var me = this;
        me.layout = {
            type: 'vbox',
            align: 'stretch'
        };
        me.padding = "40 40 0 40";
        me.margin = "0";
        me.cls = 'classic-content-innercontainer';
        me.items = [{
            xtype: 'content-title'
        }, {
            xtype: 'content-innercontainer-outerwrapper',
            flex: 1
        }, {
            xtype: 'content-footer'
        }];   
        me.callParent(arguments);
    }
    
});
