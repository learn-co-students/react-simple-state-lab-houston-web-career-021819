import React, { Component } from 'react';
import Cell from './Cell.js';
import { pattern1, pattern2 } from './data.js';

// import {pattern1} from './data.js'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    this.props.vals.map(val => <div className="cell">{this.genRow(val)}</div>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )

  
}
}
Matrix.defaultProps ={
values: pattern2
}
