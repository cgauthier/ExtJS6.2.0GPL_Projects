Ext.define('StateManager.view.main.center.panel1.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'center-tabpanel-panel1-grid',
    requires: [
        'StateManager.view.main.center.panel1.GridViewModel'
    ],
    stateful: true,
    stateId: 'center-tabpanel-panel1-grid',
    viewModel: 'center-tabpanel-panel1-grid',
    bind: {
        store: "{grid}"
    },
    viewConfig: {
        stripeRows: true
    },
    columns: [{
        dataIndex: "id",
        text: "ID",
        width: 70,
        stateId: 'center-tabpanel-panel1-grid-id'                    
    }, {
        dataIndex: "title",
        text: "Title",
        flex: 1,
        stateId: 'center-tabpanel-panel1-grid-title'                    
    }, {
        dataIndex: "session",
        text: "Session",
        flex: 1,
        stateId: 'center-tabpanel-panel1-grid-session'
    }, {
        dataIndex: "track",
        text: "Track",
        flex: 1,
        stateId: 'center-tabpanel-panel1-grid-track'
    }, {
        dataIndex: "room",
        text: "Room",
        width: 100,
        stateId: 'center-tabpanel-panel1-grid-room'
    }, {
        dataIndex: "participant",
        text: "Participant",
        flex: 1,
        stateId: 'center-tabpanel-panel1-grid-participant'
    }]  
});