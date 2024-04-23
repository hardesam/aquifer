ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-14648019.075939, -12065894.773591, 17635339.448685, 20181190.314489]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_aquifer_3857_1 = new ol.format.GeoJSON();
var features_aquifer_3857_1 = format_aquifer_3857_1.readFeatures(json_aquifer_3857_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aquifer_3857_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aquifer_3857_1.addFeatures(features_aquifer_3857_1);
var lyr_aquifer_3857_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aquifer_3857_1, 
                style: style_aquifer_3857_1,
                popuplayertitle: "aquifer_3857",
                interactive: true,
                title: '<img src="styles/legend/aquifer_3857_1.png" /> aquifer_3857'
            });

lyr_OSMStandard_0.setVisible(true);lyr_aquifer_3857_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_aquifer_3857_1];
lyr_aquifer_3857_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WROB0_CONT': 'WROB0_CONT', 'HYGEO': 'HYGEO', 'Aquifer_sy': 'Aquifer_sy', 'Storage_Tr': 'Storage_Tr', 'Stress_Cla': 'Stress_Cla', 'Pop': 'Pop', });
lyr_aquifer_3857_1.set('fieldImages', {'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'WROB0_CONT': '', 'HYGEO': '', 'Aquifer_sy': '', 'Storage_Tr': '', 'Stress_Cla': '', 'Pop': '', });
lyr_aquifer_3857_1.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'WROB0_CONT': 'no label', 'HYGEO': 'no label', 'Aquifer_sy': 'no label', 'Storage_Tr': 'no label', 'Stress_Cla': 'no label', 'Pop': 'no label', });
lyr_aquifer_3857_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});