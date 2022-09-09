const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', addTask);

let total = 0;
let completed = 0;


document.addEventListener('click', (e) => {
    if(e.target.className.includes("delete-icon")) {
        const span = e.target;
        const btn = span.parentElement;
        const task = btn.parentElement;
        
        task.remove();
        total -= 1;
        document.getElementById("total").textContent = total;
    }
});

document.addEventListener('change', (e) => {
    if(e.target.checked && e.target.className.includes('finish-box')) {
        const task = e.target.parentElement.parentElement;
        task.style.backgroundColor = 'lightgreen';

        //increase completed tasks
        completed += 1;
        document.getElementById('completed').textContent = completed;
    }else if (e.target.className.includes("finish-box") && !e.target.checked){
        const task = e.target.parentElement.parentElement;
        task.style.backgroundColor = '#fefefe';

        //decrease completed tasks
        completed -= 1;
        document.getElementById('completed').textContent = completed;
    }
    
});

// Delete Task

function deleteTask(task) {

};

// Add Task

function addTask(e) {
    e.preventDefault();
    // read input
    const inputField = document.getElementById('entered-todo');
    const enteredValue = inputField.value.trim();
    // validation
    if(!enteredValue) return alert('Please enter a task!');
    
    //create a div with class card
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div>
        <input type="checkbox" class="finish-box">
        <span> ${enteredValue}</span>
        </div>

        <button id="delete-btn"> 
        <span class="material-symbols-outlined delete-icon">
            delete_forever
        </span>
        </button>
    
    `;

    // add the task to the dom
    const taskList = document.getElementById("todos-list");
    taskList.appendChild(card);
    //clear the input
    inputField.value = '';
    total += 1;
    document.getElementById('total').textContent = total;
};