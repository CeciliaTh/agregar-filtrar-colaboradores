import React from 'react'

//const Colaboradores = ({lstColab, buscador}) => {
  const Colaboradores = (props) => {
  return (
    <div>
        <h1>Lista de Colaboradores </h1>
        
        {props.lstColab.filter((colab) => { 
            if (props.buscador === ''){
              return props.lstColab.map((colab) => <p key={colab.id}>{colab.id}- {colab.nombre} - {colab.correo}</p>)
            } else if (colab.nombre.toLocaleLowerCase().includes(props.buscador.toLocaleLowerCase()))
            {return colab}}).map((colab) => <p key={colab.id}> {colab.id}-{colab.nombre} - {colab.correo}</p>)}
    </div>
  )
}

export default Colaboradores

//   {props.lstColab.map((colab) => <p key={colab.id}>{colab.nombre} - {colab.correo}</p>)}
  //  } 

  //   {props.clave === "252525" ? (
  //     <div className='boton'>
  //       <p>Puedes iniciar sesion {props.nombre}</p>
  //           <button type="sumbit" className='estilo-btn'> <strong>Iniciar sesion</strong> </button>
  //       </div>
  //   ):(null)
  // }