Ext.define('HeaderFields.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'HeaderFields.view.main.MainController',
        'HeaderFields.view.main.MainModel',
        'HeaderFields.view.main.Grid1',
        'HeaderFields.view.main.Grid2'
    ],
    controller: 'main',
    viewModel: 'main',
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
    },
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'grid1',
            title: "Grid with HeaderFields Feature"
        }, {
            xtype: 'grid2',
            title: "Grid With Column Items/Layout"
        }];
        me.callParent(arguments);
    }

});
