Ext.define('HyBrid.view.main.content.Menu', {
    extend: 'Ext.container.Container',
    xtype: 'content-menu',
    requires: [
        'Ext.button.Button',
        'Ext.layout.container.VBox'
    ],
    initComponent: function() {
        var me = this;
        me.layout = {
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        };
        
        me.defaults = {
            margin: "5 30 5 30",
            padding: "10 0",
            xtype: 'button',
            cls: "default-button",
            textAlign: "left"
        };
        
        me.items = [{
            text: "Home",
            iconCls: "x-fa fa-home",
            page: 'Home'
        }, {
            text: "Grid",
            iconCls: "x-fa fa-table",
            page: 'GridDemo'
        }];
        
        me.callParent(arguments);
    }
    
});
