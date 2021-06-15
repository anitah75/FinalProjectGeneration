//Reset option with "New Task" button
const NewTask = document.querySelector("#newTask");

NewTask.addEventListener('click', newTask);

function newTask(){
    document.querySelector("#new-task-form").reset();
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
let submitTask = document.querySelector("#btnAddTask");
let validationName = document.querySelector("#validationName");
let validationDescription = document.querySelector("#validationDescription");
let validationAssignedTo = document.querySelector("#validationAssignedTo");
let validationDueDate = document.querySelector("#validationDueDate");
let validationStatus = document.querySelector("#validationStatus");
let taskForm = document.querySelector("#taskForm");

const validFormFieldInput = (event) => {
    event.preventDefault();
    let nameOk = false;
    let descriptionOk = false;
    let assignOk = false;
    let dateOk = false;
    let statusOk = false;
    // Name input validation
    if(taskName.value.length >= 5){
        validationName.innerHTML = "Looks good!";
        validationName.style.color = "green";
        taskName.style.borderColor = "green";
        nameOk = true;
    } else {
        validationName.innerHTML = "Please provide a valid description";
        validationName.style.color = "red";
        taskName.style.borderColor = "red";
    }
    // Description input validation
    if(description.value.length >= 5){
        validationDescription.innerHTML = "Looks good!";
        validationDescription.style.color = "green";
        description.style.borderColor = "green"
        descriptionOk = true;
    } else {
        validationDescription.innerHTML = "Please provide a valid description";
        validationDescription.style.color = "red";
        description.style.borderColor = "red";
    }
    // assignTo validation
    if(assignedTo.value.length >= 5){
        validationAssignedTo.innerHTML = "Looks good!";
        validationAssignedTo.style.color = "green";
        assignedTo.style.borderColor = "green";
        assignOk = true;
    } else {
        validationAssignedTo.innerHTML = "Please provide a valid description";
        validationAssignedTo.style.color = "red";
        assignedTo.style.borderColor = "red";
    }

    //dueDate validation
    if(dueDate.value !== "") {
        validationDueDate.innerHTML = "Looks good!";
        validationDueDate.style.color = "green";
        dueDate.style.borderColor = "green";
        dateOk = true;
    } else {
        validationDueDate.innerHTML = "Please provide a valid description";
        validationDueDate.style.color = "red";
        dueDate.style.borderColor = "red";
    }
    // status validation
    if(status.value !== "Select") {
        validationStatus.innerHTML = "Looks good!";
        validationStatus.style.color = "green";
        status.style.borderColor = "green";
        statusOk = true;
    } else {
        event.preventDefault();
        validationStatus.innerHTML = "Please provide a valid description";
        validationStatus.style.color = "red";
        status.style.borderColor = "red";
    }
    
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

        // reset satus
        status.value = "Select";
        validationStatus.style.display = "none";
        status.style.borderColor = "#ced4da";

        //console.log(taskManager.render());
        taskManager.render();
    }
};


taskForm.addEventListener("submit", validFormFieldInput);

//test to create a task HTML 
// let taskHtml = createTaskHtml("Cooking","dinner for tonight", "Ana", "11/06/2021", "Pending");
// console.log(taskHtml);
