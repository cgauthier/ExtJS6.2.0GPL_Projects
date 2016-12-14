/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('ModernGridRowHighlight.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.MessageBox',
        'ModernGridRowHighlight.view.main.MainController',
        'ModernGridRowHighlight.view.main.MainModel',
        'ModernGridRowHighlight.view.main.List',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.layout.HBox',
        'Ext.Anim',
        'Ext.plugin.Responsive'
    ],
    mixins: ['Ext.mixin.Responsive'],
    plugins: 'responsive',
    config: {
        foo: null
    },
    responsiveConfig: {
        wide: {
            foo: 1
        },
        tall: {
            foo: 2
        }
    },
    updateFoo: function(foo) {
        console.log("responsive foo: " + foo); // logs "1" or "2" as screen shape changes between wide and tall
    },
    controller: 'main',
    viewModel: 'main',
    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },
    tabBarPosition: 'bottom',
    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }, {
                xtype: 'toolbar',
                docked: "bottom",
                layout: {
                    type: "hbox",
                    align: 'stretch',
                    pack: 'center'
                },
                defaults: {
                    action: 'list'
                },
                items: [{
                    xtype: 'button',
                    text: 'Add 1'
                }, {
                    xtype: 'button',
                    text: 'Add 2'
                }, {
                    xtype: 'button',
                    text: 'Update First Record'
                }],
                margin: "0",
                padding: "0"
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});