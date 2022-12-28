import React from 'react'
import { useState } from 'react'

const FormularioColaboradores = ({ lstColab, setLstColab }) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
   
    const agregarColab = (e) => {
        e.preventDefault();
        
        setLstColab([...lstColab, { id: lstColab.length +1 , nombre: nombre, correo: email }]);

        // setNombre("");
        // setEmail("");
    }

    
    return (
      <div>
            <form onSubmit={agregarColab}>
                <div>
                    <p>Nombre Colaborador</p>
                    <input type='text' id='nombre' name='nombrea' className="form-control"
                        onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <p>Email Colaborador</p>
                    <input type='email' id='email' name='email' className="form-control"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='py-4'>
                    <button className='btn btn-success'>Agregar Nuevo Colaborador</button>
                </div>
            </form>

            <hr />

            </div>
    )
}

export default FormularioColaboradores