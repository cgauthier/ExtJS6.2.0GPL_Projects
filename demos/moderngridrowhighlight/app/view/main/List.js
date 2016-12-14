/**
 * This view is an example list of people.
 */
Ext.define('ModernGridRowHighlight.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    requires: [
        'ModernGridRowHighlight.view.main.ListModel'
    ],
    viewModel: "mainlist",
    title: 'Highlight Row Test',
    bind: {
        store: '{mainlist}'
    },
    mixins: ['Ext.mixin.Responsive'],
    plugins: 'responsive',
    config: {
        columns: []
    },
    responsiveConfig: {
        wide: {
            columns: [
                { text: 'Name',  dataIndex: 'name', flex: 0.5 },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone', flex: 0.75}
            ]
        },
        tall: {
            columns: [
                { text: 'Name',  dataIndex: 'name', width: 95 },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone', width: 135 }
            ]
        }
    }
    // updateColumns: function(columns) {
    //     console.log("responsive columns: " + columns);
    // }

});
