
Ext.define('MobileDemo.view.main.nav.TopToolbarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nav-toptoolbar',
    init: function(view) {
        var me = this;
        var v = view;

        // CG: 11/28/2016
        // Porting this code from a previous project
        // will allow me to not only go back to the previous panel
        // but will also allow me to use a callback if there are
        // extra code to provide for the target panel on the way back
        // maybe reloading data, etc..
        function buttonBackFunction (btn) {
            // var toolbar = this.view;
            // var panel = toolbar.up('app-base');
// 
            // var fn = function(panel) {
                // var tabpanel = panel.up();
                // var nav = tabpanel.nav;
                // var thisnav = nav[panel.id];
                // var previous = thisnav.previous;
                // previous.navDir = "backward";
                // tabpanel.setActiveItem(previous);
// 
                // if(panel.typeOfApp != "static") {
                    // window.setTimeout(function() {
                        // tabpanel.remove(panel);
                    // }, 250)
                // }
            // }
// 
            // var newFn = fn.bind(panel, panel); // testing.
// 
            // if(panel.onBackEvent) {
                // panel.onBackEvent(newFn);
            // } else {
                // fn(panel);
            // }
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