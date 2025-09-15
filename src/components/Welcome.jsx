import { Component } from 'react'


const Welcome = () => {

    const alertBonjour = () => alert('Bonjour');
    const alertBonsoir = arg => alert(arg);


    // render() {

    return (
         <div>
        <button onClick={()=>alertBonjour('Bonjour')}>Invoquer une fonction Bonjour</button>
        <button onClick={()=>alertBonsoir('Bonsoir')}>Invoquer une fonction avec arg</button>
     
        </div>  
    )
    
   
}
export default Welcome



  