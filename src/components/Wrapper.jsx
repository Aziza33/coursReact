import React from 'react'

// wrapper = boite qui va utiliser la props children
export default function Wrapper({children}) {
    
    // children = 'Bonjour';

    return (
        <div style={{ 
                    backgroundColor: 'whiteSmoke', 
                    width: '400px', 
                    padding: '10px', 
                    margin: '5px auto'
                }}>
                
                {children}
        </div>
    )
}

