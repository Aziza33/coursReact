import React, {Component} from 'react' ;
import Car from '../components/Car';
import MyHead from '../components/MyHeaderOne'; 
import styled from "styled-components";

// création balise Title rouge 
const Title = styled.h1 `
    color: red;
    font-size: 80px;
`
const Button = styled.button`
    background: black;
    font-size: 15px;
    color: white;
    padding: 10px 12px;
    border-radius: 8px;
`
// const titreRouge = {
//     color: "green",
//     fontSize: "50px"
// }

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

    // handlePseudo = e => {
    //     this.setState({
    //         username: e.target.value
    //     })
    // }

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
        console.log('Username: ${this.state.username} Couleur: ${this.state.color} Comment: ${this.state.comment}')
    }

   

    render() {

        const myClass = this.props.head ? 'red' : 'blue';

        return(
            <div>

                <Car color={this.state.color} height="400"/>
                {/* <Image /> */}
                
                
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
                    <div>
                        {/* <MyHead />
                    <h1 style={titreRouge} className={styles.green}>Le composant myHead</h1> */}
                    <div>
                        <h1 className="fw-bold text-primary">Nouveau commentaire bootstrap</h1>
                        <button className=" btn btn-outline-danger">Valider</button>
                    </div>

                    <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
                    <div>
                        <p className={myClass}> Je suis rouge ou bleu</p>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button className="buttonBlue">Bouton Css Test Bootstrap</button>
                </div>
                    
                </form>

                <Title>Nouvelle balise Title</Title>
                <Button>Envoyer</Button>
            </div>
        )
    }
}


export default Form;