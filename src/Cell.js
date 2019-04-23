import React, { Component } from 'react';

export default class Cell extends Component {
   constructor (props) {
       super(props) //why we need to access the props from component?
   }

   state = {
    color :this.props.value
   }

   changeColor = (e)=>{
      this.setState({
          color:'#333'
      })
   }

   render() {
       return(
           <div className = "cell" style = {{backgroundColor: this.state.color}} onClick = {this.changeColor}>
           </div>
       )
   }
}