const path = require('path');
const notes = 'c:/hugo/personal/input.txt';

console.log(path.dirname(notes)); // /users/joe
console.log(path.basename(notes)); // notes.txt
console.log(path.extname(notes)); // .txt