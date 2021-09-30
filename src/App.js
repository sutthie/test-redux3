import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CallData from "./CallData";

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Test React Redux using Global State Data</h2>
        <h3>Data Global is : {this.props.reducer.state}</h3>
        <div>
          <CallData data={this.props.reducer.state} />
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    reducer: state.reducer,
  };
};

export default connect(mapStateToProp)(App);
