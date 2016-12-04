Ext.define('HyBrid.view.main.pages.PresentationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.presentations',
    init: function(view) {
        var ctrl = this;
        var v = view;
        var scope = {
            ctrl: ctrl,
            view: v,
            mainScope: v.mainScope
        };
        
        ctrl.control({
            'presentations-form': {
                'activate': {
                    fn: function(view) {
                        view.getForm().setValues(view.rec.data);
                    },
                    scope: scope
                }
            },
            'presentations-form button[action=add]': {
                "click": {
                    fn: function(btn) {
                        alert('add this record to the grid!');
                    },
                    scope: scope
                }
            },
            'presentations-form button[action=save]': {
                "click": {
                    fn: function(btn) {
                        alert('save this record and leave this page');
                        var view = this.mainScope.view;
                        view.down('content-title').setTitle('Presentations');
                        var presentations = view.down('pages-presentations');
                        var grid = view.down('presentations-grid');
                        presentations.getLayout().setActiveItem(grid);                        
                    },
                    scope: scope
                }
            }
        });
    }

});
