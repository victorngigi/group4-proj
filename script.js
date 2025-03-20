document.addEventListener('DOMContentLoaded', () =>{
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildCart(e.target.cartItem.value)
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

    addBtn.textContent = 'Purchased'
    editBtn.textContent = 'edit'

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
    item.firstChild.textContent = newText;
}