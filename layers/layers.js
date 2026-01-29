var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Starbucks_1 = new ol.format.GeoJSON();
var features_Starbucks_1 = format_Starbucks_1.readFeatures(json_Starbucks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Starbucks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Starbucks_1.addFeatures(features_Starbucks_1);
var lyr_Starbucks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Starbucks_1, 
                style: style_Starbucks_1,
                popuplayertitle: 'Starbucks',
                interactive: true,
    title: 'Starbucks<br />\
    <img src="styles/legend/Starbucks_1_0.png" /> false<br />\
    <img src="styles/legend/Starbucks_1_1.png" /> true<br />\
    <img src="styles/legend/Starbucks_1_2.png" /> <br />' });
var format_CoffeeTeaorBoba_2 = new ol.format.GeoJSON();
var features_CoffeeTeaorBoba_2 = format_CoffeeTeaorBoba_2.readFeatures(json_CoffeeTeaorBoba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoffeeTeaorBoba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoffeeTeaorBoba_2.addFeatures(features_CoffeeTeaorBoba_2);
var lyr_CoffeeTeaorBoba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoffeeTeaorBoba_2, 
                style: style_CoffeeTeaorBoba_2,
                popuplayertitle: 'Coffee, Tea or Boba',
                interactive: true,
    title: 'Coffee, Tea or Boba<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_0.png" /> 7 Leaves Café<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_1.png" /> 85 Degrees C Bakery Cafe<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_2.png" /> Alfred<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_3.png" /> Bambu Desserts & Drinks<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_4.png" /> Better Buzz Coffee<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_5.png" /> Boba Guys<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_6.png" /> Chatime<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_7.png" /> Dunkin\' Donuts<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_8.png" /> Dutch Bros Coffee<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_9.png" /> Feng Cha<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_10.png" /> Happy Lemon<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_11.png" /> It’s Boba Time<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_12.png" /> Krak Boba<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_13.png" /> Kung Fu Tea<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_14.png" /> La La Land Kind Cafe<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_15.png" /> Peet\'s Coffee and Tea<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_16.png" /> Philz Coffee<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_17.png" /> Sharetea<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_18.png" /> Tapioca Express<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_19.png" /> Tiger Sugar<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_20.png" /> Xing Fu Tang<br />\
    <img src="styles/legend/CoffeeTeaorBoba_2_21.png" /> <br />' });
var format_AmCoCafe_3 = new ol.format.GeoJSON();
var features_AmCoCafe_3 = format_AmCoCafe_3.readFeatures(json_AmCoCafe_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmCoCafe_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmCoCafe_3.addFeatures(features_AmCoCafe_3);
var lyr_AmCoCafe_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmCoCafe_3, 
                style: style_AmCoCafe_3,
                popuplayertitle: 'AmCo Cafe',
                interactive: true,
    title: 'AmCo Cafe<br />\
    <img src="styles/legend/AmCoCafe_3_0.png" /> Decline- Fell More Than 5%<br />\
    <img src="styles/legend/AmCoCafe_3_1.png" /> Stable- Hovered Between 5% Drop or 5% Gain<br />\
    <img src="styles/legend/AmCoCafe_3_2.png" /> Growth- Rose 5% Or More<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Starbucks_1.setVisible(true);lyr_CoffeeTeaorBoba_2.setVisible(true);lyr_AmCoCafe_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Starbucks_1,lyr_CoffeeTeaorBoba_2,lyr_AmCoCafe_3];
lyr_Starbucks_1.set('fieldAliases', {'Label': 'Label', 'Chain Name': 'Chain Name', 'Storefront': 'Storefront', 'Address': 'Address', 'Category': 'Category', 'City': 'City', 'Country': 'Country', 'Last Updat': 'Last Updat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'List ID': 'List ID', 'List Name': 'List Name', 'State': 'State', 'Store Numb': 'Store Numb', 'ULI': 'ULI', 'Zip code': 'Zip code', 'Parent Lis': 'Parent Lis', 'Distributo': 'Distributo', 'Distribu_1': 'Distribu_1', 'Store Type': 'Store Type', 'Primary Ca': 'Primary Ca', 'Center ID': 'Center ID', 'Category (': 'Category (', 'First Appe': 'First Appe', 'Last Seen': 'Last Seen', 'In Airport': 'In Airport', 'Has Drive': 'Has Drive', });
lyr_CoffeeTeaorBoba_2.set('fieldAliases', {'Label': 'Label', 'Chain ID': 'Chain ID', 'Chain Name': 'Chain Name', 'Storefront': 'Storefront', 'Address': 'Address', 'Category': 'Category', 'City': 'City', 'Last Updat': 'Last Updat', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'List ID': 'List ID', 'List Name': 'List Name', 'State': 'State', 'Zip code': 'Zip code', 'Distributo': 'Distributo', 'Store Type': 'Store Type', 'Store Hour': 'Store Hour', 'Parent Cha': 'Parent Cha', 'Primary Ca': 'Primary Ca', 'Category (': 'Category (', 'First Appe': 'First Appe', 'Last Seen': 'Last Seen', 'In Airport': 'In Airport', 'Has Drive': 'Has Drive', });
lyr_AmCoCafe_3.set('fieldAliases', {'Cafe Numbe': 'Cafe Numbe', 'Cafe Name': 'Cafe Name', 'Address': 'Address', 'Address 2': 'Address 2', 'City': 'City', 'State': 'State', 'Zip Code': 'Zip Code', 'County': 'County', 'field_9': 'field_9', 'Country': 'Country', 'Status': 'Status', 'Site Type': 'Site Type', 'Drive Thru': 'Drive Thru', 'Building S': 'Building S', 'Expected o': 'Expected o', 'Close Date': 'Close Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Operator': 'Operator', 'Operations': 'Operations', 'Region': 'Region', 'Market Gro': 'Market Gro', 'Franchise': 'Franchise', 'Franchis_1': 'Franchis_1', 'Channel of': 'Channel of', 'CBSA ID': 'CBSA ID', 'DMA ID': 'DMA ID', 'adtc_amco_dist': 'adtc_amco_dist', 'adtc_amco_store_name': 'adtc_amco_store_name', 'adtc_amco_area': 'adtc_amco_area', 'adtc_amco_market': 'adtc_amco_market', 'adtc_amco_current_to_previous_comparison_numeric': 'adtc_amco_current_to_previous_comparison_numeric', 'adtc_amco_current_to_previous_comparison': 'adtc_amco_current_to_previous_comparison', 'adtc_amco_adtc_p1': 'adtc_amco_adtc_p1', });
lyr_Starbucks_1.set('fieldImages', {'Label': 'TextEdit', 'Chain Name': 'TextEdit', 'Storefront': 'TextEdit', 'Address': 'TextEdit', 'Category': 'TextEdit', 'City': 'TextEdit', 'Country': 'TextEdit', 'Last Updat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'List ID': 'TextEdit', 'List Name': 'TextEdit', 'State': 'TextEdit', 'Store Numb': 'TextEdit', 'ULI': 'TextEdit', 'Zip code': 'TextEdit', 'Parent Lis': 'TextEdit', 'Distributo': 'TextEdit', 'Distribu_1': 'TextEdit', 'Store Type': 'TextEdit', 'Primary Ca': 'TextEdit', 'Center ID': 'TextEdit', 'Category (': 'TextEdit', 'First Appe': 'TextEdit', 'Last Seen': 'TextEdit', 'In Airport': 'CheckBox', 'Has Drive': 'CheckBox', });
lyr_CoffeeTeaorBoba_2.set('fieldImages', {'Label': 'TextEdit', 'Chain ID': 'TextEdit', 'Chain Name': 'TextEdit', 'Storefront': 'TextEdit', 'Address': 'TextEdit', 'Category': 'TextEdit', 'City': 'TextEdit', 'Last Updat': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'List ID': 'TextEdit', 'List Name': 'TextEdit', 'State': 'TextEdit', 'Zip code': 'TextEdit', 'Distributo': 'TextEdit', 'Store Type': 'TextEdit', 'Store Hour': 'TextEdit', 'Parent Cha': 'TextEdit', 'Primary Ca': 'TextEdit', 'Category (': 'TextEdit', 'First Appe': 'TextEdit', 'Last Seen': 'TextEdit', 'In Airport': 'CheckBox', 'Has Drive': 'CheckBox', });
lyr_AmCoCafe_3.set('fieldImages', {'Cafe Numbe': 'TextEdit', 'Cafe Name': 'TextEdit', 'Address': 'TextEdit', 'Address 2': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip Code': 'Range', 'County': 'TextEdit', 'field_9': 'TextEdit', 'Country': 'TextEdit', 'Status': 'TextEdit', 'Site Type': 'TextEdit', 'Drive Thru': 'TextEdit', 'Building S': 'TextEdit', 'Expected o': 'TextEdit', 'Close Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Operator': 'TextEdit', 'Operations': 'TextEdit', 'Region': 'TextEdit', 'Market Gro': 'TextEdit', 'Franchise': 'TextEdit', 'Franchis_1': 'TextEdit', 'Channel of': 'TextEdit', 'CBSA ID': 'Range', 'DMA ID': 'Range', 'adtc_amco_dist': 'Range', 'adtc_amco_store_name': 'TextEdit', 'adtc_amco_area': 'TextEdit', 'adtc_amco_market': 'TextEdit', 'adtc_amco_current_to_previous_comparison_numeric': 'TextEdit', 'adtc_amco_current_to_previous_comparison': 'TextEdit', 'adtc_amco_adtc_p1': 'Range', });
lyr_Starbucks_1.set('fieldLabels', {'Label': 'no label', 'Chain Name': 'no label', 'Storefront': 'no label', 'Address': 'no label', 'Category': 'no label', 'City': 'no label', 'Country': 'no label', 'Last Updat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'List ID': 'no label', 'List Name': 'no label', 'State': 'no label', 'Store Numb': 'no label', 'ULI': 'no label', 'Zip code': 'no label', 'Parent Lis': 'no label', 'Distributo': 'no label', 'Distribu_1': 'no label', 'Store Type': 'no label', 'Primary Ca': 'no label', 'Center ID': 'no label', 'Category (': 'no label', 'First Appe': 'no label', 'Last Seen': 'no label', 'In Airport': 'no label', 'Has Drive': 'no label', });
lyr_CoffeeTeaorBoba_2.set('fieldLabels', {'Label': 'no label', 'Chain ID': 'no label', 'Chain Name': 'no label', 'Storefront': 'no label', 'Address': 'no label', 'Category': 'no label', 'City': 'no label', 'Last Updat': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'List ID': 'no label', 'List Name': 'no label', 'State': 'no label', 'Zip code': 'no label', 'Distributo': 'no label', 'Store Type': 'no label', 'Store Hour': 'no label', 'Parent Cha': 'no label', 'Primary Ca': 'no label', 'Category (': 'no label', 'First Appe': 'no label', 'Last Seen': 'no label', 'In Airport': 'no label', 'Has Drive': 'no label', });
lyr_AmCoCafe_3.set('fieldLabels', {'Cafe Numbe': 'no label', 'Cafe Name': 'no label', 'Address': 'no label', 'Address 2': 'no label', 'City': 'no label', 'State': 'no label', 'Zip Code': 'no label', 'County': 'no label', 'field_9': 'no label', 'Country': 'no label', 'Status': 'no label', 'Site Type': 'no label', 'Drive Thru': 'no label', 'Building S': 'no label', 'Expected o': 'no label', 'Close Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Operator': 'no label', 'Operations': 'no label', 'Region': 'no label', 'Market Gro': 'no label', 'Franchise': 'no label', 'Franchis_1': 'no label', 'Channel of': 'no label', 'CBSA ID': 'no label', 'DMA ID': 'no label', 'adtc_amco_dist': 'no label', 'adtc_amco_store_name': 'no label', 'adtc_amco_area': 'no label', 'adtc_amco_market': 'no label', 'adtc_amco_current_to_previous_comparison_numeric': 'no label', 'adtc_amco_current_to_previous_comparison': 'no label', 'adtc_amco_adtc_p1': 'no label', });
lyr_AmCoCafe_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});