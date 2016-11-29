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
            this.ctrl.cleanUpDynamicPanels(this);
            Ext.Viewport.toggleMenu('right');
            app.setActiveItem(1);
        };

        function buttonLogoutFunction (cmp) {
            var app = this.mainScope.view;
            this.ctrl.cleanUpDynamicPanels(this);
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
    
    cleanUpDynamicPanels: function(scope) {
        var main = scope.mainScope.view;
        var items = Ext.ComponentQuery.query('app-base', main);
        var itemsToRemove = [];
        var x, l = items.length;
        for(x = 0; x < l; x++) {
            if(items[x].typeOfApp != "static") {
                main.remove(items[x]);
            }
        }

    }
});