import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };


  handler = () => {
    this.setState({ count: this.state.count + offset });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={() =>this.handler(1) }>
            Increment
          </button>
          <button className="btn btn-primary" onClick={() => this.handler(-1) }>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;