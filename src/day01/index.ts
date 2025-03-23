import fs from 'fs';

fs.readFile('./test.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});