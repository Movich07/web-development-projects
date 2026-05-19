const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.list-group');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-task');


// load all event listerners 

loadEventListeners();

function loadEventListeners(){
    // getTask
    document.addEventListener('DOMContentLoaded', getTask)
    // add task 
    form.addEventListener('submit', addTask);
    // Remove Task Event
    tasklist.addEventListener('click', removeTask);
    // Clear Task
    clearBtn.addEventListener('click', clearTask);
    // Filter task
    filter.addEventListener('keyup', filterTask);
}

// Get and render the tasks we have on the local storage to the application
function getTask(e){
    
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // create an element
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // append text node to the li
    li.appendChild(document.createTextNode(task));
    // create a link
    let link = document.createElement('a');
    // add class
    link.className = 'delete-item float-right';
    // add icons
    link.innerHTML = '<i class="fas fa-trash"</i>';
    // append link into li
    li.appendChild(link);
    // append li to ul
    tasklist.appendChild(li);

      })

}

// taskInput.value = '';

function addTask(e){
   
    if(taskInput.value === ''){
        alert("Please add a task");
    }

    // create an element
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // append text node to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // create a link
    let link = document.createElement('a');
    // add class
    link.className = 'delete-item float-right';
    // add icons
    link.innerHTML = '<i class="fas fa-trash"</i>';
    // append link into li
    li.appendChild(link);
    // append li to ul
    tasklist.appendChild(li);

    // store in LS
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';

    // console.log(li);

    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Remove Task Event
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
    removeTaskInLocalStorage(e.target.parentElement.parentElement);
}
// Removing the task from the local storage and rendering to the User interface UI
function removeTaskInLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task 
function clearTask(e){
     tasklist.innerHTML = '';

// clear task in local storage
clearTaskInLocalStorage();
}

function clearTaskInLocalStorage(){
    localStorage.clear();
}

// filter Task
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.list-group-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display ='block';
        }else {
            task.style.display = 'none';
        }
    })



}