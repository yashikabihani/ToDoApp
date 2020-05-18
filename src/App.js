// import React from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"

// function App() {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
//     // return(
//       // <div className="todo-list">
//       //   <TodoItem />
//       //   <TodoItem />
//       //   <TodoItem />
//       //   <TodoItem />
//       // </div>
//     // )
//     const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    
//     return (
//         <div className="todo-list">
//             {todoItems}
//         </div>
//     )
// }

// export default App;

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App
