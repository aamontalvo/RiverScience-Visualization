var size = 0;
var placement = 'point';

var style_Esf_Esp_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("magnitude");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    if (value > 0.000000 && value <= 1.546517) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(68,1,84,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 1.546517 && value <= 3.373638) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(58,82,139,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 3.373638 && value <= 4.755161) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,144,141,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 4.755161 && value <= 7.106245) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,201,98,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 7.106245 && value <= 18.019006) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,231,37,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
