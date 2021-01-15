process.stdout.write('prompt > ');

const fs = require('fs');
const pwd = require('./pwd')
const ls = require('./ls');
const cat = require('./cat')


process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd'){
        pwd();
    } else if(cmd === 'ls'){
        ls();
    } else if(cmd.slice(0, 3) === 'cat'){
        let fileName = cmd.split(" ")[1];
        cat(fileName);

    } else{
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
})
