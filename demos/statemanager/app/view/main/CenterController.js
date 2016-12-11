Ext.define('StateManager.view.main.CenterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.center-tabpanel',
    activeTabPrefix: "-activeTab",
    getStateTabId: function(stateId) {
        var me = this;
        return stateId + me.activeTabPrefix;
    },
    init: function(view) {
        var me, v, scope;
        me = this;
        v = view;
        scope = {
            ctrl: me,
            view: v
        };
        me.control({
            "center-tabpanel": {
                "beforerender": {
                    fn: function(cmp) {
                        var ctrl = this.ctrl;
                        var provider = Ext.state.Manager.getProvider();
                        var state = provider.get(ctrl.getStateTabId(cmp.stateId));
                        if(state) {
                            // why all of this? because tabpanel defer render until it is activated
                            // so, we must figure out the index number
                            // if we haven't explicitly provided one, we must do this
                            var items = cmp.items.items;
                            var l = items.length;
                            for(x = 0; x < l; x++) {
                                if(items[x].stateId == state) {
                                    break;
                                }
                            }
                            cmp.setActiveTab(x);                   
                        }
                    },
                    scope: scope
                }
            },
            "center-tabpanel > panel": {
                "activate": {
                    fn: function(cmp) {
                        var ctrl = this.ctrl;
                        var tabpanel = cmp.up();
                        var provider = Ext.state.Manager.getProvider();
                        provider.set(ctrl.getStateTabId(tabpanel.stateId), cmp.stateId);
                    },
                    scope: scope                    
                }
            }
        });
    }
});