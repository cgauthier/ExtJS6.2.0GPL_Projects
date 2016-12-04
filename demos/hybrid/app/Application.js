/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('HyBrid.Application', {
    extend: 'Ext.app.Application',
    
    name: 'HyBrid',

    stores: [
        // TODO: add global / shared stores here
        "pages.presentations.Grid",
        'pages.presentations.form.FacultyGrid'
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        
    }
});


