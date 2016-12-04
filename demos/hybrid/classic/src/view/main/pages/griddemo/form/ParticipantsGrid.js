Ext.define('HyBrid.view.main.pages.presentations.form.ParticipantsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'form-participants-grid',
    requires: [
    ],
    initComponent: function() {
        var me = this;

        me.store = Ext.getStore('pages.presentations.form.ParticipantsGrid');
        me.cls = "project-grid-format";
        
        me.viewConfig = {
            stripeRows: false
        };
        
        var columns = [{
            dataIndex: 'member',
            header: 'Member',
            flex: 1
        }, {
            dataIndex: 'role',
            header: 'Role',
            flex: 1
        }, {
            xtype: 'actioncolumn',
            dataIndex: '',
            header: '',
            width: 50,
            renderer: function(val, meta) {
                meta.classes.push('action-class');
            },
            items: [{
                iconCls: "x-fa fa-close action-class",
                handler: function(view, rowIndex, colIndex, cfg, e, rec, rowEl) {
                    alert('delete this row');  
                }.bind(me.mainScope)
            }]
        }];        
        
        me.columns = columns;
        me.callParent(arguments);
    }
});