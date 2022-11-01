function validFormFieldInput(data) {
  let alertBox = document.getElementById('alert');
  let newTaskNameInput = document.getElementById(data);
  let name = newTaskNameInput.value;
  if (name === ""){
    alertBox.classList.remove("d-none") 
  } else {
    alertBox.classList.add("d-none")
  }
}


tasksList = document.querySelector('#myList');
tasksList.addEventListener('click', (event) => {
   if (event.target.classList.contains("done-button")===true) {
   const parentTask = event.target.parentElement;
   const taskId = Number(parentTask.dataset.taskId);
   const task = newTaskVar.getTaskById(taskId);
   task.status = 'DONE';
   newTaskVar.render()
   }
  });