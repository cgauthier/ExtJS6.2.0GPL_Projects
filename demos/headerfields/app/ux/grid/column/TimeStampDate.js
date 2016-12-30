Ext.define('HeaderFields.ux.grid.column.TimeStampDate', {
    extend: 'Ext.grid.column.Column',
    alias: ['widget.timestampdatecolumn'],
    requires: ['Ext.Date'],
 
     initComponent: function(){
        if (!this.format) {
            this.format = Ext.Date.defaultFormat;
        }
        
        this.callParent(arguments);
    },
    
    defaultRenderer: function(value){
        return Ext.util.Format.date(new Date(value), this.format);
    }
});