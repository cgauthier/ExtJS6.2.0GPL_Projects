Ext.define('ModernGridRowHighlight.view.main.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainlist',
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
        var scope = {
            view: me.getView(),
            viewModel: me
        };
        me.setStores({
            "mainlist": {
                fields: [
                    'name', 'email', 'phone'
                ],
                data: { items: [
                    { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
                    { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
                    { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
                    { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
                ]},
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json',
                        rootProperty: 'items'
                    }
                },
                listeners: {
                    add: {
                        fn: function(store, records, index) {
                            var scope = this;
                            var view = this.view;
                            var me = this.viewModel;
                            me.highlightRecord(records, view, true);
                        },
                        scope: scope,
                        order: 'after'
                    },
                    update: {
                        fn: function(store, record, index) {
                            var scope = this;
                            var view = this.view;
                            var me = this.viewModel;
                            me.highlightRecord(record, view, true);
                        },
                        scope: scope
                    }
                }
            }
        });
    },
    highlightRecord: function(record, view, scroll) {
        var me = this;
        var x, l;
        if(Ext.isArray(record)) {
            l = record.length;
            for(x = 0; x < l; x++) {
                if(scroll) {
                    view.scrollToRecord(record[x]);
                }
                var row = view.getItem(record[x]);
                me.animRec(row);
            }
        } else {
            if(scroll) {
                view.scrollToRecord(record);
            }
            me.animRec(view.getItem(record));
        }
    },
    animRec: function(row) {
        Ext.Anim.run(row, 'wipe', {
            from: {
                backgroundColor: "white"
            },
            to: {
                backgroundColor: "red"
            },
            easing: 'ease-in-out',
            autoClear: true,
            duration: 500
        });
    }
});