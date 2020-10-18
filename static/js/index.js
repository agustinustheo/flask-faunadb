// Create a new list item when clicking on the "Add" button
function newTodo(){
  let value = document.getElementById("myInput").value;
  if (value === '') alert("You must write something!");

  addTodos(value).then(res => {
    newElement(res);
    document.getElementById("myInput").value = "";
  })
}

function newElement(element) {
  let li = document.createElement("li");
  let t = document.createTextNode(element.value);
  li.appendChild(t);
  if(element.status) li.classList.add('checked');
  li.onclick = function(ev){
    if (ev.target.tagName === 'LI') {
      updateTodos(element.ref_id, !element.status)
        .then(() => ev.target.classList.toggle('checked'));
    }
  }
  document.getElementById("myUL").appendChild(li);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = function() {
    deleteTodos(element.ref_id).then(res => {
      if(res){
        var div = this.parentElement;
        div.style.display = "none";
      }
    })
  }
  li.appendChild(span);
}

function loadTodos(){
  getTodos().then(response => {
    response.forEach(element => newElement(element))
  })
}
loadTodos()

async function getTodos(){
  let config = 
  { 
    method: 'GET', 
    headers: { 
      'Content-type': 'application/json'
    }
  }
  
  let res = await fetch(`${window.location}api/todos`, config)
  if(res.status !== 200) alert('Something went wrong.')
  return await res.json()
}

async function addTodos(value){
  let config = 
  { 
    method: 'POST', 
    headers: { 
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ value: value, status: false})
  }
  
  let res = await fetch(`${window.location}api/todos`, config)
  if(res.status !== 200) alert('Something went wrong.')
  return await res.json()
}

async function updateTodos(value, newStatus){
  let config = 
  { 
    method: 'PUT',
    headers: { 
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data: { status: newStatus }})
  }
  
  let res = await fetch(`${window.location}api/todos/${value}`, config)
  if(res.status !== 200) alert('Something went wrong.')
  return await res.json()
}

async function deleteTodos(value){
  let config = { method: 'DELETE' }
  
  let res = await fetch(`${window.location}api/todos/${value}`, config)
  if(res.status !== 200) alert('Something went wrong.')
  else return await res.json()
}