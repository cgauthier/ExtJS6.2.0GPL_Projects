Ext.define('ModernGridRowHighlight.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    // more control over how we deal with scope via init function.
    init: function(view) {
        var ctrl = this;
        var v = view;
        var scope = {
            ctrl: ctrl,
            view: v
        };
        ctrl.control({
            "toolbar > button[action='list']": {
                tap: {
                    fn: function(btn) {
                        var scope = this;
                        var ctrl = scope.ctrl;
                        var text = btn.getText();
                        var fnStr = (text.replace(/ /ig, "")).toLowerCase();
                        ctrl[fnStr].bind(scope, btn).call();
                    },
                    scope: scope
                }
            }
        })
    },
    add1: function(btn) {
        var scope = this;
        var mainView = this.view;
        var mainCtrl = this.ctrl;
        var list = mainView.down('mainlist');
        var store = list.getStore();
        var recs = mainCtrl.recs;
        var idx = mainCtrl.getIdx(recs);
        var rec1 = {
            name: "Claude",
            email: "claude_r_gauthier@hotmail.com",
            phone: "555-111-5555"
        };
        store.add(rec1);
    },
    add2: function() {
        var scope = this;
        var mainView = this.view;
        var mainCtrl = this.ctrl;
        var list = mainView.down('mainlist');
        var store = list.getStore();
        var rec1 = {
            name: "Claude",
            email: "claude_r_gauthier@hotmail.com",
            phone: "555-111-5555"
        };
        var rec2 = {
            name: "Chloe",
            email: "chloe_m_gauthier@hotmail.com",
            phone: "555-111-7777"
        };

        store.add([rec1, rec2]);
    },
    recs: [{
        name: "Chloe",
        email: "chloe_m_gauthier@hotmail.com",
        phone: "555-111-7777"
    }, {
        name: "Claude",
        email: "claude_r_gauthier@hotmail.com",
        phone: "555-111-5555"
    }, {
        name: "Clark",
        email: "clark_kent@hotmail.com",
        phone: "555-111-6666"
    }, {
        name: "John",
        email: "john_wayne@hotmail.com",
        phone: "555-111-8888"
    }, {
        name: "Diana",
        email: "diana_prince@hotmail.com",
        phone: "555-111-9999"
    }, {
        name: "Iris",
        email: "iris_west@hotmail.com",
        phone: "555-111-0000"
    }],
    lastIdx: null,
    getIdx: function(recs) {
        var ctrl = this;
        var l = recs.length;
        var idx;
        var flag = false;
        do{
            idx = Math.floor(Math.random() * l);
            if(ctrl.lastIdx !== idx) {
                ctrl.lastIdx = idx;
                flag = true;

            }
        } while (flag == false)
        return idx;
    },
    updatefirstrecord: function() {
        var scope = this;
        var mainView = this.view;
        var mainCtrl = this.ctrl;
        var list = mainView.down('mainlist');
        var store = list.getStore();
        var rec = store.getAt(0);
        var recs = mainCtrl.recs;
        var idx = mainCtrl.getIdx(recs);
        rec.set(recs[idx], false, false, true, false);
    }
});
