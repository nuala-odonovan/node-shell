
const fs = require('fs');

module.exports = function(file){
    let filePath = `./${file}`;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            return console.log(err);
        }
        console.log(data)
    })
}