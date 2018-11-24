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
    var todos = [];                                     //created an empty array
    var todos_str = localStorage.getItem('todo');      //getting the todo list if there is any in local storage
    if(todos_str !== null)
        todos = JSON.parse(todos_str);                 //it is stored in JSON format so we are parsing it
    return todos;
}

function add() {
    var task = document.getElementById('task').value;                  //getting the value from the input field
    if(task.trim() == ''){                                            //checking if there is anything in it and responding accordingly
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();                                          //getting the todo list from local storage
    todos.push({task: task, isDone: false});                        //pushing the new item into the array
    document.getElementById('task').value = '';                       //resetting the value of the input field
    localStorage.setItem('todo',JSON.stringify(todos));                       //storing the todo list back into local storage after converting to JSON format
    show();                                                      //function to show the list
    return false;
}

function remove() {
    var id = this.getAttribute('data-id');                //get the id (index) of the item
    var todos = getTodos();                       //getting the todo list
    todos.splice(id,1);                                 //removing that item from the list
    localStorage.setItem('todo',JSON.stringify(todos));       //storing back in local storage
    show();                                              //function to show the list
    return false;
}

function isDone() {
    var todos = getTodos();                //getting todo list
    if(todos[this.getAttribute("data-id")].isDone) {                 //checking if the isDone key value is true or not and acting accoridngly
        todos[this.getAttribute("data-id")].isDone = false;
    }
    else{
        todos[this.getAttribute("data-id")].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));                   //storing back into local storage after modifying the isDone state
    show();                                                     //showing the list
}

function edit()
{
    if (this.getAttribute("data-toggle") == "edit")             //checking the attribute value, to see if button is in edit mode or save mode
    {
        var id = this.getAttribute("data-id");                 //get the id (index) value of the list item
        var editid = "edit-"+id;                             //this is the id for the edit input field of that item
        var edit = document.getElementById(editid);                 //get the edit input field of that item
        edit.classList.remove("d-none");                       //removing d-none class so it is visible
        this.innerHTML = '<span class="d-none d-sm-inline"> Save </span>';      //changing the text of the button inside from edit to save
        this.setAttribute("data-toggle", "save");                                  //changing the attribute value to signify button is in save state
    }
    else                                             //do this if button was in save mode
    {
        var id = this.getAttribute("data-id");      //get id (index) of list item
        var editid = "edit-"+id;                  //id of the edit input field for that item
        var todos = getTodos();                           //get the todo list from local storage
        var edit = document.getElementById(editid);       //get input edit filed of that item
        todos[id].task = edit.value;                    //get the value from that field and modify the todo list
        localStorage.setItem('todo',JSON.stringify(todos));   //store the list back into local storage
        show();                                                 //show the list
    }
}

function show() {                                  //function to show the list items
    document.getElementById('todos').innerText = '';     //reset the inner text of the div with id 'todos'
    var todos = getTodos();                           //get the todos list
    var ul = document.createElement('ul');                  //create a ul element
    ul.classList.add("list-group");                         //add list-group class to it for styling purposes
    for(var i=0; i<todos.length; i++){                 //loop to iterate over the todos list
        var li = document.createElement('li');          //create an li element
        var doneText;                               
        if (todos[i].isDone)                               //checking the isDone key value of the item and setting the value of doneText accordingly
            doneText = 'Unmark As Done';
        else
            doneText = 'Mark As Done';
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +                               //adding this html code into the li item that was created above (it has all the required text, buttons and input fields)
            '<button class="btn btn-danger" id = "del-'+i+'" data-id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>'+
            '<button class="btn btn-success" id = "done-'+i+'" data-id="' + i + '">' +
            '<span class="d-none d-sm-inline"> '+doneText+' </span> </button>'+
            '<button data-toggle = "edit" class="btn btn-secondary" id = "editbtn-'+i+'" data-id="' + i + '">' +
            '<span class="d-none d-sm-inline"> Edit </span> </button>'+
            '<input id="edit-'+i+'" class="d-none" style="float:right; margin-right:2%">';
        li.classList.add("list-group-item");                             //add this class to the li element for styling reasons
        if(todos[i].isDone)                                   //check the isDone key value of the item for which this iteration was done, and accordingly add 'done' class for styling reasons
            li.classList.add("done");
        ul.appendChild(li);                                 //append this newly created li element into the ul element that was created before the loop
    }
    document.getElementById('todos').appendChild(ul);          //after the iterating through the list and creating and adding li elements into the ul, append the ul into the div with id 'todos'
    var buttons = document.getElementsByClassName('btn-danger');   //get the buttons with this class in it
    for(var i=0; i<buttons.length; i++){                            //iterate over those buttons and add an event listener for the click event, which will call remove on click
        buttons[i].addEventListener('click',remove);
    }
    var buttons2 = document.getElementsByClassName('btn-success');        //same as above, get buttons, and add event listeners for click calling a different funcion this time
    for(var i=0; i<buttons2.length; i++){
        buttons2[i].addEventListener('click',isDone);
    }
    var buttons3 = document.getElementsByClassName('btn-secondary');           //same as above
    for(var i=0; i<buttons3.length; i++){
        buttons3[i].addEventListener('click',edit);
    }
}
show();                                          //calling the show() function, this will be the first one to be called when the script is loaded