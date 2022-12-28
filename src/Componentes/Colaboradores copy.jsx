import React from 'react'


  const Colaboradores = (props) => {
  return (
    <div>
        <h1>Lista de Colaboradores </h1>
        {props.lstColab.map((colab) => <p key={colab.id}>{colab.nombre} - {colab.correo}</p>)}
    </div>
  )
}

export default Colaboradores

 