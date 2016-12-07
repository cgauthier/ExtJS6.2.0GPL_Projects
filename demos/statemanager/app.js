Ext.application({
    name: 'StateManager',

    extend: 'StateManager.Application',
    
    requires: [
       "Ext.state.*",
       'StateManager.view.main.Main'
    ],
    
    mainView: 'StateManager.view.main.Main'
    //-------------------------------------------------------------------------
    // Most customizations should be made to StateManager.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});