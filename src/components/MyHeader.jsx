// rafce pour faire une fonction fléchée en react built-in snippet

import React from 'react'

const MyHeader = ({ myStyle, children }) => 
 // 1ère paire d'accolade = expression js ds jsx, 2ème paire c'est pour l'objet 
// qd tu retourne un seul élément le return est facultatif, 
        <h1 style={{ color: myStyle }}>{ children }</h1>;
   
export default MyHeader

