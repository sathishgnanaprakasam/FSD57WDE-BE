// File handling
const fs = require('fs');

// Read file
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.split('\n'));
// });

// read file synchronously
// try {
//     const data = fs.readFileSync('test.txt', 'utf8');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// Write file

const data = '\nThis is a new line of text.';

// fs.writeFile('test.txt', data, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File written successfully');
// });

// write file in append mode
fs.appendFile('test.txt', data, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File written successfully');
});