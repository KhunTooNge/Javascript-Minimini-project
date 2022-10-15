let taskInput = document.querySelector('.task-input input')
let todosList = document.querySelector('.todos-list')
let todos = JSON.parse(localStorage.getItem('todo-list')) 
let clearAll = document.getElementById('clear-btn')
let  filterTask = document.querySelectorAll('.menubar');

let editid;
let isEdit = false;

//filterMenu
filterTask.forEach( span =>{
  span.addEventListener('click',(e)=> {
    if(e.target.classList.contains('menubar')){
        return
    }
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    showItem(e.target.id)
    console.log(e.target.id)
  })

})

// trash icon click => delete
function deletedTask(id,status){
    todos.splice(id,1);
    localStorage.setItem('todo-list',JSON.stringify(todos))
    showItem(status)
}

// status update
function statusUpdate(item){
    let todoTax = item.parentElement.lastElementChild
    if(item.checked){
        todoTax.classList.add('lineThrow')
        todos[item.id].status = 'completed'
    }else{
        todoTax.classList.remove('lineThrow')
        todos[item.id].status = 'panding'   
    }

    localStorage.setItem('todo-list',JSON.stringify(todos))
}
function showItem(filterStatus){
    let li = "";
    if(todos){
        todos.forEach((el,id)=> {
            let completedStatus =  todos[id].status == 'completed' ? 'lineThrow' : '';
            let completedChecked = todos[id].status == 'completed' ? 'checked' : '';
            if( filterStatus == todos[id].status || filterStatus == 'all'){
                li += 
                `<li class="todo-item" >
                     <label for="${id}">
                         <input type="checkbox" id="${id}" onclick=statusUpdate(this) ${completedChecked}>
                         <p class="todo-txt ${completedStatus}" >${el.task}</p>
                     </label>
                     <div>
                         <i class="fa-solid fa-pen-to-square edit-ic" onclick="updateTask(${id},'${el.task}','${el.status}')"></i>
                         <i class="fa-solid fa-trash delete-ic" onclick=deletedTask(${id},'${el.status}')></i>
                     </div>
                 </li>`;
            } 
           })   
           todosList.innerHTML = li || `<p class="notask"> No tasks to show here</p>`;    
    }
}
showItem("all")

function updateTask(id,item,status){
 taskInput.value = item
 isEdit = true;
 editid = id;
 showItem(status)
}

clearAll.addEventListener('click',()=>{
    todos.splice(0,todos.length)
    localStorage.setItem('todo-list',JSON.stringify(todos))
    showItem("all")
})




taskInput.addEventListener('keyup', e => {
    let userInput  = taskInput.value.trim();
    if(e.key == 'Enter' && userInput){
        if(isEdit){
         todos[editid].task = userInput;
         isEdit = false;
         editid;
        }else{
            if(!todos){
                todos = []
            }
            let userInputValue = {task: userInput , status:'panding'}
            todos.push(userInputValue);
        }
        localStorage.setItem('todo-list',JSON.stringify(todos))
        taskInput.value = "";
        showItem("all");
    }
})





