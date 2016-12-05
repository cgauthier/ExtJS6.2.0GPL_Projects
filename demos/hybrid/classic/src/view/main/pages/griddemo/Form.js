Ext.define('HyBrid.view.main.pages.griddemo.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'griddemo-form',
    requires: [
        'Ext.layout.container.HBox',
        'Ext.panel.Panel',
        'Ext.container.Container',
        'Ext.layout.container.Anchor',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'HyBrid.view.main.pages.presentations.form.ParticipantsGrid'
    ],
    mainScope: null,
    rec: null,
    initComponent: function() {
        var me = this;
          
        me.layout = {
            type: 'hbox',
            align: 'stretch'
        };

        me.items = [{
            xtype: 'panel',
            scrollable: true,
            flex: 2,
            layout: {
                type: 'anchor',
                anchor: '100%'
            },
            defaults: {
                labelAlign: "top",
                xtype: 'textfield',
                anchor: '100%',
                cls: 'form-input-textfield',
                labelCls: 'form-label',
                margin: "2 10"
            },
            items: [{
                name: 'id',
                fieldLabel: "ID"
            }, {
                name: 'title',
                fieldLabel: "Title"
            }, {
                name: 'start_time',
                fieldLabel: "Start Time"
            }, {
                name: 'end_time',
                fieldLabel: "End Time"
            }, {
                name: 'track',
                fieldLabel: "Track"
            }, {
                name: 'session',
                fieldLabel: "Session"
            }]
            
        }, {
            xtype: 'container',
            flex: 1,
            scrollable: true,
            layout: {
                type: 'anchor',
                anchor: '100%'
            },
            items: [{
                xtype: 'checkbox',
                boxLabel: "Do not archive",
                fieldCls: "form-label",
                name: "archive"
            }, {
                xtype: 'form-participants-grid',
                anchor: '100%'
            }, {
                xtype: 'toolbar',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'textfield',
                    flex: 1,
                    cls: 'form-input-textfield',
                    name: 'member_add'
                }, {
                    xtype: 'textfield',
                    flex: 1,
                    cls: 'form-input-textfield',
                    name: 'role_add'
                }, {
                    xtype: 'button',
                    text: 'Add',
                    action: 'add',
                    cls: 'action-button',
                    margin: "0 10"                
                }]
            }]
        }];

        me.bbar = {
            xtype: 'toolbar',
            items: [{
                xtype: 'tbfill'
            }, {
                xtype: 'button',
                text: 'Save Form',
                action: "save",
                cls: 'action-button',
                margin: "0 10"                
            }],
            margin: "0",
            padding: "0"
        };        
        me.callParent(arguments);
    }
});
