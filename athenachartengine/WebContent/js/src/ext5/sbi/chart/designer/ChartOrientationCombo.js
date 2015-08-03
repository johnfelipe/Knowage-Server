Ext.define('Sbi.chart.designer.ChartOrientationCombo',{
    extend : 'Ext.form.ComboBox',
    requires : [
	            'Sbi.chart.designer.ChartUtils'
	            ],
	queryMode : 'local',
	value : 'vertical',
	triggerAction : 'all',
	forceSelection : true,
	editable : false,
	fieldLabel : LN('sbi.chartengine.configuration.orientation'),
	displayField : 'name',
	valueField : 'value',
	store : {
		fields : [ 'name', 'value' ],
		data : [ {
			name : LN('sbi.chartengine.configuration.orientation.v'),
			value : 'vertical'
		}, {
			name : LN('sbi.chartengine.configuration.orientation.h'),
			value : 'horizontal'
		} ]
	}
});