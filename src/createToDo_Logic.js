
export class toDo {
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

export function retrieveTodo() {
    const title = prompt("Enter the title:");
    if(!title) return null;

    const description = prompt("Enter the description");
    if(!description) return null;

    const dueDate = prompt("When is this due?");
    if(!dueDate) return null;
    
    const priority = prompt("Rate the level of priority: High, Medium, Low");
    if(!priority) return (null);

    const notes = prompt("Insert any notes");
    if(!notes) return (null);

    return new toDo(title, description, dueDate, priority, notes);
}

export class Project {
    constructor(projectName){
        this.name = projectName;
        this.todos = [];
    };

    //add toDo function
    addToDo(todo){
        this.todos.push(todo);
    };

    //remove toDo function
    removeTodDo(todoTitle){
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    }

    //extendTodo(todo){

    //}
}

