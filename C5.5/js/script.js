const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.result');
const pageAccessedByReload = (
  (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
      .getEntriesByType('navigation')
      .map((nav) => nav.type)
      .includes('reload'));

// localStorage.clear();

function displayResult(apiData) {
  let cards = '';  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
};

// Вешаем обработчик на кнопку для запроса
function isNumeric(value) {
    return /^-?\d+$/.test(value);
};

btn.addEventListener('click', () => {
  const inputPage = document.querySelector('.num1').value;
  const inputLimit = document.querySelector('.num2').value;
  
  if ((inputPage < 1 || inputPage >10 || !isNumeric(inputPage)) && (inputLimit < 1 || inputLimit >10 || !isNumeric(inputLimit))) {
    console.log('Номер страницы и лимит вне диапазона от 1 до 10')} else if (inputPage < 1 || inputPage >10 || !isNumeric(inputPage)) {
    console.log('Номер страницы вне диапазона от 1 до 10')} else if (inputLimit < 1 || inputLimit >10 || !isNumeric(inputLimit)) {
    console.log('Лимит вне диапазона от 1 до 10')} 
  else if ((inputPage >=1 && inputPage <=10) && (inputLimit >=1 && inputLimit <=10)) {
  // Делаем запрос данных
  fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
    .then((response) => {
      // const result = response.json();
      // console.log('result', result);
    
    // Запишем данные в localStorage в виде JSON
// localStorage.setItem('myJSON', response.json());
   
      return response.json();
    })
    .then((data) => {

    // Object into storage
    localStorage.setItem('myData', JSON.stringify(data));
    if (pageAccessedByReload) {
      var fromStorage = localStorage.getItem('myData');
      displayResult(JSON.parse(fromStorage));
      // displayResult(localStorage.getItem('myData'));
    } 
    else {
      displayResult(data);
      console.log(data);
    }
    })
    .catch(() => { console.log('error') });
    }
  //page reload simulation
  // window.location.reload(true);
  // console.log(pageAccessedByReload);

});
// window.location.reload(true);
// Retrieve the object from storage
var retrievedObject = localStorage.getItem('myData');
if (pageAccessedByReload && document.querySelector('.num1').value.length == 0 && document.querySelector('.num2').value.length == 0) {
displayResult(JSON.parse(retrievedObject));  
}

console.log('myData: ', JSON.parse(retrievedObject));
 // console.log(localStorage.getItem('myData'));
