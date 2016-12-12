/* 
 * // CG: 12/10/2016
 * This is a test
 * Basically, I will keep an object in memory
 * and let only save states in memory when a button calls the persist state method
 * and another button can call the restoreState() button
 * 
 */

Ext.define('StateManager.state.MyLocalStorageProvider', {
    extend: 'Ext.state.Provider',
    requires: [
        'Ext.util.LocalStorage'
    ],
    
    alias: 'util.mylocalstorage',
   
    constructor: function () {
        var me = this;
 
        me.callParent(arguments);
 
        me.store = me.getStorageObject();
        if (me.store) {
            me.state = me.readLocalStorage();
        } else {
            me.state = {};
        }
    },
    
    readLocalStorage: function () {
        var store = this.store,
            data = {},
            keys = store.getKeys(),
            i = keys.length,
            key;
            
        while (i--) {
            key = keys[i];
            data[key] = this.decodeValue(store.getItem(key));
        }
 
        return data;
    },
    
    set: function (name, value) {
        var me = this;
        
        me.clear(name);
        if (value != null) { // !== undefined && !== null 
            me.store.setItem(name, me.encodeValue(value));
            me.callParent(arguments);
        }
    },
 
    // private 
    clear: function (name) {
        this.store.removeItem(name);
        this.callParent(arguments);
    },
    
    getStorageObject: function () {
        var prefix = this.prefix,
            id = prefix,
            n = id.length - 1;
 
        if (id.charAt(n) === '-') {
            id = id.substring(0, n);
        }
 
        return new Ext.util.LocalStorage({
            id: id,
            prefix: prefix
        });
    }    
});