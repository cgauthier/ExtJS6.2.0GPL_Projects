Ext.define('MobileDemo.view.main.Base', {
    extend: 'Ext.Panel',
    xtype: 'app-base',
    mixins: [
        'MobileDemo.mixin.Nav'
    ],
    requires: [
        'Ext.layout.VBox',
        'MobileDemo.view.main.nav.TopToolbar'
    ],
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
    },
    layout: {
        type: "vbox",
        align: "stretch"
    },
    bodyPadding: "10",
    toolbarCfg: {
        hideToolbar: false,
        title: "generic",
        hideBackButton: false,
        hideContextMenuButton: false
    },
    appTitle: null,
    typeOfApp: "static",
    previous: null,
    // CG: 11/28/2016
    // dormant for now 
    // onBackEvent: null, 
    initialize: function() {
        var me = this;
        var toolbar;
        if(!me.toolbarCfg.hideToolbar) {
            toolbar = {
                xtype: 'nav-toptoolbar',
                docked: "top",
                toolbarCfg: me.toolbarCfg,
                margin: "0"
            };

            if(Ext.isArray(me.items)) {
                me.items.splice(0, 0, toolbar);
                me.setConfig("items", me.items);
            } else {
                me.insert(0, toolbar);
            }
        }
        me.setConfig("bodyPadding", me.bodyPadding);
        me.setConfig("layout", me.layout);
        me.callParent(arguments);
    }

});