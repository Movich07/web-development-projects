// // set itemn on local storage
// localStorage.setItem('Name','David');
// localStorage.setItem('Age', '30');

// // // Set item to session storage
// sessionStorage.setItem('title','oba');

// // localStorage.removeItem('Name');

// // get item on local storage
// const name = localStorage.getItem('Name');
// const age = localStorage.getItem('Age');

// console.log(name,age);

// // clear from local storage
// localStorage.clear()
// console.log(name, age);


const taskInput = document.getElementById('task');
taskInput.value = '';

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    // localstorage.setItem('Task', task);
    
    let tasks;

    if(localStorage.getItem('task') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('task'));
    }

    tasks.push(task);

    localStorage.setItem("task", JSON.stringify(tasks));
    alert("Task Successfuly Saved");


    e.preventDefault();
})

// get it to console
let tasks = JSON.parse(localStorage.getItem('task'));

// loop to console
tasks.forEach(function(task){
    console.log(task);
})