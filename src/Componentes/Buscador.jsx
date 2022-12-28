import React from 'react'

const Buscador = (Props) => {

    const url='';
    const width = {width:'100%'}

    return (
        <div style={ width } className='mb-4'>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href={url} className="navbar-brand">Buscador de Colaboradores {Props.buscador}</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Buscador"
                            onChange={(e) => Props.setBuscador(e.target.value)} 
                            />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Buscador

// <div>
 // {names.filter(name => name.includes('J')).map(filteredName => (
 //   <li>
 //     {filteredName}
 //   </li>
//  ))}
// </div>


