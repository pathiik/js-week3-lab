studentMarks = [85, 97, 44, 37, 37, 76, 60];
// Adding every element of the array using a reducer function
const studentTotal = studentMarks.reduce((total, mark) => total + mark);
const studentAverage = studentTotal / studentMarks.length;
console.log(studentAverage.toFixed(2)); // Rounding off to 2 decimal places

itemPrices = [250, 645, 300, 900, 50];
// Subtracting 10% from each item price using map function
offerPrice = itemPrices.map((offerPrice) => offerPrice - offerPrice * 0.1);
console.log(offerPrice);

companiesName = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companiesName.shift(); // Removing the first element
companiesName["Uber"] = "Ola"; // Replacing the second element
companiesName[companiesName.length] = "Amazon"; // Adding a new element at the end
console.log(companiesName);
