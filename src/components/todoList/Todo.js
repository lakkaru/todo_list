
import React, { Component } from "react";

export default class Todo extends Component {

 
  render() {
    let { message, color } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #444",
          padding: "10px",
        }}
      >
        <input type="checkBox" />
        <p id='para' style={{ color: color }}>{message}</p>
        <button>Delete</button>
      </div>
      
    );
  }
}
