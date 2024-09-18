// Challenge 1
const c1Array = [1, 2, 3, 4, 5];

c1Array.push(6); // Adding 6 at the end
c1Array.unshift(0); // Adding 0 in the beginning
c1Array.reverse(); // Reversing the array
console.log(c1Array);

// Challenge 2
const c2Array1 = [1, 2, 3, 4, 5];
const c2Array2 = [5, 6, 7, 8, 9, 10];

c2Array2.shift(); // Removing the first value
const c2Array3 = [...c2Array1, ...c2Array2]; // Concatinating both arrays using spread operator
c2Array3.flat(); // Flatteing the array (accessing elements instead of array itself)
console.log(c2Array3);
