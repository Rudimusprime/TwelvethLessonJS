const arr = [23, 243, 234, 21, 54, 765, 643, 7, 643, 6745, 56];
const oddNumbers = arr.filter((number) => number % 2);
const evenNumbers = arr.filter((number) => !(number % 2));
const numbersBiggerThen100 = arr.filter((number) => number > 100);

const double = arr.map(number => number + 2);
const people = arr.map(number => number + " osób");

arr.forEach((number, index) => arr[index] = number * 2);