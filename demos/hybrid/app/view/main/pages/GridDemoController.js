Ext.define('HyBrid.view.main.pages.GridDemoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.griddemo',
    init: function(view) {
        var ctrl = this;
        var v = view;
        var scope = {
            ctrl: ctrl,
            view: v,
            mainScope: v.mainScope
        };
        
        ctrl.control({
            'griddemo-form': {
                'activate': {
                    fn: function(view) {
                        view.getForm().setValues(view.rec.data);
                    },
                    scope: scope
                }
            },
            'griddemo-form button[action=add]': {
                "click": {
                    fn: function(btn) {
                        alert('add this record to the grid!');
                    },
                    scope: scope
                }
            },
            'griddemo-form button[action=save]': {
                "click": {
                    fn: function(btn) {
                        var view = this.mainScope.view;
                        view.down('content-title').setTitle('Grid');
                        var griddemo = view.down('pages-griddemo');
                        var grid = view.down('griddemo-grid');
                        griddemo.getLayout().setActiveItem(grid);                        
                    },
                    scope: scope
                }
            }
        });
    }

});
