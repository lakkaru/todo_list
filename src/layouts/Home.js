import React, { Component } from "react";
import AddTodo from "./home/AddTodo";
import TopMenu from "../components/home/TopMenu";
import TodoList from "./home/TodoList";

// const firstTodo = [
//   { message: "First ToDo", color: "red" },
//   { message: "Second ToDo", color: "pink" },
//   { message: "Thired ToDo", color: "green" },
// ];
// const secTodo = [
//   { message: "A ToDo", color: "#456789" },
//   { message: "B ToDo", color: "#123456" },
//   { message: "C ToDo", color: "#098765" },
// ];

export default class Home extends Component {
  // state = {
  //   todos: [
  //       [
  //         { message: "First ToDo", color: "red" },
  //         { message: "Second ToDo", color: "pink" },
  //         { message: "Thired ToDo", color: "green" },
  //       ],
  //     [

  //         { message: "A ToDo", color: "#456789" },
  //         { message: "B ToDo", color: "#123456" },
  //         { message: "C ToDo", color: "#098765" },
  //     ],
  //   ],
  // };

  constructor() {
    super();
    this.state = {
      todos: 
        [
          { message: "First ToDo", color: "red" },
          { message: "Second ToDo", color: "red" },
          { message: "Thired ToDo", color: "red" },
        ],
        // [
        //   { message: "A ToDo", color: "#456789" },
        //   { message: "B ToDo", color: "#123456" },
        //   { message: "C ToDo", color: "#098765" },
        // ],
      
    };
  }

  addNewToDo = (message) => {
    // console.log(messageTxt);
    
    this.setState({
      todos: [
        { message: message, color: "red" },
        ...this.state.todos,
      ],
    });
  };


  render() {
    return (
      <div>
        <TopMenu />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <h2>ToDo List</h2>
            <AddTodo addNewToDo={this.addNewToDo} />
            <br />
            <hr />
            <div>
              <TodoList toDo={this.state.todos} />
            </div>
            {/* <hr></hr>
            <div>
              <TodoList toDo={this.state.todos[1]} />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
