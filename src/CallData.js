import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class CallData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='bg-success m-3 p-2'>
        <h3>test Call Data Global for Edit</h3>
        <h4>Data Global is : {this.props.data}</h4>

        <div className='m-3 p-2 '>
          <button
            onClick={() => this.props.data.dataDispatch("Add")}
            className='btn btn-primary'
          >
            Add
          </button>
          <button
            onClick={() => this.props.data.dataDispatch("Sub")}
            className='btn btn-secondary'
          >
            Sub
          </button>
        </div>
      </div>
    );
  }
}
export default CallData;
