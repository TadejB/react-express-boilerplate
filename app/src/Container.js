import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';
import axios from 'axios';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rects: []
    };
  }
  
  componentDidMount() {
    axios.get('http://localhost:3000/api')
      .then(resp => {
        this.setState({ rects: resp.data.data });
      });
  }
  
  render() {
    const children = this.state.rects.map((rectColor, i) => {
      return <TestComponent color={rectColor} key={i} />;
    });
    
    return (
      <div>{children}</div>
    );
  }
}
