

const total = () => {
  const nodeJS = process.argv.reduce((acc, arg, index) => {
    // console.log('ARG::', argv, acc, index)
    if (index > 1) {
      acc += arg
    }
    return acc
  }, 0);
  console.log(nodeJS)
}

total()
