Ext.define('MobileDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.app-main',
    requires: [
        'MobileDemo.view.main.nav.Menu'
    ],
    appVars: {
        loginKey: "mobilenavdemo",
        menu: null
    },
    init: function(view) {
        var v = view;
        var ctrl = this;
        var loginKey = ctrl.appVars.loginKey;
        var scope = {
            view: v,
            ctrl: ctrl,
            loginKey: loginKey
        };
        ctrl.control({
            'app-main': {
                "initialize": {
                    fn: function(cmp) {
                        var scope = this;

                        var menu = Ext.create('MobileDemo.view.main.nav.Menu', {
                            mainScope: scope
                        });
                        Ext.Viewport.setMenu(menu,{
                            side:'right'
                        });                        
                        
                        scope.ctrl.appVars.menu = menu;
                        
                        // CG: 11/28/2016
                        // the loginKey for this demo is for now all that's being used
                        // Authentication isn't yet set
                        var ls = window.localStorage;
                        if(ls[this.loginKey]) {
                            this.view.setActiveItem(1);
                        }
                    },
                    scope: scope
                }
            },
            'login-panel button[action="fakelogin"]': {
                'tap': {
                    fn: function(btn) {
                        // CG: 11/28/2016
                        // for this demo, we will introduce the concept of 
                        // entitlements using login info
                        // this will customize
                        // the user access of widgets within this app
                        // for now the login simply sets the loginKey as true.
                        var ls = window.localStorage;
                        ls.setItem(this.loginKey, true);
                        this.view.setActiveItem(1);
                    },
                    scope: scope
                }
            }
        });
    }
});
