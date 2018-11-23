//============================================
//-----------  STEP - 1 ----------------------
//============================================


/*var todos = [];
function add() {
    var task = document.getElementById("task").value;
    todos.push(task);
    document.getElementById('todos').innerText = todos;
}*/


// ============================================
// -----------  STEP - 2 ----------------------
// ============================================


/*var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';
    show();
}

function show() {
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}*/


//============================================
//-----------  STEP - 3 ----------------------
//============================================


/*
function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}


function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();
*/



//============================================
//-----------  STEP - 4 ----------------------
//============================================


/*function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();*/





//============================================
//-----------  STEP - 5 ----------------------
//============================================

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('data-id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function isDone() {
    var todos = getTodos();
    if(todos[this.getAttribute("data-id")].isDone) {
        todos[this.getAttribute("data-id")].isDone = false;
    }
    else{
        todos[this.getAttribute("data-id")].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}

function edit()
{
    if (this.getAttribute("data-toggle") == "edit")
    {
        var id = this.getAttribute("data-id");
        var editid = "edit-"+id;
        var edit = document.getElementById(editid);
        edit.classList.remove("d-none");
        this.innerHTML = '<span class="d-none d-sm-inline"> Save </span>';
        this.setAttribute("data-toggle", "save");        
    }
    else
    {
        var id = this.getAttribute("data-id");
        var editid = "edit-"+id;
        var todos = getTodos();
        var edit = document.getElementById(editid);
        todos[id].task = edit.value;
        localStorage.setItem('todo',JSON.stringify(todos));
        show();
    }
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        var doneText;
        if (todos[i].isDone)
            doneText = 'Unmark As Done';
        else
            doneText = 'Mark As Done';
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id = "del-'+i+'" data-id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>'+
            '<button class="btn btn-success" id = "done-'+i+'" data-id="' + i + '">' +
            '<span class="d-none d-sm-inline"> '+doneText+' </span> </button>'+
            '<button data-toggle = "edit" class="btn btn-secondary" id = "editbtn-'+i+'" data-id="' + i + '">' +
            '<span class="d-none d-sm-inline"> Edit </span> </button>'+
            '<input id="edit-'+i+'" class="d-none" style="float:right; margin-right:2%">';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
    var buttons2 = document.getElementsByClassName('btn-success');
    for(var i=0; i<buttons2.length; i++){
        buttons2[i].addEventListener('click',isDone);
    }
    var buttons3 = document.getElementsByClassName('btn-secondary');
    for(var i=0; i<buttons3.length; i++){
        buttons3[i].addEventListener('click',edit);
    }
}
show();