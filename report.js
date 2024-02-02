const newman = require('newman');
require('dotenv').config();
 

 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/32547250-a2a886f4-386f-451e-a992-074df902c64b?access_key=${process.env.ACCESS_KEY}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});