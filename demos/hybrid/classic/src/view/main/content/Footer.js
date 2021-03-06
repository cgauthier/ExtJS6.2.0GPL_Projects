Ext.define('HyBrid.view.main.content.Footer', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'content-footer',
    requires: [
        'Ext.form.Label',
        'Ext.button.Button'
    ],
    initComponent: function() {
        var me = this;
        me.margin = "0 0 20 10";
     
        me.items = [{
            xtype: 'label',
            html: "&copy; 2016 Killer Schnookums LLC"
        }, {
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'About',
            cls: "default-button"
        }, {
            xtype: 'button',
            text: 'Contact',
            cls: "default-button"
        }];           
           
        me.callParent(arguments);
    }
    
});
