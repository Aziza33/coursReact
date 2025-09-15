import { Component } from 'react'
import Car from './Cars'


class Mycars extends Component {


    state = {
        cars: [
            {name: 'Bmw', year: '2007', color: 'grey'},
            {name: 'Renault', year: '2010', color: 'black'},
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
     
 getAge = year => {
            const now = new Date().getFullYear();
            const age = now - year;

            let frenchYearStr = "";
            if (age === 1) {
                frenchYearStr = "an";
            } else if (age > 1) {
                frenchYearStr = "ans";
            }
            return `${age} ${frenchYearStr}`
        }

  


    // map récupère léleement courant du tableau, créé un nouveau tableau fictif qui renvoie les new données

    render() {
                    // const year = new Date().getFullYear();

        return (
            <div>
                <h1>{this.props.title}</h1>

                 <button onClick={this.addTenYears}>+ 10 ans</button>

                 {
                    this.state.cars.map(({name, color, year}, index) => {
                        return(
                            <div key={index}>
                                <Car  
                                // nom = {name}
                                color = {color}
                                year = {year}>{name}</Car>
                                {/* color={cars.color} year={year - cars.year + 'ans'}>{this.state.cars.name}</Car> */}
                            </div>
                        )
                    })
                 }

                {/* <Car color={this.state.cars[0].color} year={ year - this.state.cars[0].year + 'ans'}>{this.state.cars[0].name}</Car>
                <Car color={this.state.cars[1].color} year={year - this.state.cars[1].year + 'ans'}>{this.state.cars[1].name}</Car>
                <Car color={this.state.cars[2].color} year={year - this.state.cars[2].year + 'ans'}>{this.state.cars[2].name}</Car>  */}
            </div>
           
        )
    }
}

export default Mycars