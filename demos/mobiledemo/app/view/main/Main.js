Ext.define('MobileDemo.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    requires: [
        'MobileDemo.view.main.MainController',
        'MobileDemo.view.main.MainModel',
        'MobileDemo.view.main.home.Panel',
        'MobileDemo.view.main.login.Panel',
        'MobileDemo.view.main.Base',
        'Ext.layout.Card'
    ],
    layout: {
        type: 'card'
    },
    fullscreen: true,
    controller: 'app-main',
    viewModel: 'app-main',
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);        
    },
    initialize: function() {
        var me = this;

        // CG: 11/28/2016
        // Always used panels which are extend from app-base 
        // at this level, this will be important when mixing
        // static and dynamic pages for navigation
        var items = [{
            xtype: 'login-panel'
        }, {
            xtype: 'home-panel',
            appTitle: 'Home Page - Prototype'
        }];
        
        me.setConfig("items", items);
        me.callParent(arguments);
    }
});
