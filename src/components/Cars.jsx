
import React from 'react'
import Wrapper from './Wrapper'

// est plus simple, executée plus rapidement et peut hériter du contexte d'execution d'une fonction parent
    // plus rapide pour les call back
    // promesse est façon plus visible de traiter les taches asynchrones
    // 3 états : tending, fullfight resolue avec succès, rejected echec renvoi erreur
    // destructuring : destructurer l'objet pour récupérer les propriétés + facilement
    // les props sont immuables, il ne faut plus les modifier

const Cars = ({children, color, year}) => {

    const colorInfo = color ? color : "Néant";
    
    //  console.log(props.children);

        return children && (  // le && remplace le if/else et vérifie l'existence du children, si false ne l'affiche pas
           
            <Wrapper>
                <p>Marque : {children}</p>
                <p>Couleur : {colorInfo}</p>
                <p>Année : {year}</p>
            </Wrapper>
        )                
    };

export default Cars

// Props = propriété qui permet de transmettre des données ou un comportement qu’on aura défini d’un composant parent vers le composant enfant
// permet d'alimenter un composant sans modifier son code

// Children => permet d'inclure du contenu ds un composant et d'y accéder grâce à props.children

// destructuring = destructuration de l'objet ex const Cars ({ children, color, year })

// Exemple de promesse
// const promesse = new Promise ((resolve, reject) => {
//     // opération asynchrone
//     if (toutCompris){
//         resolve("success");
//     }else(pasCompris){
//           reject("echec");
//     }  
//    })