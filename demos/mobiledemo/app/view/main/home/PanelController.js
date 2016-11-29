Ext.define('MobileDemo.view.main.home.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-panel',
    requires: [],
    init: function(view) {
        var v = view;
        var ctrl = this;
        var scope = {
            view: v,
            ctrl: ctrl
        }
        ctrl.control({
            'button[action="simpledynamicpage"]': {
                'tap': {
                    fn: function(cmp) {
                        this.view.createPage({
                            xtype: 'app-base',
                            toolbarCfg: {
                                title: "Demo Dynamic Page",
                                hideBackButton: false,
                                hideContextMenuButton: false
                            },
                            items: [{
                                xtype: 'component',
                                html: "Simple Page Demo For Dynamic Page Creation and Management."
                            }, {
                                xtype: 'button',
                                text: "Create Another Dynamic Page",
                                listeners: {
                                    tap: {
                                        fn: function(btn) {
                                            this.view.createPage({
                                                xtype: 'app-base',
                                                html: "Another Simple Dynamic Page Example",
                                                toolbarCfg: {
                                                    title: "2nd Demo Dynamic Page",
                                                    hideBackButton: false,
                                                    hideContextMenuButton: false
                                                },
                                                flex: 1
                                            })
                                        },
                                        scope: scope
                                    }
                                }
                            }],
                            flex: 1
                        });
                    },
                    scope: scope
                }
            },
            'button[action="debug"]': {
                'tap': {
                    fn: function(cmp) {
                        alert('in a build this debugger statement is disabled');
                        // debugger;
                    },
                    scope: scope
                }
            }
        });
    }
});
