import React, { Component } from 'react';

class Maman extends Component {

    state = {
        messageMaman: null,
        messageToto: null
    }

    ordreMaman = () => {
        this.setState({
            messageMaman: 'Viens me faire un câlin !'
        })
    }

    render() {
        <div>
            <h1>Maman</h1>
            <button onClick={this.ordreMaman}>Ordre de Maman</button>
            <p>{this.state.messageMaman}</p>
            <hr />
        </div>
    }
}

export default Maman