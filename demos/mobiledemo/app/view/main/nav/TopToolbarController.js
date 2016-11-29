
Ext.define('MobileDemo.view.main.nav.TopToolbarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nav-toptoolbar',
    init: function(view) {
        var me = this;
        var v = view;

        function buttonBackFunction (btn) {
            var scope, main, panel, fn, newFn;
            scope = this;
            main = scope.view.up('app-main');
            panel = scope.view.up();
            
            fn = function(main, scope) {
                var panel, nav, previous, thisnav, appmain;
                appmain = main;
                panel = this;
                // CG: 11/28/2016
                // to be used when onBackEvent is implemented
                // nav = appmain.nav; 
                previous = panel.previous;
                // CG: 11/28/2016
                // to be used when onBackEvent is implemented
                // previous.navDir = "backward"; 
                appmain.setActiveItem(previous);                    
                if(panel.typeOfApp != "static") {
                    window.setTimeout(function() {
                        appmain.remove(panel);
                    }, 250)
                }
            };
 
            newFn = fn.bind(panel, main, scope); 
 
            // CG: 11/28/2016
            // onBackEvent is currently dormant
            if(panel.onBackEvent) {
                panel.onBackEvent(newFn);
            } else {
                newFn();
            }
        };

        function buttonContextFunction (btn) {
            Ext.Viewport.toggleMenu('right');
        };

        me.control({
            'nav-toptoolbar button[action=back]': {
                'tap': {
                    fn: Ext.Function.createThrottled(buttonBackFunction, 400, null),
                    scope: {
                        ctrl: me,
                        view: v
                    }
                }
            },
            'nav-toptoolbar button[action=context]': {
                'tap': {
                    fn: Ext.Function.createThrottled(buttonContextFunction, 400, null),
                    scope: {
                        ctrl: me,
                        view: v
                    }
                }
            }
        });

        me.callParent(arguments);
    }
});