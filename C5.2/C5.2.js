/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);


/* Этап 3. Запись данных в результирующий объект */
let result = []

for (let i = 0; i < data.list.length; i++) {
  console.log(i)
  result.push({
    name: data.list[i]['name'],
    age: Number(data.list[i]['age']),
    prof: data.list[i]['prof'],
    // age: item.age,
    // prof: item.prof,
  });
}

// data.list.forEach(function(key, value) {
//       console.log(key);
//     });

console.log(result, typeof result)


//Output must be:
//{
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]
// }