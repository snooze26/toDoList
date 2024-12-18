export function createTodo(text = ""){
    const todoTable = document.querySelector("#list");
    if(!todoTable){
        console.error("Table element not found");
        return;
    };

    const row = document.createElement("tr");

    //add properties 
    const title = document.createElement("td");
    title.textContent = text.title;

    const description = document.createElement("td");
    description.textContent = text.description;

    const dueDate = document.createElement("td");
    dueDate.textContent = text.dueDate;

    const priority = document.createElement("td");
    priority.textContent = text.priority;

    const notes = document.createElement("td");
    notes.textContent = text.notes;

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
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const newTitle = prompt("Edit title:", text.title);
        const newDescription = prompt("Edit description:", text.description);
        const newDueDate = prompt("Edit dueDate:", text.dueDate);
        const newPriority = prompt("Edit priority:", text.priority);
        const newNotes = prompt("Edit notes:", text.notes);

        if(newTitle) title.textContent = newTitle;
        if(newDescription) description.textContent = newDescription;
        if(newDueDate) dueDate.textContent = newDueDate;
        if(priority) priority.textContent = newPriority;
        if(notes) notes.textContent = newNotes; 
    });
    editCell.appendChild(editBtn);
   
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
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

    todoTable.appendChild(row);


}