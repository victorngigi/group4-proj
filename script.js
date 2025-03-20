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
    item.setAttribute('id','item')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    item.textContent = `${list} `
    item.appendChild(btn)
    console.log(item)
    document.querySelector('#shoppingList').appendChild(item)
}

function handleDelete(e){
    e.target.item.style.text-decoration: line-through;
    e.target.item.setBgRed()
}