let i = 0;
while (i < 5) {
  console.log(i++);
}

let array = [1, 5, 6, 7, 8, 23];

let j = 0;

while (j < array[1] && j < array.length) {
  j++;
  console.log(j);
}

let k = 0;

do {
  console.log(k);
  k++;
} while (array.length > k);
