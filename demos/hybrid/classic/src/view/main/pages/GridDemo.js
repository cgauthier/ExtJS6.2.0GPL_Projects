Ext.define('HyBrid.view.main.pages.GridDemo', {
    extend: 'HyBrid.view.main.pages.Base',
    xtype: 'pages-griddemo',
    requires: [
        'Ext.layout.container.Card',
        'Ext.toolbar.Toolbar',
        'HyBrid.view.main.pages.GridDemoController',   
        'HyBrid.view.main.pages.griddemo.Grid',
        'HyBrid.view.main.pages.griddemo.Form'        
    ],
    controller: 'griddemo',
    initComponent: function() {
        var me = this;
        
        me.layout = 'card';
        
        me.items = [{
            xtype: 'griddemo-grid',
            mainScope: me.mainScope           
        }, {
            xtype: 'griddemo-form',
            mainScope: me.mainScope           
        }];
        
        me.callParent(arguments);
    }
    
});
