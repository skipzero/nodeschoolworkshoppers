const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const even = (numb) => {
  return numb % 2 === 0;
}

const filtered = numbers.filter(even);

console.log(filtered)
