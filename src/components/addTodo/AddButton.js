import React, { Component } from "react";

export default class AddButton extends Component {
  render() {
    let isDisabled=this.props.isDisabled;
    // console.log(isDisabled)
    return (
      <div>
        <button  disabled={isDisabled} style={{backgroundColor:'lightBlue'}}>Add</button>
      </div>
    );
  }
}
