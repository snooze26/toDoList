export function createToDo(text = ""){
    const toDoTable = document.querySelector("#list");
    const row = document.createElement("tr");
    const toDo = document.createElement("td");

    toDo.textContext = text;
    //add properties 
    const title = document.createElement("td");
    title.textContent = toDo.title;

    const description = document.createElement("td");
    title.textContent = toDo.description;

    const dueDate = document.createElement("td");
    title.textContent = toDo.dueDate;

    const priority = document.createElement("td");
    title.textContent = toDo.priority;

    const notes = document.createElement("td");
    title.textContent = toDo.notes;

    //add checkbox, edit, delete 
    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
        row.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    checkboxCell.appendChild(checkbox);

    const editCell = document.createElement("td");
    const editBtn = document.createElement("button");
    edit.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const newTitle = prompt("Edit title:", toDo.title);
        const newDescription = prompt("Edit description:", toDo.description);
        const newDueDate = prompt("Edit dueDate:", toDo.dueDate);
        const newPriority = prompt("Edit priority:", toDo.priority);
        const newNotes = prompt("Edit notes:", toDo.notes);

        if(newTitle) title = newTitle;
        if(newDescription) description = newDescription;
        if(newDueDate) dueDate = newDueDate;
        if(priority) priority = newPriority;
        if(notes) notes = newNotes; 
    });
    editCell.appendChild(editBtn);
   
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContext = "Delete";
    deleteBtn.addEventListener("click", () => {
        row.remove(); 
    })
    deleteCell.appendChild(deleteBtn);

    row.appendChild(title);
    row.appendChild(description);
    row.appendChild(dueDate);
    row.appendChild(priority);
    row.appendChild(notes);
    row.appendChild(checkboxCell);
    row.appendChild(editCell);
    row.appendChild(deleteCell);


}