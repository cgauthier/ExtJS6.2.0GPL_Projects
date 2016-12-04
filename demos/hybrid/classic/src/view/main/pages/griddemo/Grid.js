Ext.define('HyBrid.view.main.pages.griddemo.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'griddemo-grid',
    requires: [
        "Ext.form.field.Text",
        'Ext.layout.container.Border',
        'Ext.grid.column.Action',
        'Ext.grid.plugin.RowEditing'
    ],
    mainScope: null,
    initComponent: function() {
        var me = this;

        me.store = Ext.getStore('pages.presentations.Grid');
        me.cls = "project-grid-format";
        me.viewConfig = {
            stripeRows: false
        };
        
        var filterField = {
            xtype: 'textfield',
            action: 'filter',
            cls: "filter-textfield"
        };

        var columns = [{
            dataIndex: 'title',
            header: 'Title',
            flex: 1
        }, {
            dataIndex: 'start_time',
            header: 'Time',
            width: 80
        }, {
            dataIndex: 'track',
            header: 'Track',
            width: 200
        }, {
            dataIndex: 'session',
            header: 'Session',
            width: 250
        }, {
            dataIndex: 'participants_name',
            header: 'Participants',
            width: 200,
            renderer: function(val) {
               var str = [];
               var x, l = val.length;
               for(x = 0; x < l; x++) {
                   str.push(val[x].name);
               }
               return str.join("<br/>");
            }
        }, {
            dataIndex: 'room',
            header: 'Venue',
            width: 125
        }, {
            dataIndex: 'Day',
            header: 'day',
            width: 60,
            renderer: function(val, meta) {
                meta.align = "center";
                return val;
            }
        }, {
            xtype: 'actioncolumn',
            dataIndex: '',
            header: '',
            width: 50,
            renderer: function(val, meta) {
                meta.classes.push('action-class');
            },
            items: [{
                iconCls: "x-fa fa-edit action-class",
                handler: function(view, rowIndex, colIndex, cfg, e, rec, rowEl) {
                    this.view.down('content-title').setTitle('Edit Record');
                    var griddemo = view.up('pages-griddemo');
                    var form = griddemo.down('griddemo-form');
                    form.rec = rec;
                    griddemo.getLayout().setActiveItem(form);  
                }.bind(me.mainScope)
            }]
        }];        
        
        var x, l = columns.length;
        for(x = 0; x < l; x++) {
            
            if(columns[x].dataIndex) {
                columns[x].items = Ext.clone(filterField);    
            } 
            columns[x].menuDisabled = true;
            columns[x].editor = {
                xtype: 'textfield',
                enableKeyEvents: true,
                listeners: {
                    'keyup': {
                        fn: function(field, e) {
                            if(e.keyCode == e.ENTER) {
                                this.plugins[0].completeEdit();
                            }
                        },
                        scope: me
                    }
                }
            };
        }
        
        me.columns = columns;
        me.plugins = {
            ptype: 'rowediting',
            listeners: {
                'edit': {
                    fn: function(editor, context) {
                        context.record.commit();
                    },
                    scope: me
                }
            }
        };
        
        me.callParent(arguments);
    }
});