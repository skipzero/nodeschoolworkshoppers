const fs = require('fs');
const path = require('path');

const dir = process.argv[2];

const fileList = fs.readdir(dir, (err, list) => {
  if (err) {
    console.log(err);
  }
  return list.reduce((acc, file) => {
    const fileCheck = process.argv[3];
    // console.log('FILE:', file, fileCheck)
    if (path.extname(file) === `.${fileCheck}`) {
      acc.push(file);
    })
  return acc;
}, []);
});

console.log(fileList);
