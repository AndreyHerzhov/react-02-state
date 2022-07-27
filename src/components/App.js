import React, {Component} from "react";
// import Counter from "./Counter";
// import Dropdown from "./Dropdown"
// import ColorPicker from "./ColorPicker"
// import TodoList from "./TodoList";
import Form from "./Form";

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];


class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'Выучить основы React', completed: false},
      {id: 'id-2', text: 'Разобраться с React Router', completed: true},
      {id: 'id-3', text: 'Пережить Redux', completed: false},
      {id: 'id-4', text: 'Подготовитсья к собеседованию', completed: true}
    ],
    inputValue: '',
    
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  formSubmitHandler = data => {
    console.log(data)
    
  }

 

//   handleInputChange = event => {
//      this.setState({inputValue: event.target.value})
//   }

//   handleNameChange = event => {
//      this.setState({name: event.target.value})
//   }

//   handleNickChange = event => {
//     this.setState({nick: event.target.value})
//  }
  
  render() {
    // const { todos } = this.state

    // const completedTodos = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0,
    //   )

      // console.log(completedTodos)

    return (
      <div
          style={{
             
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 30,
            color: '#010101'
          }}
        >
          <h1>Состояние компонента</h1>
          
          <Form onSubmit={this.formSubmitHandler}/>
 
          {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/> */}
          
          {/* <Counter initialValue={0}/>
          <Dropdown/>
          <ColorPicker options={colorPickerOptions}/> */}

          {/* <div>
            <p>Общее кол-во: {todos.length}</p>
            <p>Кол-во выполненых: {completedTodos}</p>
          </div> */}

          {/* <TodoList 
            todos={todos} 
            onDeleteTodo={this.deleteTodo}
          /> */}
      </div>
    );
  }
}

export default App;