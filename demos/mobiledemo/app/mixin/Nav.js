Ext.define('MobileDemo.mixin.Nav', {
    // CG: 11/28/2016
    // must always use pages which are either app-base or derived from app-base
    // app-base contains the necessary hookups for navigation.
    createPage: function(page) {
        var main, base, cmp, previous, me = this;
        main = me.up('app-main');
        previous = main.getActiveItem();
        base = {
            xtype: 'app-base',
            typeOfApp: 'dynamic',
            previous: previous
        };
        Ext.apply(base, page);
        cmp = Ext.create(base);
        // CG: 11/28/2016
        // not in use right now;
        // main.nav.previous = previous;
        main.add(cmp);
        main.setActiveItem(cmp);        
    }
});
