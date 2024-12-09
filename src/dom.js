export function createToDo(text = ""){
    const row = document.createElement("tr");
    const toDo = document.createElement("td");

    toDo.textContext = text;

    const checkbox = document.createElement("input");
    const edit = document.createElement("td")
    const deleteBtn = document.createElement("button");

    deleteBtn.textContext = "Delete";
    deleteBtn.addEventListener("click", () => {
        row.remove(); 
    })


}