import React, { Component } from 'react';
import Cars from './Cars';
import MyHeader from './MyHeader'

class MyCars extends Component {

    // fonction pour éviter que le texte soit copié
    noCopy = () => {
        alert('merci de ne pas copier le texte petit filou !');
    }
    // Ajouter un style css au passage de la souris h2 onMouseOver {this.addStyle}
    addStyle = (e) => {
        console.log(e.target);
        if(e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        }else {
            e.target.classList.add('styled');
        }
    }

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
        <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sequi ipsa voluptatibus perferendis, qui eos natus voluptatum consequatur dolorem architecto praesentium quaerat 
            aperiam reprehenderit incidunt recusandae porro ad delectus hic officia.</p>


                      <h2 onMouseOver={this.addStyle}>{this.props.subtitle}</h2>
  
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