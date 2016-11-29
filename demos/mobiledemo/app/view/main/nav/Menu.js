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
    },
    setVisibleItems: function(menuCfg) {
        var me = this, itemStr, itemTpl, item, items, x, l;
        itemTpl = 'button[action="{0}"]';
        
        if(menuCfg && Ext.isObject(menuCfg) && Ext.Object.getSize(menuCfg)) {
            for(menuAction in menuCfg) {
                itemStr = Ext.String.format(itemTpl, menuAction);
                item = me.down(itemStr);
                if(item) {
                    item.setHidden(!menuCfg[menuAction]);
                }
            }
        } else {
            items = me.getItems().items;
            x = 0; l = items.length;
            if(l) {
                 for(x = 0; x < l; x++) {
                     items[x].setHidden(false);
                 }
            }
        }
    }
    
});
