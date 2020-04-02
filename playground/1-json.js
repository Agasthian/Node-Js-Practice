const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };

//Write data to json file
// const BookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', BookJSON);

//Read data from json file
// const bufferData = fs.readFileSync('1-json.json');
// const dataJSON = bufferData.toString();
// const data = JSON.parse(bufferData);
// console.log(data.title);

//Challenge
//read
const bufferData = fs.readFileSync('1-json.json');
const dataJSON = bufferData.toString();
const data = JSON.parse(dataJSON);
//edit
data.name = 'Agasthian';
data.age = '28';
//write
const userData = JSON.stringify(data);
fs.writeFileSync('1-json.json', userData);
console.log(userData); 
