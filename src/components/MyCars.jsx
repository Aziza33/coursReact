import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        cars: [
            {name: 'Bmw', year: '2025', color: 'grey'},
            {name: 'Renault', year: '2025', color: 'black'},
            {name: 'Peugeot', year: '2020', color: 'yellow'}
        ]
     }
    addTenYears = () => {
        const updatedState = this.state.cars.map((param) => {
            return param.year -= 10;
        })
        this.setState(
            {updatedState}
        )
    }
     
    //     cars: {
    //     marque :'Bmw', year: 2025, color: "grey"
    // }];

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                 <button onClick={this.addTenYears}>+ 10 ans</button>
                    
                {/* <Car year={2000} color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car> */}

                <Car color={this.state.cars[0].color} year={this.state.cars[0].year}>{this.state.cars[0].name}</Car>
                <Car color={this.state.cars[1].color} year={this.state.cars[1].year}>{this.state.cars[1].name}</Car>
                <Car color={this.state.cars[2].color} year={this.state.cars[2].year}>{this.state.cars[2].name}</Car> 
            </div>
           
        )
    }
}

export default Mycars