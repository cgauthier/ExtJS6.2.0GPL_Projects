Ext.define('StateManager.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.panel.Panel',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',        
        'Ext.layout.container.HBox',
        'Ext.layout.container.Border',
        'Ext.layout.container.Anchor',
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.plugin.Viewport'
    ],
    xtype: 'app-main',
    stateful: true,
    stateId: 'app-main',
    layout: {
        type: 'border'
    },
    bbar: {
        xtype: 'toolbar',
        items: [{
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'Save State'
        }, {
            xtype: 'button',
            text: 'Restore State'
        }]
    },
    items: [{
        stateful: true,
        stateId: 'west-panel',
        xtype: 'panel',
        title: "State Manager Test",
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        listeners: {
            beforerender: {
                fn: function(cmp) {
                    var provider = Ext.state.Manager.getProvider();
                    var state = provider.get(cmp.stateId + "-activeTab");
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
                                        
                }
            }
        },        
        stateful: true,
        stateId: 'center-tabpanel',
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            listeners: {
                activate: function(cmp) {
                    var provider = Ext.state.Manager.getProvider();
                    var tabpanel = cmp.up();
                    provider.set(tabpanel.stateId + "-activeTab", cmp.stateId);
                }
            },               
            stateful: true,
            stateId: 'tabpanel-1',
            title: 'Tab 1',
            layout: {
                type: 'hbox',
                align: 'stretch'
                
            },
            defaults: {
                flex: 1
            },
            items: [{
                stateful: true,
                stateId: 'tabpanel-1-grid',
                xtype: 'grid',
                store: Ext.create('Ext.data.Store', {
                    fields: ["id", "start_time", "participant", "title", "room", "session", "track", "day"],
                    proxy: {
                        url : "resources/data/GridDemo.json",
                        type: 'ajax',
                        reader: {
                            type: 'json',
                            rootProperty: "data"
                        }
                    },
                    autoLoad: true
                }),
                viewConfig: {
                    stripeRows: true
                },
                columns: [{
                    dataIndex: "id",
                    text: "ID",
                    width: 70,
                    stateId: 'tabpanel-1-grid-id'                    
                    
                }, {
                    dataIndex: "title",
                    text: "Title",
                    flex: 1,
                    stateId: 'tabpanel-1-grid-title'                    
                    
                }, {
                    dataIndex: "session",
                    text: "Session",
                    flex: 1,
                    stateId: 'tabpanel-1-grid-session'
                }, {
                    dataIndex: "track",
                    text: "Track",
                    flex: 1,
                    stateId: 'tabpanel-1-grid-track'
                }, {
                    dataIndex: "room",
                    text: "Room",
                    width: 100,
                    stateId: 'tabpanel-1-grid-room'
                }, {
                    dataIndex: "participant",
                    text: "Participant",
                    flex: 1,
                    stateId: 'tabpanel-1-grid-participant'
                }]  
            }, {
                stateful: true,
                stateId: 'tabpanel-1-form',
                xtype: 'form',
                layout: {
                    type: 'anchor',
                    anchor: '100%'
                },
                defaults: {
                    margin: "10 20",
                    anchor: "100%"
                },
                items: [{
                    xtype: 'textfield',
                    name: 'fullname',
                    fieldLabel: 'Full Name',
                    stateId: 'tabpanel-1-form-fullname',
                    stateEvents: ['change']                            
                }, {
                    xtype: 'combo',
                    name: 'sign',
                    fieldLabel: "Zodiac Sign",
                    store: Ext.create('Ext.data.Store', {
                        fields: ["sign"],
                        data: [
                            {"sign": "Aries"},
                            {"sign": "Taurus"},
                            {"sign": "Gemini"},
                            {"sign": "Cancer"},
                            {"sign": "Leo"},
                            {"sign": "Virgo"},
                            {"sign": "Libra"},
                            {"sign": "Scorpio"},
                            {"sign": "Sagittarius"},
                            {"sign": "Capricorn"},
                            {"sign": "Aquarius"},
                            {"sign": "Pisces"}
                        ]
                    }),
                    queryMode: 'local',
                    displayField: "sign",
                    valueField: "sign",
                    stateId: 'tabpanel-1-form-sign',
                    stateEvents: ['select']                    
                }]
            }]
        }, {
            listeners: {
                activate: function(cmp) {
                    var provider = Ext.state.Manager.getProvider();
                    var tabpanel = cmp.up();
                    provider.set(tabpanel.stateId + "-activeTab", cmp.stateId);
                }
            },            
            stateful: true,
            stateId: 'tabpanel-2',
            title: 'Tab 2',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});