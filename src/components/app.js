import React from 'react'
import TodosList from './todos-list'

const todos = [
  {
    task: 'take a shower',
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
        <TodosList todos={this.state.todos} />
      </div>
    )
  }
}
