Ext.define('HeaderFields.ux.grid.feature.HeaderFields', {
    extend: 'Ext.grid.feature.Feature',
    alias: 'feature.headerfields',
    requires: [
        'Ext.form.field.*',
        'Ext.layout.container.VBox'
    ],
    // custom variables
    defaultFieldHeight: 0,
    maxHeaderFieldLength: 0,
    getHeaderFieldEl: function(column) {
        return column.getEl().select("div[class='headerFields']").elements[0];
    },
    setHolderId: function(id, dataIndex) {
        return id + "_" + dataIndex + "_" + "holder";
    },
    setHFId: function(id, dataIndex) {
       return "hf_" + id + "_" + dataIndex;
    },
    setId: function(grid) {
        return (grid.itemId) ? grid.itemId : grid.id;
    },
    eventPreventHandler: function(e) {
        e.stopPropagation();  
    },
    constructor: function(cfg) {
       var me = this;
       Ext.apply(me, cfg);
       me.callParent(arguments);
    },  
    placeholder: false,
    addPlaceHolder: false,
    placeHolderHeight: 0,
    hasCheckbox: false,
    getFieldHeight: function() {
        var height;
        var t = Ext.create('Ext.form.field.Text', {
            floating: true,
            renderTo: Ext.getBody(),
            border: false
            
        });
        t.setPosition(-1000, -1000);
        t.show();
        height = t.getHeight();
        t.hide();
        t.destroy();
        return height;
    },

    init: function(grid) {
        var me = this,
            headerCt = grid.getColumnManager().headerCt,
            columns = headerCt.getGridColumns(),
            l = columns.length,
            placeholder = "<div class='headerFields' id='{1}' style='height:{0}px!important;width:100%!important;margin:0px;padding:0px;'></div>",
            x, column;

        me.grid.addCls("HeaderFieldsCls");
        me.defaultFieldHeight = me.getFieldHeight();

        if(me.hasCheckbox) {
            l++;
        }

        me.setAPI(grid);

        for(x = 0; x < l; x++) {
            column = columns[x];
            if(column && column.headerField && Ext.isArray(column.headerField)) {
                me.addPlaceHolder = true;
                grid.hasHeaderFields = true;
                me.maxHeaderFieldLength = Math.max(me.maxHeaderFieldLength, column.headerField.length);
            }
        }
        
        me.placeHolderHeight = (me.defaultFieldHeight * me.maxHeaderFieldLength);
        me.placeholder = placeholder;
        
        grid.getView().enableTextSelection = true;

        if(me.addPlaceHolder == true) {
            headerCt.on("afterrender", function(headerCt) {
                var me = this;
                var items = headerCt.items.items;
                var item;
                var itemEl;               
                var grid = me.grid;
                var id = me.setId(grid);
                var idHolder;
                var placeholder;
                var hl;
                var headerField;
                var placeHolderEl;
                var el;
                var hfId;
                var newCfg;
                var widget;
                var height = 0;
             
                var iFn = function() {
                    if(items[0] && items[0].getEl()) {
                        for(var x = 0; x < l; x++) {
                            item = items[x];
                            idHolder = me.setHolderId(id, item.dataIndex);  
                            placeholder = Ext.String.format(me.placeholder, me.placeHolderHeight, idHolder);
                            itemEl = item.getEl();                      
                            height = Math.max(height, Ext.get(Ext.get(itemEl).select('div').elements[0]).getHeight());       
                        }
                        
                        for(var x = 0; x < l; x++) {
                            item = items[x];
                            idHolder = me.setHolderId(id, item.dataIndex);  
                            placeholder = Ext.String.format(me.placeholder, me.placeHolderHeight, idHolder);
                            itemEl = item.getEl();                      
                            itemEl.createChild(placeholder);
                            Ext.get(Ext.get(itemEl).select('div').elements[0]).setHeight(height);
                            if(item.headerField && Ext.isArray(item.headerField)) {
                                hl = item.headerField.length;
                                for(y = 0; y < hl; y++) {
                                  headerField = item.headerField[y];
                                  placeHolderEl = itemEl.select("div[id='" + idHolder + "']").elements[0]; 
                                  el = Ext.get(placeHolderEl);
                                  el.on({
                                      mousedown: {
                                          fn: me.eventPreventHandler
                                      },
                                      click: {
                                          fn: me.eventPreventHandler
                                      },
                                      dblclick: {
                                          fn: me.eventPreventHandler
                                      },
                                      keydown: {
                                          fn: me.eventPreventHandler
                                      },
                                      keypress: {
                                          fn: me.eventPreventHandler
                                      },
                                      keyup: {
                                          fn: me.eventPreventHandler
                                      }
                                  });
                                  hfId = me.setHFId(id, item.dataIndex) + "_" + y;
                                  
                                  if(headerField.store && typeof headerField.store === "string") {
                                      headerField.store = Ext.getStore(headerField.store);
                                  }
                                    
                                  var baseCfg = {
                                      itemId: hfId,
                                      id: hfId,
                                      renderTo: idHolder,
                                      margin: "0",
                                      height: me.defaultFieldHeight,
                                      dataIndex: item.dataIndex
                                  };
                                  if(item.width) {
                                      baseCfg.width = item.width;
                                      baseCfg.flex = null;
                                  } 
                                  if(item.flex) {
                                      baseCfg.width = null;
                                      baseCfg.flex = item.flex;
                                  }
                                  newCfg = Ext.apply(baseCfg, headerField);
                                  widget = Ext.widget(newCfg);                                    
                               }
                            }  
                        }
                        // fixing a chrome bug
                        headerCt.up().getView().refresh();                                        
                    } else {
                        window.setTimeout(iFn, 32);
                    }
                };
                iFn();
            }, me);
           
           // need to improve this as there might be a columnresize event which
           // will need to cached.
           if(!grid.listeners) {
               grid.listeners = {};
           }
            
           Ext.apply(grid.listeners, {
              'columnresize': {
                  fn: function(headerCt, targetColumn, width) {
                      var me = this; // feature
                      var grid = me.grid;
                      var id = me.setId(grid);
                      var idHolder = me.setHolderId(id, targetColumn.dataIndex);
                      var widgetId;
                      var divEl;
                      var widget;
                      var l;
                      var x;
                      if(grid.hasHeaderFields) {
                          if(targetColumn.headerField) {
                              l = targetColumn.headerField.length;
                              for(x = 0; x < l; x++) {
                                  widgetId = me.setHFId(id, targetColumn.dataIndex) + "_" + x;
                                  divEl = targetColumn.getEl().select("div[id='" + idHolder + "']");
                                  divEl.setWidth(targetColumn.getWidth());
                                  widget = Ext.getCmp(widgetId);
                                  widget.setWidth(targetColumn.getWidth());
                              }  
                          }
                      }
                  },
                  scope: me
              }
            });            
        }
    },
    setAPI: function(grid) {
        grid.HFAPI = grid.HeaderFieldsAPI = Ext.Function.bind(function() {
            
            var grid = this;
            // grid will be available to all methods being returned.
            return {
                getId: function() {
                    return (!Ext.isEmpty(grid.itemId)) ? grid.itemId : grid.id; 
                },
                getFieldId: function(dataIndex, index) {
                    var gridId = this.getId(grid),
                        idTpl = "hf_{0}_{1}_{2}";
                    return Ext.String.format(idTpl, gridId, dataIndex, index);
                },
                getAllFields: function() {
                    var result = [],
                        gridId = this.getId(grid),
                        store = grid.getStore(),
                        columns = grid.getView().getGridColumns(),
                        column, dataIndex, fieldId, field, count, l = columns.length, x;
                    for(x = 0; x < l; x++) {
                        count = 0;
                        column = columns[x];
                        dataIndex = column.dataIndex;
                        fieldId = this.getFieldId(dataIndex, count);
                        field = Ext.getCmp(fieldId);
                        while(field) {
                            result.push(field);
                            count++;
                            fieldId = this.getFieldId(dataIndex, count);
                            field = Ext.getCmp(fieldId);
                        }
                    }
                    return result;
                },
                getFieldsForRow: function(rowIdx) {
                    var result = [],
                        gridId = this.getId(grid),
                        store = grid.getStore(),
                        columns = grid.getView().getGridColumns(),
                        column, dataIndex, fieldId, field, l = columns.length, x;
                        
                    for(x = 0; x < l; x++) {
                        column = columns[x];
                        dataIndex = column.dataIndex;
                        fieldId = this.getFieldId(dataIndex, count);
                        field = Ext.getCmp(fieldId);
                        if(field) {
                            result.push(field);
                        }
                    }
                    return result;                    
                },
                getFieldsForColumn: function(dataIndex) {
                    var result = [],
                        gridId = this.getId(grid),
                        store = grid.getStore(),
                        columns = grid.getView().getGridColumns(),
                        column, fieldId, field, count, l = columns.length, x;
                    for(x = 0; x < l; x++) {
                        count = 0;
                        column = columns[x];
                        if(dataIndex == column.dataIndex) {
                            fieldId = this.getFieldId(dataIndex, count);
                            field = Ext.getCmp(fieldId);
                            while(field) {
                                result.push(field);
                                count++;
                                fieldId = this.getFieldId(dataIndex, count);
                                field = Ext.getCmp(fieldId);
                            }
                            break;    
                        }
                    }
                    return result;
                },
                hideFieldsForRow: function(rowIdx) {
                    var result = this.getFieldsForRow(rowIdx);
                    var x, l = result.length;
                    if(l > 0) {
                        for(x = 0; x < l; x++) {
                            result[x].hide();
                        }
                    }
                },
                showFieldsForRow: function(rowIdx) {
                    var result = this.getFieldsForRow(rowIdx);
                    var x, l = result.length;
                    if(l > 0) {
                        for(x = 0; x < l; x++) {
                            result[x].show();
                        }
                    }
                },
                hideAllFields: function() {
                    var result = this.getAllFields();
                    var x, l = result.length;
                    if(l > 0) {
                        for(x = 0; x < l; x++) {
                            result[x].hide();
                        }
                    }                  
                },
                showAllFields: function() {
                    var result = this.getAllFields();
                    var x, l = result.length;
                    if(l > 0) {
                        for(x = 0; x < l; x++) {
                            result[x].show();
                        }
                    }                  
                },
                hideFieldsForColumn: function(dataIndex) {
                    var result = this.getFieldsForColumn(dataIndex);
                    var x, l = result.length;
                    if(l > 0) {
                        for(x = 0; x < l; x++) {
                            result[x].hide();
                        }
                    }
                },
                showFieldsForColumn: function(dataIndex) {
                    var result = this.getFieldsForColumn(dataIndex);
                    var x, l = result.length;
                    if(l > 0) {
                        for(x = 0; x < l; x++) {
                            result[x].show();
                        }
                    }
                }
            };
            
            
        }, grid);
    }
    
});