const getPwd = function() {
    process.stdout.write(process.env.PWD)
    process.stdout.write('\nprompt > ');
    }


module.exports = getPwd;