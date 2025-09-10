import  MyCars  from './components/MyCars'
import { Component } from 'react'
import './App.css'

class App extends Component { // arborescence1 this.
  state = { // valable que ds app.jsx  / arborescence2 this.state
    titre: 'My Garage', // propriétés du state ou props
    subtitle: 'Mes modèles', // propriétés du state ou props
    color: 'green' // propriétés du state ou props / arorescence3 complète this.state.color
  };

  render() {
    return (
      <div className="App">
        <MyCars 
          title={this.state.titre}  
          subtitle={this.state.subtitle} 
          color={this.state.color}/>
        {/* <h1>Hello</h1> */}
      </div>
    )
  }
}
export default App;
