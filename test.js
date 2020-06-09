const todos = [{
    text: 'potatos',
    completed: true
}, {
    text: 'cream',
    completed: true
}, {
    text: 'ice',
    completed: true
}, {
    text: 'bear',
    completed: true
}, {
    text: 'sop',
    completed: true
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const there = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const cant = there.filter(function (todo) {
        return todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `you have ${cant.length} products`
    document.querySelector('#todos').appendChild(summary)

    there.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#add-p').addEventListener('click', function (e) {
    console.log('Add product')
})

document.querySelector('#delete-p').addEventListener('click', function (e) {
    console.log('delete product')
})

document.querySelector('#filter-p').addEventListener('click', function (e) {
    console.log('filter product')
})

document.querySelector('#new-p').addEventListener('input', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-p').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})

document.querySelector('#for-fun').addEventListener('change', function (e) {
    console.log(e.target.checked)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

/*
document.querySelector('#create-new').addEventListener('click',()=>{
    const ps = document.querySelector('p')
    ps.remove()
    const line = document.createElement('p')
    line.textContent = 'creado'
    document.querySelector('body').appendChild(line)
    console.log("create")
})
document.querySelector('#delete').addEventListener('click',()=>{
    const ps = document.querySelector('p')
    ps.remove()
    const line = document.createElement('p')
    line.textContent = 'eliminado'
    document.querySelector('body').appendChild(line)
    console.log("delete")
})
*/


