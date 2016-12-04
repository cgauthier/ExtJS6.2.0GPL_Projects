Ext.define('HyBrid.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    init: function(view) {
        var ctrl = this;
        var v = view;
        var scope = {
            ctrl: ctrl,
            view: v
        };
        
        ctrl.control({
            // classic
            'app-main': {
                "afterrender": {
                    fn: function(cmp) {
                        // CG: 12/03/2016
                        // For now, get the first button
                        // later we can get a config to decide which button to target
                        // this code fires the button, the button does the job of loading the title and content dynamically
                        var view = this.view;
                        var ctrl = this.ctrl;
                        var button = view.down('content-menu').down('button');
                        button.fireEvent('click', button, scope);
                    },
                    scope: scope
                }
            },
            'app-header button[action="menutoggle"]': {
                "click": {
                    fn: function(btn) {
                        var view = this.view;
                        var ctrl = this.ctrl;
                        var contentMenu = view.down('content-menu');
                        
                        if(contentMenu.hidden) {
                            contentMenu.el.slideIn('l', {
                                easing: 'easeIn',
                                duration: 100,
                                scope: contentMenu,
                                callback: ctrl.showPanel
                            });
                            btn.setIconCls('x-fa fa-arrow-left');
                            
                        } else {
                            
                            contentMenu.el.slideOut('l', {
                                easing: 'easeOut',
                                duration: 100,
                                scope: contentMenu,
                                callback: ctrl.hidePanel
                            });
                            btn.setIconCls('x-fa fa-arrow-right');
                        }
                    },
                    scope: scope
                }
            },
            'content-menu button': {
                "click": {
                    fn: function(btn) {
                        var view = this.view;
                        var ctrl = this.ctrl;
                        var title = view.down('content-title').setTitle(btn.text);
                        var prefix = 'HyBrid.view.main.pages.';
                        var cmp = Ext.create(prefix + btn.page, {
                            mainScope: this
                        });
                        var container = view.down('content-innercontainer-innerwrapper');
                        container.removeAll();
                        container.add(cmp);
                    },
                    scope: scope
                }
            }
        });
    },
    hidePanel: function() {
        this.hide();
    },
    showPanel: function() {
        this.show();
    }

});
