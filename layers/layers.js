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

        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>'})],
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });var format_CentrodeTransferenciaModalCETRAM_1 = new ol.format.GeoJSON();
var features_CentrodeTransferenciaModalCETRAM_1 = format_CentrodeTransferenciaModalCETRAM_1.readFeatures(json_CentrodeTransferenciaModalCETRAM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrodeTransferenciaModalCETRAM_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CentrodeTransferenciaModalCETRAM_1.addFeatures(features_CentrodeTransferenciaModalCETRAM_1);var lyr_CentrodeTransferenciaModalCETRAM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrodeTransferenciaModalCETRAM_1, 
                style: style_CentrodeTransferenciaModalCETRAM_1,
                title: '<img src="styles/legend/CentrodeTransferenciaModalCETRAM_1.png" /> Centro de Transferencia Modal (CETRAM)'
            });var format_SistemasdeTransporteEstructuradoEstaciones_2 = new ol.format.GeoJSON();
var features_SistemasdeTransporteEstructuradoEstaciones_2 = format_SistemasdeTransporteEstructuradoEstaciones_2.readFeatures(json_SistemasdeTransporteEstructuradoEstaciones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasdeTransporteEstructuradoEstaciones_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SistemasdeTransporteEstructuradoEstaciones_2.addFeatures(features_SistemasdeTransporteEstructuradoEstaciones_2);var lyr_SistemasdeTransporteEstructuradoEstaciones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SistemasdeTransporteEstructuradoEstaciones_2, 
                style: style_SistemasdeTransporteEstructuradoEstaciones_2,
    title: 'Sistemas de Transporte Estructurado (Estaciones)<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_0.png" /> Ferrocarril Suburbano<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_1.png" /> Tren Ligero<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_2.png" /> Cablebús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_3.png" /> Cablebús Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_4.png" /> Metro Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_5.png" /> Metro Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_6.png" /> Metro Línea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_7.png" /> Metro Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_8.png" /> Metro Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_9.png" /> Metro Lí­nea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_10.png" /> Metro Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_11.png" /> Metro Lí­nea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_12.png" /> Metro Lí­nea 9<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_13.png" /> Metro Lí­nea 12<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_14.png" /> Metro Lí­nea A<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_15.png" /> Metro Lí­nea B<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_16.png" /> Metrobús Lí­nea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_17.png" /> Metrobús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_18.png" /> Metrobús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_19.png" /> Metrobús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_20.png" /> Metrobús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_21.png" /> Metrobús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_22.png" /> Metrobús Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_23.png" /> Trolebús Lí­nea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_24.png" /> Trolebús Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_25.png" /> Trolebús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_26.png" /> Trolebús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_27.png" /> Trolebús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_28.png" /> Trolebús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_29.png" /> Trolebús Línea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_30.png" /> Trolebús Línea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoEstaciones_2_31.png" /> Trolebús Lí­nea 9<br />'
        });var format_SistemasdeTransporteEstructuradoLineas_3 = new ol.format.GeoJSON();
var features_SistemasdeTransporteEstructuradoLineas_3 = format_SistemasdeTransporteEstructuradoLineas_3.readFeatures(json_SistemasdeTransporteEstructuradoLineas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasdeTransporteEstructuradoLineas_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SistemasdeTransporteEstructuradoLineas_3.addFeatures(features_SistemasdeTransporteEstructuradoLineas_3);var lyr_SistemasdeTransporteEstructuradoLineas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SistemasdeTransporteEstructuradoLineas_3, 
                style: style_SistemasdeTransporteEstructuradoLineas_3,
    title: 'Sistemas de Transporte Estructurado (Lineas)<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_0.png" /> Ferrocarril Suburbano<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_1.png" /> Tren Ligero<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_2.png" /> Cablebús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_3.png" /> Cablebús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_4.png" /> Metro Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_5.png" /> Metro Lí­nea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_6.png" /> Metro Línea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_7.png" /> Metro Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_8.png" /> Metro Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_9.png" /> Metro Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_10.png" /> Metro Lí­nea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_11.png" /> Metro Línea 8<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_12.png" /> Metro Línea 9<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_13.png" /> Metro Línea 12<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_14.png" /> Metro Línea A<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_15.png" /> Metro Línea B<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_16.png" /> Metrobús Línea 1<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_17.png" /> Metrobús Línea 2<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_18.png" /> Metrobús Lí­nea 3<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_19.png" /> Metrobús Línea 4<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_20.png" /> Metrobús Línea 5<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_21.png" /> Metrobús Línea 6<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_22.png" /> Metrobús Línea 7<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_23.png" /> Trolebús Línea 1 "Corredor Cero Emisiones Eje Central"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_24.png" /> Trolebús Línea 2 "Corredor Cero Emisiones Eje 2 - 2A Sur"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_25.png" /> Trolebús Lí­nea 3 "Corredor Cero Emisiones Eje 7 - 7A Sur"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_26.png" /> Trolebús Línea 4 "Metro Blv. Puerto Aéreo - Metro El Rosario"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_27.png" /> Trolebús Lí­nea 5 "San Felipe de Jesús - Metro Hidalgo"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_28.png" /> Trolebús Lí­nea 6 "Metro El Rosario - Metro Chapultepec"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_29.png" /> Trolebús Línea 7 "Lomas Estrella - Ciudad Universitaria"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_30.png" /> Trolebús Línea 8 "Circuito Politécnico"<br />\
    <img src="styles/legend/SistemasdeTransporteEstructuradoLineas_3_31.png" /> Trolebús Línea 9 "Iztacalco - Villa de Cortés"<br />'
        });var format_PolgonosECOPARQ_4 = new ol.format.GeoJSON();
var features_PolgonosECOPARQ_4 = format_PolgonosECOPARQ_4.readFeatures(json_PolgonosECOPARQ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolgonosECOPARQ_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PolgonosECOPARQ_4.addFeatures(features_PolgonosECOPARQ_4);var lyr_PolgonosECOPARQ_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolgonosECOPARQ_4, 
                style: style_PolgonosECOPARQ_4,
                title: '<img src="styles/legend/PolgonosECOPARQ_4.png" /> Polígonos ECOPARQ'
            });var format_Infraestructuraciclista_5 = new ol.format.GeoJSON();
var features_Infraestructuraciclista_5 = format_Infraestructuraciclista_5.readFeatures(json_Infraestructuraciclista_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructuraciclista_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Infraestructuraciclista_5.addFeatures(features_Infraestructuraciclista_5);var lyr_Infraestructuraciclista_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Infraestructuraciclista_5, 
                style: style_Infraestructuraciclista_5,
                title: '<img src="styles/legend/Infraestructuraciclista_5.png" /> Infraestructura ciclista'
            });var format_Equipamiento_6 = new ol.format.GeoJSON();
var features_Equipamiento_6 = format_Equipamiento_6.readFeatures(json_Equipamiento_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamiento_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Equipamiento_6.addFeatures(features_Equipamiento_6);var lyr_Equipamiento_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Equipamiento_6, 
                style: style_Equipamiento_6,
                title: '<img src="styles/legend/Equipamiento_6.png" /> Equipamiento'
            });var format_NormadeBiciestacionamiento_7 = new ol.format.GeoJSON();
var features_NormadeBiciestacionamiento_7 = format_NormadeBiciestacionamiento_7.readFeatures(json_NormadeBiciestacionamiento_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormadeBiciestacionamiento_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NormadeBiciestacionamiento_7.addFeatures(features_NormadeBiciestacionamiento_7);var lyr_NormadeBiciestacionamiento_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormadeBiciestacionamiento_7, 
                style: style_NormadeBiciestacionamiento_7,
    title: 'Norma de Bici-estacionamiento<br />\
    <img src="styles/legend/NormadeBiciestacionamiento_7_0.png" /> A<br />\
    <img src="styles/legend/NormadeBiciestacionamiento_7_1.png" /> B<br />'
        });var format_NormadeEstacionamiento_8 = new ol.format.GeoJSON();
var features_NormadeEstacionamiento_8 = format_NormadeEstacionamiento_8.readFeatures(json_NormadeEstacionamiento_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormadeEstacionamiento_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NormadeEstacionamiento_8.addFeatures(features_NormadeEstacionamiento_8);var lyr_NormadeEstacionamiento_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormadeEstacionamiento_8, 
                style: style_NormadeEstacionamiento_8,
    title: 'Norma de Estacionamiento<br />\
    <img src="styles/legend/NormadeEstacionamiento_8_0.png" /> ZONA 1<br />\
    <img src="styles/legend/NormadeEstacionamiento_8_1.png" /> ZONA 2<br />'
        });var format_NormadeVivienda_9 = new ol.format.GeoJSON();
var features_NormadeVivienda_9 = format_NormadeVivienda_9.readFeatures(json_NormadeVivienda_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NormadeVivienda_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NormadeVivienda_9.addFeatures(features_NormadeVivienda_9);var lyr_NormadeVivienda_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormadeVivienda_9, 
                style: style_NormadeVivienda_9,
    title: 'Norma de Vivienda<br />\
    <img src="styles/legend/NormadeVivienda_9_0.png" /> Corredores<br />\
    <img src="styles/legend/NormadeVivienda_9_1.png" /> Zonas<br />'
        });var format_ProgramasParcialesdeDesarrolloUrbano_10 = new ol.format.GeoJSON();
var features_ProgramasParcialesdeDesarrolloUrbano_10 = format_ProgramasParcialesdeDesarrolloUrbano_10.readFeatures(json_ProgramasParcialesdeDesarrolloUrbano_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProgramasParcialesdeDesarrolloUrbano_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ProgramasParcialesdeDesarrolloUrbano_10.addFeatures(features_ProgramasParcialesdeDesarrolloUrbano_10);var lyr_ProgramasParcialesdeDesarrolloUrbano_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProgramasParcialesdeDesarrolloUrbano_10, 
                style: style_ProgramasParcialesdeDesarrolloUrbano_10,
                title: '<img src="styles/legend/ProgramasParcialesdeDesarrolloUrbano_10.png" /> Programas Parciales de Desarrollo Urbano'
            });var format_readeConservacinPatrimonial_11 = new ol.format.GeoJSON();
var features_readeConservacinPatrimonial_11 = format_readeConservacinPatrimonial_11.readFeatures(json_readeConservacinPatrimonial_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeConservacinPatrimonial_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_readeConservacinPatrimonial_11.addFeatures(features_readeConservacinPatrimonial_11);var lyr_readeConservacinPatrimonial_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeConservacinPatrimonial_11, 
                style: style_readeConservacinPatrimonial_11,
                title: '<img src="styles/legend/readeConservacinPatrimonial_11.png" /> Área de Conservación Patrimonial'
            });var format_AutoridaddelaZonaPatrimonio_12 = new ol.format.GeoJSON();
var features_AutoridaddelaZonaPatrimonio_12 = format_AutoridaddelaZonaPatrimonio_12.readFeatures(json_AutoridaddelaZonaPatrimonio_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutoridaddelaZonaPatrimonio_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AutoridaddelaZonaPatrimonio_12.addFeatures(features_AutoridaddelaZonaPatrimonio_12);var lyr_AutoridaddelaZonaPatrimonio_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutoridaddelaZonaPatrimonio_12, 
                style: style_AutoridaddelaZonaPatrimonio_12,
                title: '<img src="styles/legend/AutoridaddelaZonaPatrimonio_12.png" /> Autoridad de la Zona Patrimonio'
            });var format_readeValorAmbiental_13 = new ol.format.GeoJSON();
var features_readeValorAmbiental_13 = format_readeValorAmbiental_13.readFeatures(json_readeValorAmbiental_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeValorAmbiental_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_readeValorAmbiental_13.addFeatures(features_readeValorAmbiental_13);var lyr_readeValorAmbiental_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeValorAmbiental_13, 
                style: style_readeValorAmbiental_13,
                title: '<img src="styles/legend/readeValorAmbiental_13.png" /> Área de Valor Ambiental'
            });var format_reaNaturalProtegida_14 = new ol.format.GeoJSON();
var features_reaNaturalProtegida_14 = format_reaNaturalProtegida_14.readFeatures(json_reaNaturalProtegida_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaNaturalProtegida_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reaNaturalProtegida_14.addFeatures(features_reaNaturalProtegida_14);var lyr_reaNaturalProtegida_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaNaturalProtegida_14, 
                style: style_reaNaturalProtegida_14,
                title: '<img src="styles/legend/reaNaturalProtegida_14.png" /> Área Natural Protegida'
            });var format_SuelodeConservacin_15 = new ol.format.GeoJSON();
var features_SuelodeConservacin_15 = format_SuelodeConservacin_15.readFeatures(json_SuelodeConservacin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuelodeConservacin_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SuelodeConservacin_15.addFeatures(features_SuelodeConservacin_15);var lyr_SuelodeConservacin_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuelodeConservacin_15, 
                style: style_SuelodeConservacin_15,
                title: '<img src="styles/legend/SuelodeConservacin_15.png" /> Suelo de Conservación'
            });var format_LneadeConservacinEcolgica_16 = new ol.format.GeoJSON();
var features_LneadeConservacinEcolgica_16 = format_LneadeConservacinEcolgica_16.readFeatures(json_LneadeConservacinEcolgica_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LneadeConservacinEcolgica_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LneadeConservacinEcolgica_16.addFeatures(features_LneadeConservacinEcolgica_16);var lyr_LneadeConservacinEcolgica_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LneadeConservacinEcolgica_16, 
                style: style_LneadeConservacinEcolgica_16,
                title: '<img src="styles/legend/LneadeConservacinEcolgica_16.png" /> Línea de Conservación Ecológica'
            });
var group_CompetitividadUrbana = new ol.layer.Group({
                                layers: [lyr_Equipamiento_6,],
                                title: "Competitividad Urbana"});
var group_PatrimonioCulturalUrbano = new ol.layer.Group({
                                layers: [lyr_readeConservacinPatrimonial_11,],
                                title: "Patrimonio Cultural Urbano"});
var group_Movilidad = new ol.layer.Group({
                                layers: [lyr_Positron_0,lyr_CentrodeTransferenciaModalCETRAM_1,lyr_SistemasdeTransporteEstructuradoEstaciones_2,lyr_SistemasdeTransporteEstructuradoLineas_3,lyr_PolgonosECOPARQ_4,lyr_Infraestructuraciclista_5,],
                                title: "Movilidad"});
var group_Normatividad = new ol.layer.Group({
                                layers: [lyr_NormadeBiciestacionamiento_7,lyr_NormadeEstacionamiento_8,lyr_NormadeVivienda_9,lyr_ProgramasParcialesdeDesarrolloUrbano_10,],
                                title: "Normatividad"});
var group_SustentabilidadUrbanoAmbiental = new ol.layer.Group({
                                layers: [lyr_AutoridaddelaZonaPatrimonio_12,lyr_readeValorAmbiental_13,lyr_reaNaturalProtegida_14,lyr_SuelodeConservacin_15,lyr_LneadeConservacinEcolgica_16,],
                                title: "Sustentabilidad Urbano Ambiental"});

lyr_Positron_0.setVisible(true);lyr_CentrodeTransferenciaModalCETRAM_1.setVisible(true);lyr_SistemasdeTransporteEstructuradoEstaciones_2.setVisible(true);lyr_SistemasdeTransporteEstructuradoLineas_3.setVisible(true);lyr_PolgonosECOPARQ_4.setVisible(true);lyr_Infraestructuraciclista_5.setVisible(true);lyr_Equipamiento_6.setVisible(true);lyr_NormadeBiciestacionamiento_7.setVisible(true);lyr_NormadeEstacionamiento_8.setVisible(true);lyr_NormadeVivienda_9.setVisible(true);lyr_ProgramasParcialesdeDesarrolloUrbano_10.setVisible(true);lyr_readeConservacinPatrimonial_11.setVisible(true);lyr_AutoridaddelaZonaPatrimonio_12.setVisible(true);lyr_readeValorAmbiental_13.setVisible(true);lyr_reaNaturalProtegida_14.setVisible(true);lyr_SuelodeConservacin_15.setVisible(true);lyr_LneadeConservacinEcolgica_16.setVisible(true);
var layersList = [baseLayer,group_Movilidad,group_CompetitividadUrbana,group_Normatividad,group_PatrimonioCulturalUrbano,group_SustentabilidadUrbanoAmbiental];
lyr_CentrodeTransferenciaModalCETRAM_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TRANFER': 'TRANFER', 'HORARIO': 'HORARIO', 'ALCALDIA': 'ALCALDIA', 'UBICACION': 'UBICACION', });
lyr_SistemasdeTransporteEstructuradoEstaciones_2.set('fieldAliases', {'corrslinea': 'corrslinea', 'ruta': 'ruta', 'agencia': 'agencia', 'linea': 'linea', 'estacion': 'estacion', 'tipostcion': 'tipostcion', 'caract': 'caract', 'pertenecie': 'pertenecie', 'intrmodal': 'intrmodal', 'fuente': 'fuente', });
lyr_SistemasdeTransporteEstructuradoLineas_3.set('fieldAliases', {'termial': 'termial', 'ruta': 'ruta', 'agencia': 'agencia', 'linea': 'linea', 'estaciones': 'estaciones', 'longitud': 'longitud', 'correspond': 'correspond', 'estdepaso': 'estdepaso', 'estsubte': 'estsubte', 'estsuper': 'estsuper', 'etselevads': 'etselevads', 'lineascorr': 'lineascorr', 'cobertura': 'cobertura', 'fuente': 'fuente', });
lyr_PolgonosECOPARQ_4.set('fieldAliases', {'cajonsvehi': 'cajonsvehi', 'nombre': 'nombre', 'numparq': 'numparq', 'cajonsmoto': 'cajonsmoto', 'cajonsdisc': 'cajonsdisc', 'staecobici': 'staecobici', 'fuente': 'fuente', });
lyr_Infraestructuraciclista_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO_IC': 'TIPO_IC', 'VIALIDAD': 'VIALIDAD', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO': 'ESTADO', 'SENTIDO': 'SENTIDO', 'INSTANCIA': 'INSTANCIA', 'AÑO': 'AÑO', 'LONG_KM': 'LONG_KM', });
lyr_Equipamiento_6.set('fieldAliases', {'nombre': 'nombre', 'categoria': 'categoria', 'alcaldia': 'alcaldia', });
lyr_NormadeBiciestacionamiento_7.set('fieldAliases', {'area': 'area', 'zonas': 'zonas', });
lyr_NormadeEstacionamiento_8.set('fieldAliases', {'z_vial_col': 'z_vial_col', 'shape_area': 'shape_area', });
lyr_NormadeVivienda_9.set('fieldAliases', {'tipo': 'tipo', });
lyr_ProgramasParcialesdeDesarrolloUrbano_10.set('fieldAliases', {'ppdu': 'ppdu', 'decreto': 'decreto', 'delegacia_': 'delegacia_', 'link_seduv': 'link_seduv', });
lyr_readeConservacinPatrimonial_11.set('fieldAliases', {'acp': 'acp', 'delgacia_n': 'delgacia_n', 'area': 'area', 'fuente': 'fuente', });
lyr_AutoridaddelaZonaPatrimonio_12.set('fieldAliases', {'nombre': 'nombre', 'decretro': 'decretro', });
lyr_readeValorAmbiental_13.set('fieldAliases', {'nombre': 'nombre', 'alcaldia': 'alcaldia', 'categoria': 'categoria', 'fecha_decr': 'fecha_decr', 'fecha_modi': 'fecha_modi', 'progmanejo': 'progmanejo', 'fuente': 'fuente', 'sitio_web': 'sitio_web', });
lyr_reaNaturalProtegida_14.set('fieldAliases', {'categor': 'categor', 'suelo': 'suelo', 'nombre': 'nombre', 'fuente': 'fuente', 'fecha_dc': 'fecha_dc', 'superficie': 'superficie', 'datos_cdmx': 'datos_cdmx', });
lyr_SuelodeConservacin_15.set('fieldAliases', {'fuente': 'fuente', 'superficie': 'superficie', 'datos_cdmx': 'datos_cdmx', });
lyr_LneadeConservacinEcolgica_16.set('fieldAliases', {'lce': 'lce', 'fuente': 'fuente', });
lyr_CentrodeTransferenciaModalCETRAM_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'TRANFER': 'TextEdit', 'HORARIO': 'TextEdit', 'ALCALDIA': 'TextEdit', 'UBICACION': 'TextEdit', });
lyr_SistemasdeTransporteEstructuradoEstaciones_2.set('fieldImages', {'corrslinea': 'TextEdit', 'ruta': 'TextEdit', 'agencia': 'TextEdit', 'linea': 'TextEdit', 'estacion': 'TextEdit', 'tipostcion': 'TextEdit', 'caract': 'TextEdit', 'pertenecie': 'TextEdit', 'intrmodal': 'TextEdit', 'fuente': 'TextEdit', });
lyr_SistemasdeTransporteEstructuradoLineas_3.set('fieldImages', {'termial': 'TextEdit', 'ruta': 'TextEdit', 'agencia': 'TextEdit', 'linea': 'TextEdit', 'estaciones': 'TextEdit', 'longitud': 'TextEdit', 'correspond': 'TextEdit', 'estdepaso': 'TextEdit', 'estsubte': 'TextEdit', 'estsuper': 'TextEdit', 'etselevads': 'TextEdit', 'lineascorr': 'TextEdit', 'cobertura': 'TextEdit', 'fuente': 'TextEdit', });
lyr_PolgonosECOPARQ_4.set('fieldImages', {'cajonsvehi': 'TextEdit', 'nombre': 'TextEdit', 'numparq': 'TextEdit', 'cajonsmoto': 'TextEdit', 'cajonsdisc': 'TextEdit', 'staecobici': 'TextEdit', 'fuente': 'TextEdit', });
lyr_Infraestructuraciclista_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO_IC': 'TextEdit', 'VIALIDAD': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'ESTADO': 'TextEdit', 'SENTIDO': 'TextEdit', 'INSTANCIA': 'TextEdit', 'AÑO': 'TextEdit', 'LONG_KM': 'TextEdit', });
lyr_Equipamiento_6.set('fieldImages', {'nombre': 'TextEdit', 'categoria': 'TextEdit', 'alcaldia': 'TextEdit', });
lyr_NormadeBiciestacionamiento_7.set('fieldImages', {'area': 'TextEdit', 'zonas': 'TextEdit', });
lyr_NormadeEstacionamiento_8.set('fieldImages', {'z_vial_col': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_NormadeVivienda_9.set('fieldImages', {'tipo': 'TextEdit', });
lyr_ProgramasParcialesdeDesarrolloUrbano_10.set('fieldImages', {'ppdu': 'TextEdit', 'decreto': 'TextEdit', 'delegacia_': 'TextEdit', 'link_seduv': 'TextEdit', });
lyr_readeConservacinPatrimonial_11.set('fieldImages', {'acp': 'TextEdit', 'delgacia_n': 'TextEdit', 'area': 'TextEdit', 'fuente': 'TextEdit', });
lyr_AutoridaddelaZonaPatrimonio_12.set('fieldImages', {'nombre': 'TextEdit', 'decretro': 'TextEdit', });
lyr_readeValorAmbiental_13.set('fieldImages', {'nombre': 'TextEdit', 'alcaldia': 'TextEdit', 'categoria': 'TextEdit', 'fecha_decr': 'TextEdit', 'fecha_modi': 'TextEdit', 'progmanejo': 'TextEdit', 'fuente': 'TextEdit', 'sitio_web': 'TextEdit', });
lyr_reaNaturalProtegida_14.set('fieldImages', {'categor': 'TextEdit', 'suelo': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'fecha_dc': 'TextEdit', 'superficie': 'TextEdit', 'datos_cdmx': 'TextEdit', });
lyr_SuelodeConservacin_15.set('fieldImages', {'fuente': 'TextEdit', 'superficie': 'TextEdit', 'datos_cdmx': 'TextEdit', });
lyr_LneadeConservacinEcolgica_16.set('fieldImages', {'lce': 'TextEdit', 'fuente': 'TextEdit', });
lyr_CentrodeTransferenciaModalCETRAM_1.set('fieldLabels', {});
lyr_SistemasdeTransporteEstructuradoEstaciones_2.set('fieldLabels', {});
lyr_SistemasdeTransporteEstructuradoLineas_3.set('fieldLabels', {});
lyr_PolgonosECOPARQ_4.set('fieldLabels', {});
lyr_Infraestructuraciclista_5.set('fieldLabels', {});
lyr_Equipamiento_6.set('fieldLabels', {});
lyr_NormadeBiciestacionamiento_7.set('fieldLabels', {});
lyr_NormadeEstacionamiento_8.set('fieldLabels', {});
lyr_NormadeVivienda_9.set('fieldLabels', {});
lyr_ProgramasParcialesdeDesarrolloUrbano_10.set('fieldLabels', {});
lyr_readeConservacinPatrimonial_11.set('fieldLabels', {});
lyr_AutoridaddelaZonaPatrimonio_12.set('fieldLabels', {});
lyr_readeValorAmbiental_13.set('fieldLabels', {});
lyr_reaNaturalProtegida_14.set('fieldLabels', {});
lyr_SuelodeConservacin_15.set('fieldLabels', {});
lyr_LneadeConservacinEcolgica_16.set('fieldLabels', {});
lyr_LneadeConservacinEcolgica_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});