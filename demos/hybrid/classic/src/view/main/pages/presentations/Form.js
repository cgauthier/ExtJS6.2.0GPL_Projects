Ext.define('HyBrid.view.main.pages.presentations.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'presentations-form',
    requires: [
        'Ext.layout.container.HBox',
        'Ext.panel.Panel',
        'Ext.container.Container',
        'Ext.layout.container.Anchor',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'HyBrid.view.main.pages.presentations.form.FacultyGrid'
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
            }, {
                name: 'cme',
                fieldLabel: "CME"
            }],
            bbar: {
                xtype: 'toolbar',
                items: [{
                    xtype: 'button',
                    text: 'Save Presentation',
                    action: "save",
                    cls: 'action-button',
                    margin: "0 10"                
                }],
                margin: "0",
                padding: "0"
            }
            
        }, {
            xtype: 'container',
            flex: 1,
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
                fieldLabel: "Presentation ID",
                labelAlign: "top",
                xtype: 'textfield',
                anchor: '100%',
                cls: 'form-input-textfield',
                labelCls: 'form-label',
                margin: "2 10",
                name: 'presentation_id'
            }, {
                xtype: 'form-faculty-grid',
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
        
        me.callParent(arguments);
    }
});
