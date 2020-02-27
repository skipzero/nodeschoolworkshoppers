const fs = require('fs');

const path = process.argv[2];

const readDoc = (p, cb) => {
  let breaks = 0;
  const file = fs.readFile(p, (err, data) => {
    const lines = data.toString().split('\n').length - 1;
    console.log(lines);
  });
}

readDoc(path);
