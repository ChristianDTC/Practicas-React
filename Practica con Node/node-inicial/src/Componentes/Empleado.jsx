import React from "react"
import { useState } from "react"

function Empleado(){

    // Declaramos las variables con estado
    // Nombre de la variable y método que la modifica
    const [nombre1, setnombre1] = useState("")
    const [nombre2, setnombre2] = useState("")
    const [apellido1, setape1] = useState("")
    const [apellido2, setape2] = useState("")
    const [iniciales, setiniciales] = useState("")

    // Visualizamos las iniciales
    // Preventdefault impode que el formulario se renderize de nuevo
    const pintarIniciales = (e) => {
        e.preventDefault()
        setiniciales(`${nombre1[0]}.${nombre2[0]}.${apellido1[0]}.${apellido2[0]}`.toUpperCase())
    }

    return(
        <form onSubmit={pintarIniciales}>
            <p>Primer Nombre</p>
            <input name="nombre1" type="text" value={nombre1} onChange={(e)=>setnombre1(e.target.value)}></input>
            <br/>
            <p>Segundo Nombre</p>
            <input name="nombre2" type="text" value={nombre2} onChange={(e)=>setnombre2(e.target.value)}></input>
            <br/>
            <p>Primer Apellido</p>
            <input name="apellido1" type="text" value={apellido1} onChange={(e)=>setape1(e.target.value)}></input>
            <br/>
            <p>Segundo Apellido</p>
            <input name="apellido2" type="text" value={apellido2} onChange={(e)=>setape2(e.target.value)}></input>
            <br/>
            <p>Iniciales {iniciales}</p>
            <button type="submit">Aceptar</button>
        </form>
    )
}

export default Empleado