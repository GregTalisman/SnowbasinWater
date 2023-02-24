var wms_layers = [];

var lyr_WATER_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "WATER",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WATER_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12458403.907838, 5039102.159395, -12445793.663354, 5046347.219707]
                            })
                        });
var format_ExistingWaterLines_1 = new ol.format.GeoJSON();
var features_ExistingWaterLines_1 = format_ExistingWaterLines_1.readFeatures(json_ExistingWaterLines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingWaterLines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingWaterLines_1.addFeatures(features_ExistingWaterLines_1);
var lyr_ExistingWaterLines_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExistingWaterLines_1, 
                style: style_ExistingWaterLines_1,
                interactive: true,
    title: 'Existing Water Lines<br />\
    <img src="styles/legend/ExistingWaterLines_1_0.png" /> EXWTPI06<br />\
    <img src="styles/legend/ExistingWaterLines_1_1.png" /> EXWTPI08<br />\
    <img src="styles/legend/ExistingWaterLines_1_2.png" /> EXWTPI10<br />\
    <img src="styles/legend/ExistingWaterLines_1_3.png" /> EXWTPI12<br />\
    <img src="styles/legend/ExistingWaterLines_1_4.png" /> <br />'
        });
var format_ExistingWells_2 = new ol.format.GeoJSON();
var features_ExistingWells_2 = format_ExistingWells_2.readFeatures(json_ExistingWells_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingWells_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingWells_2.addFeatures(features_ExistingWells_2);
var lyr_ExistingWells_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExistingWells_2, 
                style: style_ExistingWells_2,
                interactive: true,
                title: '<img src="styles/legend/ExistingWells_2.png" /> ExistingWells'
            });
var format_Tanks_3 = new ol.format.GeoJSON();
var features_Tanks_3 = format_Tanks_3.readFeatures(json_Tanks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanks_3.addFeatures(features_Tanks_3);
var lyr_Tanks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tanks_3, 
                style: style_Tanks_3,
                interactive: true,
                title: '<img src="styles/legend/Tanks_3.png" /> Tanks'
            });
var format_WellHouseWaterlines_4 = new ol.format.GeoJSON();
var features_WellHouseWaterlines_4 = format_WellHouseWaterlines_4.readFeatures(json_WellHouseWaterlines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WellHouseWaterlines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WellHouseWaterlines_4.addFeatures(features_WellHouseWaterlines_4);
var lyr_WellHouseWaterlines_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WellHouseWaterlines_4, 
                style: style_WellHouseWaterlines_4,
                interactive: true,
                title: '<img src="styles/legend/WellHouseWaterlines_4.png" /> Well House Waterlines'
            });
var format_NewWells_5 = new ol.format.GeoJSON();
var features_NewWells_5 = format_NewWells_5.readFeatures(json_NewWells_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewWells_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewWells_5.addFeatures(features_NewWells_5);
var lyr_NewWells_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewWells_5, 
                style: style_NewWells_5,
                interactive: true,
                title: '<img src="styles/legend/NewWells_5.png" /> NewWells'
            });

lyr_WATER_0.setVisible(true);lyr_ExistingWaterLines_1.setVisible(true);lyr_ExistingWells_2.setVisible(true);lyr_Tanks_3.setVisible(true);lyr_WellHouseWaterlines_4.setVisible(true);lyr_NewWells_5.setVisible(true);
var layersList = [lyr_WATER_0,lyr_ExistingWaterLines_1,lyr_ExistingWells_2,lyr_Tanks_3,lyr_WellHouseWaterlines_4,lyr_NewWells_5];
lyr_ExistingWaterLines_1.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_ExistingWells_2.set('fieldAliases', {'Well': 'Well', });
lyr_Tanks_3.set('fieldAliases', {'Tank': 'Tank', });
lyr_WellHouseWaterlines_4.set('fieldAliases', {});
lyr_NewWells_5.set('fieldAliases', {'Well': 'Well', });
lyr_ExistingWaterLines_1.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_ExistingWells_2.set('fieldImages', {'Well': 'TextEdit', });
lyr_Tanks_3.set('fieldImages', {'Tank': 'TextEdit', });
lyr_WellHouseWaterlines_4.set('fieldImages', {});
lyr_NewWells_5.set('fieldImages', {'Well': 'TextEdit', });
lyr_ExistingWaterLines_1.set('fieldLabels', {'LAYER': 'inline label', });
lyr_ExistingWells_2.set('fieldLabels', {'Well': 'inline label', });
lyr_Tanks_3.set('fieldLabels', {'Tank': 'inline label', });
lyr_WellHouseWaterlines_4.set('fieldLabels', {});
lyr_NewWells_5.set('fieldLabels', {'Well': 'inline label', });
lyr_NewWells_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});