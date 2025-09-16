const Toto = props => {

  // const repondre = () =>{
  //   props.reponseTotoProps = ("Ok")
  // };

  return (
    <div>
        <h2>{props.name}</h2>
        <button 
            // Compléter cette section
       onClick={props.reponseTotoProps} >Réponse</button>
       <button 
            // Compléter cette section
       onClick={()=>props.reponseTotoProps ('ok')} >Réponse 2</button>

        <p>{props.leState.messageToto}</p>
        {/* <p>{props.reponseTotoProps}</p> */}
    </div>
  )
}

export default Toto