Ext.define('HyBrid.view.main.content.Title', {
    extend: 'Ext.container.Container',
    xtype: 'content-title',
    requires: [
        'Ext.layout.container.Fit'
    ],
    initComponent: function() {
        var me = this;
        me.layout = {
            type: 'fit'
        };
        me.margin = "0 0 20 10";
        me.cls = 'classic-content-title';
        me.html = "";   
        me.callParent(arguments);
    },
    setTitle: function(title) {
        var me = this;
        me.setHtml("<h1>" + title + "</h1>");
    }
    
});
