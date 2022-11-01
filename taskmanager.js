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
