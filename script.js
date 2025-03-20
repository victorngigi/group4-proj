document.addEventListener('DOMContentLoaded', () =>{
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let inputValue = e.target.cartItem.value.trim();
        
        if (inputValue === '') {
            alert('Please enter an item before adding.');
            return;
        }

        buildCart(e.target.cartItem.value)
        // saveData();
        form.reset()
    })
});

function buildCart(list){
    let item = document.createElement('li')

    let addBtn = document.createElement('button')
    let clearBtn = document.querySelector('#clear')
    let editBtn = document.createElement('button')

    clearBtn.addEventListener('click', handleClear)
    addBtn.addEventListener('click', handleDone)
    editBtn.addEventListener('click', handleEdit)

    addBtn.textContent = '☑'
    editBtn.textContent = '✎'

    item.textContent = `${list} `
    item.appendChild(addBtn)
    item.appendChild(editBtn)

    console.log(item)
    document.querySelector('#shoppingList').appendChild(item)
}

function handleDone(e){
    let item = e.target.parentElement;
    item.style.textDecoration = 'line-through';
    item.style.backgroundColor = 'red';
}

function handleClear(e){
    document.querySelector('#shoppingList').innerHTML = '';
}

function handleEdit(e){
    let item = e.target.parentElement;
    let newText = prompt('Edit your item:', item.firstChild.textContext)
    let inputValue = newText.trim()
    if (inputValue === '') {
        alert('Please enter an item before adding.');
        return;
    }
    // saveData();
    item.firstChild.textContent = newText;
}
// function saveData() {localStorage.setItem("data",shoppingList.innerHTML);}
// function showTask(){shoppingList.innerHTML = localStorage.getItem("data");}
// showTask();