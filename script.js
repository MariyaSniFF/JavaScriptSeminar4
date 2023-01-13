// 1. Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function IsNumEven(num) {
  return num % 2 === 0;
}

for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (IsNumEven(i)) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }
}

// 2.Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
arrayNumbers.splice(3, 2);
console.log(arrayNumbers);

// 3.Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrayRandom = [];
arrayRandom.push(
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10)
);
// //это тупо, но у меня никак больше не вышло
console.log(arrayRandom);

function ArraySum(arrayRandom) {
  let sum = 0;
  for (let i = 0; i < arrayRandom.length; i++) {
    sum += arrayRandom[i];
  }
  console.log(sum);
}

console.log(ArraySum(arrayRandom));
let min = Math.min.apply(null, arrayRandom);
console.log(min);

function FindNumber(arrayRandom) {
  for (let i = 0; i < arrayRandom.length; i++) {
    if (arrayRandom[i] === 3) {
      return true;
    }
  }
  return false;
}
console.log(FindNumber(arrayRandom));

// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 1; i < 21; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "x";
  }
  console.log(line);
}
