import { Component } from 'react';
import Mycars from './components/MyCars';
import Welcome from './components/Welcome';
import Maman from './components/Maman';
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
      </div>
    )
  }
}

export default App;