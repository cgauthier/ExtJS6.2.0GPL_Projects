Ext.define('MobileDemo.view.main.login.Panel', {
    extend: 'MobileDemo.view.main.Base',
    xtype: 'login-panel',
    requires: [
        'Ext.Button',
        'Ext.field.Text',
        'Ext.Container'
        // 'MobileNavDemo.view.main.nav.TopToolbar',
        // 'MobileNavDemo.view.main.login.PanelController'
    ],
    initialize: function() {
        var me = this;

        var items = [{
            xtype: 'container',
            html: "Welcome",
            margin: "5 0 20 0"
        }, {
            xtype: 'container',
            html: "A Demo Mobile App<br/>With ExtJS 6.2.0",
            margin: "5 0 50 0"
        }, {
            xtype: "textfield",
            name:'username',
            placeHolder:'Enter User ID',
            margin: "0 40 20 40"
        }, {
            xtype: "textfield",
            name:'password',
            inputType: "password",
            placeHolder:'Enter Password',
            margin: "0 40 20 40"
        },{
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'right'
            },
            items: [{
                xtype: 'button',
                text: 'login',
                action: 'fakelogin',
                padding: "10 20 5 20"
            }],
            margin: "0 40 0 0"
        },{
            docked: 'bottom',
            xtype: "container",
            margin: "20",
            height: "130",
            html: "Some Logo and Stuff goes here!"
        }];
        
        var defaults = {
            margin: "5 0"
        };

        me.toolbarCfg = {
            hideToolbar: true,
            title: "Login",
            hideBackButton: true,
            hideContextMenuButton: true
        };

        me.setConfig("defaults", defaults);        
        me.setConfig("items", items);
        me.callParent(arguments);
    }

});