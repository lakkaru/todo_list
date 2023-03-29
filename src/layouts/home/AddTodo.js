import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    newTodo: "",
    isDisabled: true,
  };
  handleInputValueChange = (e) => {
    this.setState({
      newTodo: e.target.value,
      isDisabled: e.target.value.length > 0 ? false : true,
    });
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", gap: "50px" }}>
          <div>
            <input
              type="text"
              onChange={this.handleInputValueChange}
              style={{ textTransform: "capitalize" }}
            />
          </div>
          <div>
            <button
              disabled={this.state.isDisabled}
              style={{ backgroundColor: "lightBlue" }}
              onClick={(e) =>
                alert(
                  'Do you want to add new task "' +
                    this.state.newTodo +
                    '" to your list?'
                )
              }
            >
              Add
            </button>
          </div>
          {/* <AddButton isDisabled={this.state.isDisabled} /> */}
        </div>
        <br />
        <div
          style={{ height: "1em", textTransform: "capitalize", color: "teal" }}
        >
          <p>{this.state.newTodo}</p>
        </div>
      </div>
    );
  }
}
