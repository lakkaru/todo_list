import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    newToDo: "",
    isError: true,
  };
  handleInputValueChange = (e) => {
    this.setState({
      newToDo: e.target.value,
      isError: (e.target.value).trim().length > 0 ? false : true,
    });
  };

  handleAddNewToDo = () => {
    let { newToDo } = this.state;
    if (newToDo.trim()) {
      this.props.addNewToDo(newToDo);
      this.setState({newToDo:''})
    } else {
      // this.setState({isError:true});
    }
  };
  render() {
    // const { addNewToDo } = this.props;
    // console.log(addNewToDo);

    return (
      <div>
        <div style={{ display: "flex", gap: "50px" }}>
          <div>
            <input
              type="text"
              onChange={this.handleInputValueChange}
              style={{ textTransform: "capitalize" }} value={this.state.newToDo}
            />
          </div>
          <div>
            <button
              disabled={this.state.isError}
              style={{ backgroundColor: "lightBlue" }}
              onClick={this.handleAddNewToDo}
            >
              Add
            </button>
          </div>
          {/* <AddButton isDisabled={this.state.isDisabled} /> */}
        </div>

        <div
          style={{
            height: "1em",
            textTransform: "capitalize",
            color: "teal",
            fontSize: ".5rem",
          }}
        >
          {this.state.isError ? <p>Please Enter new ToDo</p> : ""}
        </div>
      </div>
    );
  }
}
