const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.result');

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
btn.addEventListener('click', () => {
  const inputValue1 = document.querySelector('.num1').value;
  const inputValue2 = document.querySelector('.num2').value;
  
  if ((inputValue1 >= 100 && inputValue1 <=300) && (inputValue2 >= 100 && inputValue2 <=300)) {
  // Делаем запрос за данными
  fetch(`https://picsum.photos/${inputValue1}/${inputValue2}`)
    .then((response) => {
      // const result = response.json();
      // console.log('result', result);
      return response.json();
    })
    .then((data) => {
      // Объект результата в формате JSON
      displayResult(data);
    })
    .catch(() => { console.log('error') });
    }
  else {
    console.log('Одно из чисел вне диапазона от 100 до 300')
  }
});
