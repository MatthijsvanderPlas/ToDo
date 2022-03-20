document.getElementById('addTodo').addEventListener('click', addTodo);

function addTodo(e) {
    e.preventDefault();
    var todo = document.querySelector('input').value;
    if (todo === "") {
        return;
    } else {
        const todoItem = document.createElement('li')
        todoItem.innerHTML = todo
        document.querySelector('ul').appendChild(todoItem)
        document.querySelector('input').value = ""
    }
}