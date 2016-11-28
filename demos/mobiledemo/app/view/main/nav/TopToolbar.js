Ext.define('MobileDemo.view.main.nav.TopToolbar', {
    extend: 'Ext.Container',
    xtype: 'nav-toptoolbar',
    requires: [
        'Ext.layout.HBox',
        'Ext.Button',
        'MobileDemo.view.main.nav.TitleLabel',
        'MobileDemo.view.main.nav.TopToolbarController'
    ],
    controller: 'nav-toptoolbar',
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
    },
    layout: {
        type: "hbox",
        align: "stretch"
    },
    toolbarCfg: {
        title: "generic",
        hideBackButton: false,
        hideContextMenuButton: false,
        showCorpLogo: false
    },
    cls: "nav-toptoolbar",
    initialize: function() {
        var me = this;
        var w = 42;
        var h = 42;

        var emptyBtn = {
            xtype: "component",
            width: w,
            height: h
        };

        var backBtn = {
            xtype: "button",
            action: "back",
            iconCls: "x-fa fa-arrow-left icon-2x top-toolbar-icon",
            width: w,
            height: h
            // cls: "top-toolbar-btn"
        };

        if(me.toolbarCfg.hideBackButton) {
            backBtn = emptyBtn;
        }

        // CG: 11/28/2016
        // will re-enable this later when I create a logo for KillerSchnookums LLC
        if(me.toolbarCfg.showCorpLogo) {
            backBtn = {
                xtype: "component",
                width: w,
                height: h
                // iconCls: "x-fa fa-align-justify icon-2x top-toolbar-icon", // temporary filler
                // cls: "x-fa fa-align-justify icon-2x top-toolbar-btn"
            };
        }

        var contextMenuBtn = {
            xtype: "button",
            action: "context",
            iconCls: "x-fa fa-align-justify icon-2x top-toolbar-icon",
            width: w,
            height: h,
            cls: "top-toolbar-btn"
        };

        if(me.toolbarCfg.hideContextMenuButton) {
            contextMenuBtn = emptyBtn;
        }

        var items = [backBtn, {
            xtype: "nav-toptoolbar-label",
            html: me.toolbarCfg.title,
            flex: 1
        }, contextMenuBtn];

        me.setConfig("items", items);
        me.callParent(arguments);
    }
});
