const fs = require('fs');

const path = process.argv[2];

const readDoc = (p) => {
  let breaks = 0;
  const file = fs.readFileSync(p);
  const lines = file.toString().split('\n').length - 1;
  console.log(lines)
}

readDoc(path);
