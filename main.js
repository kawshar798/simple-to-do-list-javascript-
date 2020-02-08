//variable define

const form     = document.querySelector('#add-task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter   = document.querySelector('#filter');
const taskInput     = document.querySelector('#task');

//load add event listern 
loadAllEventListeners();

function loadAllEventListeners(){
    //Add task
    form.addEventListener('submit',addTask);
}

//addTask 

function addTask(e){
    if(taskInput.value === ''){
        alert('add task');
    }
    //create Li Element
    const li = document.createElement('li');
    //add class name in li
    li.className="custom-li";
    //apend taxt Node in li
    li.appendChild(document.createTextNode(taskInput.value));

    //create Link Element
    const link = document.createElement('a');
    //add class in link
    link.className = 'delete-item text-danger';

    //add icon
    link.innerHTML='<i class="fa fa-trash"></i>';

    //link append in li
    li.appendChild(link);
    //li append in Ul
    taskList.appendChild(li)

    //clear input filed
    taskInput.value ='';
    console.log(li);
    e.preventDefault();

}

