var size = 0;
var placement = 'point';

var style_AmCoCafe_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("adtc_amco_current_to_previous_comparison_numeric");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.5999999999999996;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Cafe Numbe") !== null) {
        labelText = String(feature.get("Cafe Numbe"));
    }
    if (value >= -0.420000 && value <= -0.050000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.050000 && value <= 0.050000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,255,192,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.050000 && value <= 0.550000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(26,150,65,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
