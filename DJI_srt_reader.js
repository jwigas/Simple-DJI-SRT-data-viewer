// Load module
//let DJISRTParser = DJISRTParser;
//const fs = require('fs');

// Specify data source name
//let fileName = 'DJI_0725.SRT';

// And load the data in a string (with your preferred method)
//let dataString = fs.readFileSync(fileName,'utf-8');
console.log(localStorage.filename);
// You can create multiple instances, one for reading each SRT file. Specify data as a string and filename for future reference.
let DJIData = DJISRTParser(localStorage.filename);

var data = DJIData.rawMetadata();

data.forEach(function(hasil, index){
    console.log('index '+index+' latitude ' +hasil.latitude+ ' longitude ' +hasil.longitude+ ' altitude ' +hasil.altitude)
})