const fs = require('fs');

const path = process.argv[2];

const readDoc = (p) => {
  let breaks = 0;
  const txtArr = fs.readFileSync(p, 'utf8', (err, data) => {
    data = data.toString() //.split('\n');
    console.log(typeof data)
    // console.log(data)
    return data;
  });
  console.log(typeof txtArr)
}

readDoc(path);
