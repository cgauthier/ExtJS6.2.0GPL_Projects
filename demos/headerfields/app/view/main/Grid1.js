Ext.define('HeaderFields.view.main.Grid1', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid1',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'HeaderFields.ux.grid.column.TimeStampDate',
        'HeaderFields.view.main.Grid1ViewModel',
        'Ext.form.field.Text',
        'HeaderFields.ux.grid.feature.HeaderFields',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
    },
    bind: {
        store: "{grid1}"
    },
    viewModel: "grid1",
    initComponent: function() {
        var me = this;

        var headerFieldsFeature = Ext.create('HeaderFields.ux.grid.feature.HeaderFields', {});
        me.features = [headerFieldsFeature];

        var moneyRenderer = function(value, meta, rec, rowIndex, colIndex, store, view, returnValue) {
            if(value < 0) {
                meta.style = "background-color: #ff2222;";
            }
            value = Ext.util.Format.usMoney(value);
            return value;
        };
        
        me.viewConfig = {
            enableTextSelection: true
        };

        var textField = {
            xtype: 'textfield',
            margin: "0",
            border: false
        };
        
        me.tbar = {
            xtype: 'toolbar',
            items: [{
                xtype: 'tbfill'
            }, {
                xtype: 'button',
                text: 'Hide First Row'
            }, {
                xtype: 'button',
                text: 'Hide Second Row'
            }, {
                xtype: 'button',
                text: 'Hide Alls Rows'
            }, {
                xtype: 'button',
                text: 'Show First Row'
            }, {
                xtype: 'button',
                text: 'Show Second Row'
            }, {
                xtype: 'button',
                text: 'Show All Rows'
            }]
        };

        me.columns = {
            defaults: {
                width: 100,
                headerField: [textField, textField]
            },
            items: [{
                dataIndex: 'x', header: "index", align: 'center', locked: false
            }, {
                dataIndex: 'y', header: "id", align: 'center'
            }, {
                dataIndex: 'a', header: "name"
                , headerField: [textField, textField, textField]
            }, {
                dataIndex: 'b', header: "phone"
            }, {
                dataIndex: 'c', header: "email", width: 150
            }, {
                dataIndex: 'd', header: "active", xtype: "booleancolumn", align: 'center', width: 50
            }, {
                dataIndex: 'e', header: "region", align: 'center', width: 80
            }, {
                dataIndex: 'f', header: "initials", align: 'center', width: 50
            }, {
                dataIndex: 'g', dateFormat: "m/d/Y", header: "date (str)", xtype: 'datecolumn', width: 80, align: 'center'
            }, {
                dataIndex: 'h', dateFormat: "m/d/Y", header: "date (ts)", xtype: 'timestampdatecolumn', width: 80, align: 'center'
            }, {
                dataIndex: 'i', header: "age", width: 50, align: 'center'
            }, {
                dataIndex: 'j', header: "salary", xtype: "numbercolumn", renderer: Ext.util.Format.usMoney, width: 80, align: 'right'
            }, {
                dataIndex: 'k', header: "married", xtype: "booleancolumn", width: 50, align: 'center'
            }, {
                dataIndex: 'l', header: "instructions", width: 80
            }, {
                dataIndex: 'm', header: "comments", width: 200
            }, {
                dataIndex: 'sa', xtype: "numbercolumn", header: "sa", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sb', xtype: "numbercolumn", header: "sb", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sc', xtype: "numbercolumn", header: "sc", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sd', xtype: "numbercolumn", header: "sd", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'se', xtype: "numbercolumn", header: "se", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sf', xtype: "numbercolumn", header: "sf", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sg', xtype: "numbercolumn", header: "sg", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sh', xtype: "numbercolumn", header: "sh", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'si', xtype: "numbercolumn", header: "si", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sj', xtype: "numbercolumn", header: "sj", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sk', xtype: "numbercolumn", header: "sk", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sl', xtype: "numbercolumn", header: "sl", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sm', xtype: "numbercolumn", header: "sm", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sn', xtype: "numbercolumn", header: "sn", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'so', xtype: "numbercolumn", header: "so", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sp', xtype: "numbercolumn", header: "sp", renderer: moneyRenderer, width: 80, align: 'right'
            }, {
                dataIndex: 'sq', xtype: "numbercolumn", header: "sq", renderer: moneyRenderer, width: 80, align: 'right'
            }]        
        };
        
        me.callParent(arguments);
    }

});