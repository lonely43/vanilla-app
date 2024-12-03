const fs = require('fs');
const path = require('path');

const data = 'Hello Node.js'
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

console.log("Current directory:", __dirname);