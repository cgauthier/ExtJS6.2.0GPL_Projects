Ext.define('StateManager.view.main.center.panel1.FormViewModel', {
    "extend": "Ext.app.ViewModel",
    "alias": "viewmodel.center-tabpanel-panel1-form",
    "stores": {
        "combo": {
            "fields": ["sign"],
            "data": [
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
        }
    }    
});