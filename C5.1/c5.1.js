/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");



/* Этап 3. Получение данных из атрибутов и запись данных в результирующий объект */
const students = xmlDOM.querySelectorAll("student");
const result =[];
students.forEach((item) => {
  const nameNode = item.querySelector('name');
  const firstName = item.querySelector('first');
  const secondName = item.querySelector('second');
  const nameAttr = nameNode.getAttribute('lang');
  const ageNode = item.querySelector('age');
  const profNode = item.querySelector('prof');
  
  result.push({
    name: firstName.textContent + " " + secondName.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: nameAttr,
  })
});

console.log(result);

//Must have Output:
// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }