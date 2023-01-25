/* ���� 1. ���������� ������ */

// �������� ���������� ������ DOMParser. �� �������� ��� ������� XML
const parser = new DOMParser();

// XML, ������� �� ����� �������
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
      <first>����</first>
      <second>������</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


/* ���� 2. ��������� ������ */

// ������� XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");



/* ���� 3. ��������� ������ �� ��������� � ������ ������ � �������������� ������ */
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
//     { name: '���� ������', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }