/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
    constructor() {
        this.todoList = []
    }

    add(todo){
        this.todoList.push(todo)
    }

    remove(index){
        this.todoList.splice(index , 1)
    }

    update(index, updatedTodo){
        this.todoList.splice(index, 1, updatedTodo)
    }

    getAll(){
        return this.todoList
    }

    clear(){
        this.todoList = []
    }

}

let todoApp = new Todo()

todoApp.add("first")
todoApp.add("second")
console.log(todoApp.getAll())
todoApp.add("four")
console.log(todoApp.getAll())
todoApp.update(2, "three")
console.log(todoApp.getAll())

todoApp.remove(2)
console.log(todoApp.getAll())

todoApp.clear()
console.log(todoApp.getAll())

module.exports = Todo;
