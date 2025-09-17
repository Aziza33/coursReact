import React, {Component} from 'react' ;
import Car from '../components/Car'

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment: ''
    }

    handleUserName = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }

    handleComments = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmitForm = e => {
        // permet de ne pas recharger la page après validation pour garder les données
        e.preventDefault();
        console.log('Username: ${this.state.username} Couleur: ${this.state.color}')
    }

    render() {
        return(
            <div>
                <Car color={this.state.color} height="400"/>
                {/* <Image /> */}
                <div>
                    <label>Commentaire</label>
                    <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
                </div>
                
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handleUserName}/>
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default Form;