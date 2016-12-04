/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('HyBrid.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    requires: [
        'Ext.plugin.Viewport',
        'HyBrid.view.main.MainController',
        'HyBrid.view.main.MainModel',
        'Ext.layout.container.VBox',
        'HyBrid.view.main.Header',
        'HyBrid.view.main.Content',
        'HyBrid.view.main.pages.QA',
        'HyBrid.view.main.pages.Agenda',
        'HyBrid.view.main.pages.Archive',
        'HyBrid.view.main.pages.Events',
        'HyBrid.view.main.pages.EventSetup',
        'HyBrid.view.main.pages.Home',
        'HyBrid.view.main.pages.Presentations'
    ],
    initComponent: function() {
        var me = this;
        
        me.layout = {
            type: 'vbox',
            align: 'stretch'
        };
        
        me.margin = "10";
        
        me.items = [{
            xtype: 'app-header',
            height: 40
        }, {
            xtype: 'app-content',
            flex: 1
        }];
        
        me.callParent(arguments);
    }
});
