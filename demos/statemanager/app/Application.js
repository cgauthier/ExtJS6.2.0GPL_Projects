 Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
Ext.define('StateManager.Application', {
    extend: 'Ext.app.Application',
    
    name: 'StateManager',

    stores: [],
    
    launch: function () {}
});
