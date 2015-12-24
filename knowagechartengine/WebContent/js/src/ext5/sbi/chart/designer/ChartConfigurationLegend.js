Ext.define('Sbi.chart.designer.ChartConfigurationLegend', {
	extend : 'Sbi.chart.designer.ChartConfigurationRoot',
	
	/** 
	 * @author: danristo (danilo.ristovski@mht.net)
	 */
	columnWidth: 1,
	height: 325,
	
	id: "chartLegend",
	title : LN('sbi.chartengine.configuration.legend'),
	bodyPadding : 10,
	items : [],
	stylePanelLegend : {},
	
	bind:
	{
		disabled:'{!configModel.showLegend}'
	},
	
	constructor: function(config) 
	{
        this.callParent(config);
        this.viewModel = config.viewModel;
        
        this.stylePanelLegend = Ext.create
        (
    		'Sbi.chart.designer.StylePopup', 
    		{
	    	    title:LN('sbi.chartengine.configuration.legendstyle'),
	    	    viewModel: this.viewModel,
	    	    bindFontAlign:'{configModel.legendAlign}',
	    	    bindFont:'{configModel.legendFont}',
	    	    bindFontDim:'{configModel.legendDimension}',
	    	    bindFontStyle:'{configModel.legendStyle}',
	    	    bindColor:'{configModel.legendColor}',
	    	    bindBorderWidth:'{configModel.legendBorderWidth}',
	    	   	bindBackgroundColor:'{configModel.legendBackgroundColor}',
	    	   	
	    	   	paddingFontElements: Sbi.settings.chart.configurationStep.paddingOfInnerFields,
	    	   	layoutFontElements: Sbi.settings.chart.configurationStep.layoutFieldsInMainPanel
    		}
		);
        
        var stylePanelLegend = this.stylePanelLegend;
        
        var item = 
    	[
         	{
         		xtype : 'fieldcontainer',
            	 
            	 /**
     			 * Take the default layout for fields in the main panel. It is applied
     			 * also in other fields in this file.
     			 * 
     			 * @author Danilo Ristovski (danristo, danilo.ristovski@mht.net)
     			 */
     			layout: Sbi.settings.chart.configurationStep.layoutFieldsInMainPanel,
            	 
            	 defaults : 
            	 {				
     				/**
     				 * Old implementation (margin) and the new one (padding). It is applied
     				 * also in other fields in this file.
     				 * 
     				 * @author Danilo Ristovski (danristo, danilo.ristovski@mht.net)
     				 */
     				margin: Sbi.settings.chart.configurationStep.marginOfTopFieldset					
            	 },
            	 
            	 items: 
        		 [                    	 
        	         {
                		 xtype: 'combo',
                		 queryMode: 'local',
                		 value: 'bottom',
                		 triggerAction: 'all',
                		 forceSelection: true,
                		 editable: false,
                		 fieldLabel: LN('sbi.chartengine.configuration.position'),
                		 bind: '{configModel.legendPosition}',
                		 displayField: 'name',
                		 valueField: 'value',
                		 emptyText: LN("sbi.chartengine.configuration.legend.position.emptyText"),
                		 
                		 /**
                		  * @author Danilo Ristovski (danristo, danilo.ristovski@mht.net)
                		  */
                		 width: Sbi.settings.chart.configurationStep.widthOfFields,
                		
                		 store : 
                		 {
                			 fields: ['name', 'value'],
                			 
                			 data: 
            				 [ 
        				   		{
        				   			name: LN("sbi.chartengine.configuration.legend.position.top"),	
        				   			value: 'top'
        				   		}, 
            				   
        				   		{
        				   			name: LN("sbi.chartengine.configuration.legend.position.bottom"),	
        				   			value: 'bottom'
        				   		}, 
            				   
        				   		{
        				   			name: LN("sbi.chartengine.configuration.legend.position.left"),
        				   			value: 'left'
        				   		},
            				   
        				   		{
        				   			name: LN("sbi.chartengine.configuration.legend.position.right"),	
        				   			value: 'right'
        				   		}
    				   		]
                		 }
                	 }
    	         ]
             },  
                     
             {            
            	 xtype : 'fieldcontainer',

            	 layout: Sbi.settings.chart.configurationStep.layoutFieldsInMainPanel,
     			
				 defaults : 
				 {	
    				margin: Sbi.settings.chart.configurationStep.marginOfInnerFieldset,		            
				 },
     			
            	 items: 
        		 [
    			  	{                    		 
    			  		xtype: 'checkboxfield',
    			  		bind :'{configModel.legendFloating}', 
    			  		id: 'floating',
    			  		labelSeparator: '',
    			  		fieldLabel: LN('sbi.chartengine.configuration.floating')
    			  	}            	 
            	 ]
             }                     
         ]; 
        
        this.add(item);
        
        // Danilo Ristovski (21.12)
        this.add(this.stylePanelLegend.items.items)
	}
});