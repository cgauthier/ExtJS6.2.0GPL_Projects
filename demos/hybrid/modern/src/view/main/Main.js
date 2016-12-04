/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('HyBrid.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    title: "Mobile Version",
    html: "No content yet...",
    requires: [
        'HyBrid.view.main.MainController',
        'HyBrid.view.main.MainModel'
    ]

});
