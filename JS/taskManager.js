const createTaskHtml = (id, name, description, assignedTo, dueDate, status)  => {
  let visibility;
  if(status === "Done"){
    visibility = "invisible";
    
  }else{
    visibility = "visible";
  }
  const html = `
  <li class="list-group-item list-border" data-task-id="${id}">
    <a href="#" contenteditable>
      <div class="card-body">
      <h3 class="card-title">${name}</h3>
      <p class="card-text">${description}</p>
      <h6 class="card-subtitle mb-2 mt-2">Assigned To: <span class="h5 strong">${assignedTo}</span></h6>
      <h6 class="card-subtitle my-3">Date: <span class="strong">${dueDate}</span></h6>
      <div class="align-items-baseline justify-content-between">
        <h6 class="card-subtitle my-3 mt-4">Status: <span class="strong">${status}</span></h6>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-4 justify-content-center">
            <button class="col-4 btn btn-outline-success done-button ${visibility} mx-5"><i class="fa fa-thumbs-o-up "></i> Done</button> 
            <button class="col-4 btn btn-outline-danger mx-5 delete-button mt-1"><i class="fa fa-trash"></i> Delete</button>
          </div>
        </div>
      </div>
    </div>
  </a>
</li>`;

return html;
}

class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate, status) {
        const newTask = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };
        this.tasks.push(newTask);
    }
    render(){
        const tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++){
          const renderTask = this.tasks[i];
          //console.log(renderTask);
          const date = new Date(renderTask.dueDate);
          //console.log(date);
          const formattedDate = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
          //console.log(formattedDate);
          const taskHtml = createTaskHtml(
            renderTask.id,
            renderTask.name, 
            renderTask.description, 
            renderTask.assignedTo, 
            formattedDate, 
            renderTask.status);
          tasksHtmlList.push(taskHtml);
          //console.log(taskHtml);
        }
        const taskHtml = tasksHtmlList.join("\n");
        const taskList = document.querySelector("#taskList");
        taskList.innerHTML = taskHtml;
    }

    getTaskById(taskId){
      let foundTask;
      for(let i = 0; i < this.tasks.length; i++){
        const task = this.tasks[i];
        if(task.id === taskId){
          foundTask = task;
        }
      }
      return foundTask;
    }

    save(){
      let tasksJson = JSON.stringify(this.tasks);
      localStorage.setItem("tasks", tasksJson);
      let currentId = JSON.stringify(this.currentId);
      localStorage.setItem("currentId", currentId);
    }

    load(){
      //cheching if there are any tasks in localStorage
      if(localStorage.getItem("tasks")){
        let tasksJson = localStorage.getItem("tasks");
        this.tasks = JSON.parse(tasksJson);
      }

      if(localStorage.getItem("currentId")){
        let currentId = localStorage.getItem("currentId");
        this.currentId = JSON.parse(currentId);
      }
    }

    deleteTask(taskId){
      let newTasks = [];
      for(let i = 0; i < this.tasks.length; i++){
        let task = this.tasks[i];
        if(task.id !== taskId){
          newTasks.push(task);
        }
      }
      this.tasks = newTasks;
    }

};
  
 