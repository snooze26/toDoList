import {retrieveTodo, toDo} from "./appLogic.js"

const usersToDo = retrieveTodo();
usersToDo.displayInfo();