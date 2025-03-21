document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let shoppingList = document.querySelector('#shoppingList');
    let clearBtn = document.querySelector('#clear');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let inputElem = document.querySelector('#cartItem');
      let priceElem = document.querySelector('#price');
      let inputValue = inputElem.value.trim();
      let priceValue = priceElem.value.trim();
  
      if (inputValue === '' || priceValue === '') {
        alert('Please enter an item and its price.');
        return;
      }
      let price = parseInt(priceValue, 10);
      if (isNaN(price)) {
        alert('Please enter a valid price.');
        return;
      }
  
      buildCart(inputValue, price);
      updateTotal();
      form.reset();
    });
  
    clearBtn.addEventListener('click', () => {
      shoppingList.innerHTML = '';
      updateTotal();
    });
  });
  
  function buildCart(list, price) {
    let item = document.createElement('li');
  
    // Create info container for name and price
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('item-info');
    let textSpan = document.createElement('span');
    textSpan.textContent = list;
    let priceSpan = document.createElement('span');
    priceSpan.textContent = `Ksh ${price}`;
    priceSpan.classList.add('item-price');
    infoDiv.appendChild(textSpan);
    infoDiv.appendChild(priceSpan);
  
    // Create actions container for checkbox
    let actionsDiv = document.createElement('div');
    actionsDiv.classList.add('item-actions');
    let checkLabel = document.createElement('label');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('click', handleDone);
    checkLabel.appendChild(checkBox);
    checkLabel.appendChild(document.createTextNode(" Mark Purchased"));
    actionsDiv.appendChild(checkLabel);
  
    // Create edit icon in top right of card
    let editIcon = document.createElement('button');
    editIcon.classList.add('edit-icon');
    editIcon.innerHTML = '✎';
    editIcon.addEventListener('click', handleEdit);
  
    item.appendChild(editIcon);
    item.appendChild(infoDiv);
    item.appendChild(actionsDiv);
  
    document.querySelector('#shoppingList').appendChild(item);
  }
  
  function handleDone(e) {
    let item = e.target.closest('li');
    let infoDiv = item.querySelector('.item-info');
    let spans = infoDiv.querySelectorAll('span');
    if (e.target.checked) {
      spans.forEach(span => {
        span.style.textDecoration = 'line-through';
        span.style.color = '#777';
      });
      // Set card background to light red
      item.style.backgroundColor = '#ffcccc';
    } else {
      spans.forEach(span => {
        span.style.textDecoration = 'none';
        span.style.color = 'black';
      });
      item.style.backgroundColor = 'white';
    }
    updateTotal();
  }
  
  function handleEdit(e) {
    let item = e.target.closest('li');
    let infoDiv = item.querySelector('.item-info');
    let spans = infoDiv.querySelectorAll('span');
    let textSpan = spans[0];
    let priceSpan = item.querySelector('.item-price');
    
    let newText = prompt('Edit your item name:', textSpan.textContent);
    if (newText !== null && newText !== '') {
      textSpan.textContent = newText;
    }
    
    let currentPrice = priceSpan.textContent.replace('Ksh ', '');
    let newPrice = prompt('Edit the price (as an integer):', currentPrice);
    if (newPrice !== null && newPrice !== '' && !isNaN(parseInt(newPrice, 10))) {
      priceSpan.textContent = `Ksh ${parseInt(newPrice, 10)}`;
    }
    updateTotal();
  }
  
  function updateTotal() {
    let total = 0;
    document.querySelectorAll('#shoppingList li').forEach(item => {
      let checkBox = item.querySelector('input[type="checkbox"]');
      if (!checkBox.checked) {
        let priceText = item.querySelector('.item-price').textContent;
        let price = parseInt(priceText.replace('Ksh ', ''), 10);
        if (!isNaN(price)) {
           total += price;
        }
      }
    });
    document.querySelector('#total').textContent = `Total: Ksh ${total}`;
  }
  