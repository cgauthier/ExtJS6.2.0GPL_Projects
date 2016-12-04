Ext.define('HyBrid.view.main.content.Menu', {
    extend: 'Ext.container.Container',
    xtype: 'content-menu',
    requires: [
        'Ext.button.Button',
        'Ext.layout.container.VBox'
    ],
    initComponent: function() {
        var me = this;
        me.layout = {
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        };
        
        me.defaults = {
            margin: "5 30 5 30",
            padding: "10 0",
            xtype: 'button',
            cls: "default-button",
            textAlign: "left"
        };
        
        me.items = [{
            text: "Home",
            iconCls: "x-fa fa-home",
            page: 'Home'
        }, {
            text: "Event Setup",
            iconCls: "x-fa fa-cogs",
            page: 'EventSetup'
        }, {
            text: "Agenda",
            iconCls: "x-fa fa-calendar",
            page: 'Agenda'
        }, {
            text: "Presentations",
            iconCls: "x-fa fa-video-camera",
            page: 'Presentations'
        }, {
            text: "Events",
            iconCls: "x-fa fa-headphones",
            page: 'Events'
        }, {
            text: "Archive",
            iconCls: "x-fa fa-archive",
            page: 'Archive'
        }, {
            text: "Q & A",
            iconCls: "x-fa fa-comment",
            page: 'QA'
        }];
        
        me.callParent(arguments);
    }
    
});
