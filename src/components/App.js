import React, {Component} from "react";
// import Counter from "./Counter";
// import Dropdown from "./Dropdown"
// import ColorPicker from "./ColorPicker"
import TodoList from "./TodoList";
// import Form from "./Form";
import TodoEditor from './TodoEditor'
import Filter from "./Filter/Filter";
import shortid from "shortid";

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
    filter: ''
    
  };

  addTodo = message => {
     
    const todo = {
      id: shortid.generate(),
      text: "",
      completed: false,
    }
    todo.text = message
    console.log(todo)

    this.setState(({todos}) => ({
      todos: [todo, ...todos]
    }))
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  toggleCompleted = todoId => {
    // console.log(todoId)

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if(todo.id ===  todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     }

    //     return todo
    //   })
    // }))

    this.setState(({ todos })=> ({
      todos: todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed }: todo,
      )
    }))
  }

  formSubmitHandler = data => {
    console.log(data)
    
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisiblesTodos = () => {
    const { filter , todos } = this.state
    const normalizedFilter = filter.toLocaleLowerCase()

    return  todos.filter(todo => 
      todo.text.toLowerCase().includes(normalizedFilter)) 
  }

  getCompletedTodos = () => {
    const { todos } = this.state
    return todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
      )
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
    const { todos, filter } = this.state
    const visibleTodos = this.getVisiblesTodos()
    const completedTodos = this.getCompletedTodos()

      
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
          
          
          {/* <Form onSubmit={this.formSubmitHandler}/> */}
 
          {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/> */}
          
          {/* <Counter initialValue={0}/>
          <Dropdown/> */}
          {/* <ColorPicker options={colorPickerOptions}/> */}

          <TodoEditor onSubmit={this.addTodo} value={this.state.inputValue}/>

      

          

          <div>
            <p>Общее кол-во: {todos.length}</p>
            <p>Кол-во выполненых: {completedTodos}</p>
          </div>
          <Filter value={filter} onChange={this.changeFilter}/>

          <TodoList 
            todos={visibleTodos} 
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}  

          />
      </div>
    );
  }
}

export default App;

 