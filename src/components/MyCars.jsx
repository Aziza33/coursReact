import React, { Component } from 'react';
import Cars from './Cars';
import MyHeader from './MyHeader'

class MyCars extends Component {

    state={
        cars: ["Mercedes", "Bmw", "Ferrari" ]
    }
  render() {

    
    console.log(this);

    return (
      <div>
        {/* <h2>Hello React</h2> props permet de transmettre de transmettre données ou comportement du parent state de app.jsx*/}
        
        <MyHeader 
            myStyle={this.props.color}
            >
                {this.props.title}
        </MyHeader>

                      <h2>{this.props.subtitle}</h2>
  
        <Cars color="black" year="2020">{this.state.cars[0]}</Cars>
        <Cars color="white" year="2024">{this.state.cars[1]}</Cars>
        <Cars color="red" year="2023">{this.state.cars[2]}</Cars>

            <MyHeader>

            </MyHeader>
                <h2>{this.props.subtitle}</h2>

      </div>
    )
  }
}
export default MyCars;