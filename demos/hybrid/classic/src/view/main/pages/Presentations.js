Ext.define('HyBrid.view.main.pages.Presentations', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-presentations',
    requires: [
        'Ext.layout.container.Card',
        'Ext.toolbar.Toolbar',
        'HyBrid.view.main.pages.PresentationsController',   
        'HyBrid.view.main.pages.presentations.Grid',
        'HyBrid.view.main.pages.presentations.Form'        
    ],
    controller: 'presentations',
    initComponent: function() {
        var me = this;
        
        me.layout = 'card';
        
        me.items = [{
            xtype: 'presentations-grid',
            mainScope: me.mainScope           
        }, {
            xtype: 'presentations-form',
            mainScope: me.mainScope           
        }];
        
        me.callParent(arguments);
    }
    
});
