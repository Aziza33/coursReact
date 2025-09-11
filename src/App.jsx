import  MyCars  from './components/MyCars'
import { Component } from 'react'
import './App.css'

class App extends Component { // arborescence1 this.
  // change le titre en dur
  changeTitle = () => {
    this.setState({
      titre: 'Mon nouveau titre'
    })
  }

  // change via Param
  changeTitleParam = (titre) => {
      this.setState({
        titre: titre
      })
  }
// change via Bind
  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }
 

  state = { // valable que ds app.jsx  / arborescence2 this.state
    titre: 'My Garage', // propriétés du state ou props
    subtitle: 'Mes modèles', // propriétés du state ou props
    color: 'green' // propriétés du state ou props / arorescence3 complète this.state.color
  };

  render() {
    return (
      <div className="App">

        {/* Changer le nom en dur on click*/}
         <button onClick={this.changeTitle}>Changer le nom en dur</button>
         
        <button onClick={()=>this.changeTitleParam('Titre via un Param')}>Change titre via param</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Change Via Bind</button>

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
