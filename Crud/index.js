let fs = require("fs");
let path = require(`path`);
let dirPath = path.join(__dirname, `Crud`);
let fileName = `${dirPath}Apple.txt`;

// Creating a file
// fs.writeFileSync(fileName, `Hello Apple`);

// Reading a file
// fs.readFile(fileName, `utf8`, (error, item) => {
//   console.log(item);
// });
// ! `utf8` what is it?
// ? if not used console shoes BUFFER (IT IS A TEMPERORY MEMORY LOCATION )

// Update a file
// fs.appendFile(fileName, ` Updated Text`, (err) => {
//   if (!err) {
//     console.log(` Updated New Text`);
//   }
// });

// rename a file
// fs.rename(fileName, `${dirPath}Fruit.js`, (err) => {
//   if (!err) {
//     console.log(` Updated New Text`);
//   }
// });

// Delete
// not working
// fs.unlinkSync(`${dirPath}Fruit.js`);
