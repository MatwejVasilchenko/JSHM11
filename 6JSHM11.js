let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число:');
  if (input !== null && input !== '') {
    numbers.push(Number(input));
  }
} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);