console.log("test test test");


class toDo {
    constructor(title, description, dueDate, priority, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes; 
    }

    displayInfo(){
        console.log(`${this.title} | ${this.description} | due by ${this.dueDate} | the priority level is ${this.priority}`);

    }
}

function retrieveInfo() {
    const title = prompt("Enter the title:");
    const description = prompt("Enter the description");
    const dueDate = prompt("When is this due?");
    const priority = prompt("Rate the level of priority: High, Medium, Low");
    const notes = prompt("Insert any notes");

    return new toDo(title, description, dueDate, priority, notes);
}
const usersToDo = retrieveInfo();
usersToDo.displayInfo();