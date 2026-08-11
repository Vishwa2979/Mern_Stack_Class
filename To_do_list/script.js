let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function displayTasks(){
    const taskList=document.getElementById("taskList");
    taskList.innerHTML="";

    tasks.forEach((task,index)=>{
        const li=document.createElement("li");

        const span=document.createElement("span");
        span.textContent=task.text;

        if(task.completed){
            span.classList.add("completed");
        }

        span.onclick=()=>{
            tasks[index].completed=!tasks[index].completed;
            saveTasks();
            displayTasks();
        };

        const button=document.createElement("button");
        button.textContent="Delete";
        button.classList.add("delete");

        button.onclick=()=>{
            tasks.splice(index,1);
            saveTasks();
            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);
    });
}

function addTask(){
    const input=document.getElementById("taskInput");
    const text=input.value.trim();

    if(text===""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text:text,
        completed:false
    });

    input.value="";

    saveTasks();
    displayTasks();
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

displayTasks();