Ext.define('HyBrid.view.main.Header', {
    extend: 'Ext.container.Container',
    xtype: 'app-header',
    requires: [
        'Ext.form.Label',
        'Ext.button.Button',
        'Ext.layout.container.HBox'
    ],
    initComponent: function() {
        var me = this;
        
        me.layout = {
            type: 'hbox'
        };
        
        me.items = [{
            xtype: 'label',
            html: "Killer Schnookums LLC",
            width: 200,
            cls:'app-header-label'
        }, {
            margin: "2 0 0 0",
            xtype: 'button',
            action: 'menutoggle',
            cls: 'default-button',
            iconCls: 'x-fa fa-backward'
        }];
        
        me.callParent(arguments);
    }
    
});
