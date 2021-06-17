const fs = require('fs');

const afterRead = (err, data) => {
    if(err) console.log(err);
    else console.log(data);
};

fs.readFile('file.json', 'utf8', afterRead);

// gunakan hasil dari fs.readFile kedalam fungsi afterRead
// hasil output:
// seperti file.json