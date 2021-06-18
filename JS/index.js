//Reset option with "New Task" button
const NewTask = document.querySelector("#newTask");

NewTask.addEventListener('click', newTask);

function newTask(){
    document.querySelector("#taskForm").reset();
    validationName.style.display = "none"
    validationDescription.style.display = "none";
    validationAssignedTo.style.display = "none";
    validationDueDate.style.display = "none";
    validationStatus.style.display = "none";
    validationName.innerHTML = "none";
    validationDescription.innerHTML = "none";
    validationAssignedTo.innerHTML = "none";
    validationDueDate.innerHTML = "none";
    validationStatus.innerHTML = "none";
};

//Validation of the form

const taskManager = new TaskManager(0);
// Testing the TaskManager class
// taskManager.addTask('Take out the trash', 'Take out the trash to the front of the house', 'Nick', '11/06/2021', 'In Progress');
// taskManager.addTask('Cooking', 'Dinner for tonight', 'Antonio', '11/06/2021', 'In Progress');
// console.log(taskManager.currentId, taskManager.tasks);


let taskName = document.querySelector("#taskName");
//console.log("new task: " + taskName.value);
let description = document.querySelector("#description");
//console.log("description: " + description.value);
let assignedTo = document.querySelector("#assignedTo");
let dueDate = document.querySelector("#dueDate");
//console.log(dueDate.value);
let status = document.querySelector("#status");
//console.log("status: " + status.value);
let submitTask = document.querySelector("#submitTask");
let validationName = document.querySelector("#validationName");
let validationDescription = document.querySelector("#validationDescription");
let validationAssignedTo = document.querySelector("#validationAssignedTo");
let validationDueDate = document.querySelector("#validationDueDate");
let validationStatus = document.querySelector("#validationStatus");
let taskForm = document.querySelector("#taskForm");
let taskList = document.querySelector("#taskList");

let nameOk = false;
let descriptionOk = false;
let assignOk = false;
let dateOk = false;
let statusOk = false;

// Name input validation function
const nameValidFunc = ()=> {
    nameOk = false;
    if(taskName.value.length >= 5){
    validationName.style.display = "block";
    validationName.innerHTML = "Looks good!";
    validationName.style.color = "green";
    taskName.style.borderColor = "green";
    nameOk = true;
} else {
    validationName.style.display = "block";
    validationName.innerHTML = "Please provide a valid description";
    validationName.style.color = "red";
    taskName.style.borderColor = "red";
}};
taskName.addEventListener("input",nameValidFunc);

 // Description input validation function 
const descrValidFunc = () => {
    descriptionOk = false;
    if(description.value.length >= 5){
    validationDescription.style.display = "block";
    validationDescription.innerHTML = "Looks good!";
    validationDescription.style.color = "green";
    description.style.borderColor = "green"
    descriptionOk = true;
} else {
    validationDescription.style.display = "block";
    validationDescription.innerHTML = "Please provide a valid description";
    validationDescription.style.color = "red";
    description.style.borderColor = "red";
}};
description.addEventListener("input",descrValidFunc);

// assignTo validation function
const assignValidFunc = () =>{
    assignOk = false;
    if(assignedTo.value.length >= 5){
        validationAssignedTo.style.display = "block";
        validationAssignedTo.style.display = "block";
        validationAssignedTo.innerHTML = "Looks good!";
        validationAssignedTo.style.color = "green";
        assignedTo.style.borderColor = "green";
        assignOk = true;
    } else {
        validationAssignedTo.style.display = "block";
        validationAssignedTo.innerHTML = "Please provide a valid description";
        validationAssignedTo.style.color = "red";
        assignedTo.style.borderColor = "red";
    }
};
assignedTo.addEventListener("input",assignValidFunc);

//dueDate validation function
const dateValidfunc = () => {
    dateOk = false;
    if(dueDate.value !== "") {
        let date = new Date(dueDate.value);
        date.setHours(0,0,0,0);
        let currentDate = new Date();
        currentDate.setHours(0,0,0,0);
        if (currentDate <= date ){
        validationDueDate.style.display = "block";
        validationDueDate.innerHTML = "Looks good!";
        validationDueDate.style.color = "green";
        dueDate.style.borderColor = "green";
        dateOk = true;
        }else {
            validationDueDate.style.display = "block";
            validationDueDate.innerHTML = "The Date needs to be greater or equal than Today's Date!";
            validationDueDate.style.color = "red";
            dueDate.style.borderColor = "red";
        }
    } else {
        validationDueDate.style.display = "block";
        validationDueDate.innerHTML = "Please provide a valid description";
        validationDueDate.style.color = "red";
        dueDate.style.borderColor = "red";
        }
};
dueDate.addEventListener("input",dateValidfunc);

// status validation function
const statusValidFunction = () => {
    statusOk = false;
    if(status.value !== "Select") {
        validationStatus.style.display = "block";
        validationStatus.innerHTML = "Looks good!";
        validationStatus.style.color = "green";
        status.style.borderColor = "green";
        statusOk = true;
    } else {
        validationStatus.style.display = "block";
        validationStatus.innerHTML = "Please provide a valid description";
        validationStatus.style.color = "red";
        status.style.borderColor = "red";
    }
};
status.addEventListener("input",statusValidFunction);

const validFormFieldInput = (event) => {
    event.preventDefault();
    // Name input validation
    nameValidFunc();
    
    // Description input validation
    descrValidFunc();

    // assignTo validation
    assignValidFunc();

    //dueDate validation
    dateValidfunc();
   
    // status validation
    statusValidFunction();
    
    // add task step
    if(nameOk && descriptionOk && assignOk && dateOk && statusOk){
        taskManager.addTask(taskName.value, description.value, assignedTo.value, dueDate.value, status.value);
        //console.log(taskManager.tasks);

// reset inputs fields

        // reset name
        taskName.value = "";
        validationName.style.display = "none";
        taskName.style.borderColor = "#ced4da";

        // reset description
        description.value = "";
        validationDescription.style.display = "none";
        description.style.borderColor = "#ced4da";

        // reset assignTo
        assignedTo.value = "";
        validationAssignedTo.style.display = "none";
        assignedTo.style.borderColor = "#ced4da";

        // reset date
        dueDate.value = "";
        validationDueDate.style.display = "none";
        dueDate.style.borderColor = "#ced4da";

        // reset status
        status.value = "Select";
        validationStatus.style.display = "none";
        status.style.borderColor = "#ced4da";

        //console.log(taskManager.render());
        
    } 
    taskManager.render();
};


taskForm.addEventListener("submit", validFormFieldInput);


//test to create a task HTML 
// let taskHtml = createTaskHtml("Cooking","dinner for tonight", "Ana", "11/06/2021", "Pending");
// console.log(taskHtml);


taskList.addEventListener("click", (event) =>{
    if (event.target.classList.contains("done-button")){
        //console.log(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        //console.log(parentTask.dataset.taskId);
        const taskId = Number(parentTask.dataset.taskId);
        //console.log(taskId);
        const task = taskManager.getTaskById(taskId);
        //console.log(task);
        task.status = "Done";

        taskManager.render();
        //event.target.style.display = "none";
    }   
});
