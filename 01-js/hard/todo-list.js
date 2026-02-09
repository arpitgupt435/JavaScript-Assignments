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
  constructor(){
    this.newtodo=[];
  }
  add(todo){
    this.newtodo.push(todo);
  }
  remove(index){
    this.newtodo.splice(index,1);
  }
  update(index,updatedTodo){
    if(index>=this.newtodo.length){
      return;
    }
    this.newtodo.splice(index,1,updatedTodo);
  }
  getAll(){
    return this.newtodo;
  }
  get(ind){
    if(ind>=this.newtodo.length){
      return null;
    }
    return this.newtodo[ind];
  }
  clear(){
    this.newtodo=[];
  }
}

module.exports = Todo;