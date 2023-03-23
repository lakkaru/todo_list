import React, { Component } from "react";
import Todo from "../../components/todoList/Todo";

export default class TodoList extends Component {
  render() {
    // console.log(this.props);
    let {toDo}=this.props;
    return (
      <div style={{marginTop:"15px"}}>
        {toDo.map((val, key)=>{
            return <Todo key={key} message={val.message} color={val.color}/>
        })}
      </div>
    );
  }
}
