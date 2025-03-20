document.addEventListener('DOMContentLoaded', () =>{
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildCart(e.target.cartItem.value)
        form.reset()
    })
})

function buildCart(list){
    let item = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDone)
    btn.textContent = 'Purchased'
    item.textContent = `${list} `
    item.appendChild(btn)
    console.log(item)
    document.querySelector('#shoppingList').appendChild(item)
}

function handleDone(e){
    let item = e.target.parentElement;
    item.style.textDecoration = 'line-through';
    item.style.backgroundColor = 'red';
}