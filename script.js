document.getElementById('addProject-el').addEventListener('click', addProject);

function addProject(e) {
    e.preventDefault();
    var todo = document.getElementById('addProject-el').value;
    if (todo === "") {
        return;
    } else {
        const todoItem = document.createElement('li')
        todoItem.classList.add('todoItem')
        todoItem.classList.toggle('checked')
        todoItem.innerHTML = todo
        document.querySelector('ul').appendChild(todoItem)
        document.getElementById('addProject-el').value = ""
    }
}

var myTaskList = document.getElementsByTagName('li');

for (let i of myTaskList) {
    var span = document.createElement('span');
    var txt = document.createTextNode("X")
    span.className = "close";
    span.appendChild(txt);
    myTaskList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let i of close){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement(e) {
    e.preventDefault();
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }