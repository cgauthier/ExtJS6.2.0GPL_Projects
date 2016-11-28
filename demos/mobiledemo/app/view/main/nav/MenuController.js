Ext.define('MobileDemo.view.main.nav.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nav-menu',
    requires: [],
    init: function(view) {
        var me = this;
        var v = view;
        var scope = {
            ctrl: me,
            view: v,
            mainScope: v.mainScope
        };

        function buttonHomeFunction (cmp) {
            var app = this.mainScope.view;
            
            // this.ctrl.cleanUpDynamicPanels(this.view, tabpanel);
            Ext.Viewport.toggleMenu('right');
            app.setActiveItem(1);
        };

        function buttonLogoutFunction (cmp) {
            var app = this.mainScope.view;
            // this.ctrl.cleanUpDynamicPanels(this.view, tabpanel);
            window.localStorage.removeItem(this.mainScope.loginKey);
            Ext.Viewport.toggleMenu('right');
            app.setActiveItem(0);            
        };

        me.control({
            'nav-menu button[action=home]': {
                tap: {
                    fn: Ext.Function.createThrottled(buttonHomeFunction, 400, null),
                    scope: scope
                }
            },
            'nav-menu button[action=logout]': {
                tap: {
                    fn: Ext.Function.createThrottled(buttonLogoutFunction, 400, null),
                    scope: scope
                }
            }
        });

        me.callParent(arguments);
    },
    
    // CG: 11/28/2016
    // Dormant code, once I start having panels added dynamically
    // this code will allow me to clean them out if I decide to either go home or logout
    // ensures they are removed and destroyed.
    // these are always panels based on 'app-base'
    // if these have any dom events attached to html elements
    // they should have their 'beforeDestroy' event attached and ready to clean these dom events out
    // the signature will change in this new version
    cleanUpDynamicPanels: function(view, tabpanel) {
        var tabpanel = view.up().down('app-tabpanel');
        var items = Ext.ComponentQuery.query('app-base');
        var itemsToRemove = [];
        var x, l = items.length;

        for(x = 0; x < l; x++) {
            if(items[x].typeOfApp != "static") {
                tabpanel.remove(items[x]);
            }
        }

    }
});