Ext.define('MobileDemo.view.main.nav.Menu', {
    extend: 'Ext.Menu',
    xtype: 'nav-menu',
    requires: [
        'MobileDemo.view.main.nav.MenuController',
        'Ext.layout.VBox',
        'Ext.Button'
    ],
    mainScope: null,
    controller: 'nav-menu',
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
    },
    layout: {
        type: "vbox",
        align: "stretch",
        pack: "top"
    },
    width: "45%",
    initialize: function() {
        var me = this;

        var defaults = {
            margin: "5 2"
        };

        var items = [{
            xtype: "button",
            text: "Home",
            action: "home"
        }, {
            xtype: "button",
            text: "Logout",
            action: "logout"
        }];


        me.setConfig("defaults", defaults);
        me.setConfig("items", items);
        me.callParent(arguments);
    }
});
