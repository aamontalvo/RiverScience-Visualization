var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Esf_Nat_0 = new ol.format.GeoJSON();
var features_Esf_Nat_0 = format_Esf_Nat_0.readFeatures(json_Esf_Nat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Esf_Nat_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Esf_Nat_0.addFeatures(features_Esf_Nat_0);var lyr_Esf_Nat_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Esf_Nat_0, 
                style: style_Esf_Nat_0,
    title: 'Esf_Nat<br />\
    <img src="styles/legend/Esf_Nat_0_0.png" />  0.0 - 1.5 <br />\
    <img src="styles/legend/Esf_Nat_0_1.png" />  1.5 - 3.4 <br />\
    <img src="styles/legend/Esf_Nat_0_2.png" />  3.4 - 4.8 <br />\
    <img src="styles/legend/Esf_Nat_0_3.png" />  4.8 - 7.1 <br />\
    <img src="styles/legend/Esf_Nat_0_4.png" />  7.1 - 18.0 <br />'
        });var format_Esf_Esp_1 = new ol.format.GeoJSON();
var features_Esf_Esp_1 = format_Esf_Esp_1.readFeatures(json_Esf_Esp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Esf_Esp_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Esf_Esp_1.addFeatures(features_Esf_Esp_1);var lyr_Esf_Esp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Esf_Esp_1, 
                style: style_Esf_Esp_1,
    title: 'Esf_Esp<br />\
    <img src="styles/legend/Esf_Esp_1_0.png" />  0.0 - 1.5 <br />\
    <img src="styles/legend/Esf_Esp_1_1.png" />  1.5 - 3.4 <br />\
    <img src="styles/legend/Esf_Esp_1_2.png" />  3.4 - 4.8 <br />\
    <img src="styles/legend/Esf_Esp_1_3.png" />  4.8 - 7.1 <br />\
    <img src="styles/legend/Esf_Esp_1_4.png" />  7.1 - 18.0 <br />'
        });var format_Vel_Esp_2 = new ol.format.GeoJSON();
var features_Vel_Esp_2 = format_Vel_Esp_2.readFeatures(json_Vel_Esp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vel_Esp_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vel_Esp_2.addFeatures(features_Vel_Esp_2);var lyr_Vel_Esp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vel_Esp_2, 
                style: style_Vel_Esp_2,
    title: 'Vel_Esp<br />\
    <img src="styles/legend/Vel_Esp_2_0.png" />  0.00 - 0.58 <br />\
    <img src="styles/legend/Vel_Esp_2_1.png" />  0.58 - 1.24 <br />\
    <img src="styles/legend/Vel_Esp_2_2.png" />  1.24 - 1.51 <br />\
    <img src="styles/legend/Vel_Esp_2_3.png" />  1.51 - 1.95 <br />\
    <img src="styles/legend/Vel_Esp_2_4.png" />  1.95 - 3.23 <br />'
        });var format_Vel_Natural_3 = new ol.format.GeoJSON();
var features_Vel_Natural_3 = format_Vel_Natural_3.readFeatures(json_Vel_Natural_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vel_Natural_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vel_Natural_3.addFeatures(features_Vel_Natural_3);var lyr_Vel_Natural_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vel_Natural_3, 
                style: style_Vel_Natural_3,
    title: 'Vel_Natural<br />\
    <img src="styles/legend/Vel_Natural_3_0.png" />  0.00 - 0.58 <br />\
    <img src="styles/legend/Vel_Natural_3_1.png" />  0.58 - 1.24 <br />\
    <img src="styles/legend/Vel_Natural_3_2.png" />  1.24 - 1.51 <br />\
    <img src="styles/legend/Vel_Natural_3_3.png" />  1.51 - 1.95 <br />\
    <img src="styles/legend/Vel_Natural_3_4.png" />  1.95 - 3.23 <br />'
        });var format_EspolonesAguasAbajo_4 = new ol.format.GeoJSON();
var features_EspolonesAguasAbajo_4 = format_EspolonesAguasAbajo_4.readFeatures(json_EspolonesAguasAbajo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspolonesAguasAbajo_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EspolonesAguasAbajo_4.addFeatures(features_EspolonesAguasAbajo_4);var lyr_EspolonesAguasAbajo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EspolonesAguasAbajo_4, 
                style: style_EspolonesAguasAbajo_4,
                title: '<img src="styles/legend/EspolonesAguasAbajo_4.png" /> Espolones Aguas Abajo'
            });var lyr_TopoBatimetria_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "TopoBatimetria",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TopoBatimetria_5.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8322596.613260, 1025126.965591, -8318109.759487, 1036325.322474]
                            })
                        });

lyr_Esf_Nat_0.setVisible(false);lyr_Esf_Esp_1.setVisible(false);lyr_Vel_Esp_2.setVisible(false);lyr_Vel_Natural_3.setVisible(false);lyr_EspolonesAguasAbajo_4.setVisible(false);lyr_TopoBatimetria_5.setVisible(true);
var layersList = [baseLayer,lyr_Esf_Nat_0,lyr_Esf_Esp_1,lyr_Vel_Esp_2,lyr_Vel_Natural_3,lyr_EspolonesAguasAbajo_4,lyr_TopoBatimetria_5];
lyr_Esf_Nat_0.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_Esf_Esp_1.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_Vel_Esp_2.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_Vel_Natural_3.set('fieldAliases', {'ID': 'ID', 'magnitude': 'magnitude', });
lyr_EspolonesAguasAbajo_4.set('fieldAliases', {'ID': 'ID', });
lyr_Esf_Nat_0.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_Esf_Esp_1.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_Vel_Esp_2.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_Vel_Natural_3.set('fieldImages', {'ID': 'Hidden', 'magnitude': 'TextEdit', });
lyr_EspolonesAguasAbajo_4.set('fieldImages', {'ID': 'TextEdit', });
lyr_Esf_Nat_0.set('fieldLabels', {'magnitude': 'no label', });
lyr_Esf_Esp_1.set('fieldLabels', {'magnitude': 'no label', });
lyr_Vel_Esp_2.set('fieldLabels', {'magnitude': 'no label', });
lyr_Vel_Natural_3.set('fieldLabels', {'magnitude': 'no label', });
lyr_EspolonesAguasAbajo_4.set('fieldLabels', {'ID': 'no label', });
lyr_EspolonesAguasAbajo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});