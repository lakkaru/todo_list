import React, { Component } from "react";
import AddButton from "../../components/addTodo/AddButton";

export default class AddTodo extends Component {
  state = {
    newTodo: "",
    isDisabled: true,
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", gap: "50px" }}>
          <div>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  newTodo: e.target.value,
                  isDisabled: e.target.value.length > 0 ? false : true,
                });
              }}
            />
          </div>
          <AddButton isDisabled={this.state.isDisabled} />
        </div>
        <br />
        <div style={{height:'1em', textTransform:'capitalize', color:'teal'}}>
          <p>{this.state.newTodo}</p>
        </div>
      </div>
    );
  }
}
