class Todo {
    constructor(id, description) {
      this.id = id
      this.description = description
    }
    getTodo() {
      return { id: this.id, description: this.description }
    }
    setDescription(newDescription) {
      newDescription = this.description
    }
  }

  function TodoManagement() {
    let todos = []

    function addTodo(des) {
      const todo = new Todo(des)
      return todos.push(todo)
    }

    function findTodo(searchId) {
      return todos.find((todo) => todo.id === searchId)
    }

    function findIndexTodo(searchId) {
      return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId) {
      const indexToRemove = findIndexTodo(removeId)
      if (indexToRemove !== -1) {
        todos.splice(indexToRemove, 1)
      }
    }
    
    function getTodo() {
      return todos
    }
    return { addTodo, findTodo, findIndexTodo, removeTodo, getTodo }
  }
1
  const tdm = TodoManagement()
  console.log(tdm.addTodo('reading')) //1
  console.log(tdm.addTodo('swimming')) //2
  console.log(tdm.getTodo())
  //[
  //     Todo { id: 1, description: 'reading' },
  //     Todo { id: 2, description: 'swimming' }
  //   ]
  console.log(tdm.findTodo(1)) //Todo { id: 1, description: 'reading' }
  console.log(tdm.findIndexTodo(2)) //1
  console.log(tdm.removeTodo(2))
  console.log(tdm.getTodo()) //[ Todo { id: 1, description: 'reading' } ]