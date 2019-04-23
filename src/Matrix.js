import React, { Component } from 'react';
import {pattern2} from './data.js';
import Cell from './Cell.js'
export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    console.log(pattern2)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
   
}


//make default value
Matrix.defaultProps = {
  values: pattern2 /*.map(function(array){
     array.map(function(color){
       color = '#F00'
     })
  }) */
}