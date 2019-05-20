var size = 0;
var placement = 'point';

var style_Vel_Natural_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("magnitude");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    if (value > 0.001773 && value <= 0.584384) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(68,1,84,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 0.584384 && value <= 1.237062) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(58,82,139,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 1.237062 && value <= 1.512886) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,144,141,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 1.512886 && value <= 1.953481) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,201,98,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    } else if (value > 1.953481 && value <= 3.234546) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,231,37,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })]
                    };

    return style;
};
