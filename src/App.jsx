import { Component } from 'react';
import Mycars from './components/MyCars';
import Welcome from './components/Welcome';
import Maman from './components/Maman';
import Car from './components/Car';
import Form from './components/Form'
import './App.css';


class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures',
    marque: 'marque'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <Welcome />
        <Maman />
        <Car height="350"/>
        <Form 
        head={false}

        />
      </div>
    )
  }
}

export default App