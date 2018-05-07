import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TestComponent extends Component {
  constructor(props) {  
    super(props);
  }

  render() {
    const divStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: `${this.props.color}`
    };

    return (
      <div style={divStyle}></div>
    );
  }
}
