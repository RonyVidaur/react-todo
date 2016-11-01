import React from 'react'
import TodosList from './todos-list'
import CreateTodo from './create-todo'

const todos = [
  {
    task: 'Take a shower',
    isCompleted: false
  },
  {
    task: 'Be awesome',
    isCompleted: true
  }
]

export default class App extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h1>Well Hello! these are your pending tasks</h1>
        <h2>Get stuff done!</h2>
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosList todos={this.state.todos} />
      </div>
    )
  }
 createTask(task) {
   this.state.todos.push({
     task,
     isCompleted: false
   })
   this.setState({ todos: this.state.todos })
 }//create Task
}
