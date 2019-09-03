import React from "react";
import Form from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: todoData,
      taskname: "",
    };
  }
  toggleItem = task => {
    console.log(task.completed);
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  onChange = event => {
    this.setState({
      taskname: event.target.value,
    });
  };

  SubmitTodo = event => {
    const newTask = {
      task: this.state.taskname,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      taskList: [...this.state.taskList, newTask],
    });
    console.log(this.state.taskList);
  };

  ClearTodo = () => {
    //const uncompletedList = ;
    this.setState({
      taskList: this.state.taskList.filter(item => !item.completed),
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>

        <TodoList taskList={this.state.taskList} toggleItem={this.toggleItem} />

        <Form
          onChange={this.onChange}
          SubmitTodo={this.SubmitTodo}
          taskname={this.state.taskname}
          ClearTodo={this.ClearTodo}
        />
      </div>
    );
  }
}

export default App;
