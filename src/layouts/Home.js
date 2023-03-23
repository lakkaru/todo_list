import React, { Component } from "react";
import AddTodo from "./home/AddTodo";
import TopMenu from "../components/home/TopMenu";
import TodoList from "./home/TodoList";

const firstTodo=[
  {message:"First ToDo",
        color:'red'},
  {message:"Second ToDo",
        color:'pink'},
  {message:"Thired ToDo",
        color:'green'},
];
const secTodo=[
  {message:"A ToDo",
        color:'#456789'},
  {message:"B ToDo",
        color:'#123456'},
  {message:"C ToDo",
        color:'#098765'},
];
export default class Home extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <div style={{ display:'flex', justifyContent:'center'}}>
          <div>
            <h2>ToDo List</h2>
            <AddTodo />
            <br />
            <hr />
            <div>
              <TodoList toDo={firstTodo}/>
            </div>
            <hr></hr>
            <div>
              <TodoList toDo={secTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
