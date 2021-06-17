const fs = require('fs');

const afterRead;

fs.readFile('file.json', 'utf8', (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});

// gunakan hasil dari fs.readFile kedalam fungsi afterRead
// hasil output:
// seperti file.json