const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
});
function createTaskHtml(id, name, description, assignedTo, dueDate, status) {

  html = `<li class="list-group-item" data-task-id=${id}>
      <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
          <h5>${name}</h5>
          <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
      </div>
      <div class="d-flex w-100 mb-3 justify-content-between">
          <small>Assigned To: ${assignedTo}</small>
          <small>Due: ${dueDate}</small>
        
      </div>
      <p>${description}</p>
      <button type="button" class="done-button btn btn-success">Mark as Done</button>
  </li>`;
  return html;

}
class TaskManager {
  constructor(currentId) {
    this.tasks = [];
    this.currentId = 0;
  }
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      assignedTo: document.getElementById('assignedTo').value,
      dueDate: document.getElementById('dueDate').value,
      status: 'TODO'
    };
    this.tasks.push(task);

  }
  render(){
    let tasksHtmlList = [];
    for (let taskLoopCount = 0; taskLoopCount < this.tasks.length; taskLoopCount++) {
        let currentTask = this.tasks[taskLoopCount];
        const d = new Date(this.tasks[taskLoopCount].dueDate);
        let formattedDate = `${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`;
        let taskHtml = createTaskHtml(
          this.tasks[taskLoopCount].id,
          this.tasks[taskLoopCount].name, 
          this.tasks[taskLoopCount].description, 
          this.tasks[taskLoopCount].assignedTo, 
          formattedDate, 
          this.tasks[taskLoopCount].status
          );
          tasksHtmlList.push(taskHtml);
    }
    let tasksHtml = tasksHtmlList.join(" \n ");
    document.getElementById('myList').innerHTML = tasksHtml;
  }