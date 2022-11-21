import React from "react"

function Caja(){
    function cambiar(evento){
        if (evento.type == "dblclick"){
            evento.target.style.background="blue"
        }
        if (evento.type == "mouseover"){
            evento.target.style.background="yellow"
        }
        if (evento.type == "mouseout"){
            evento.target.style.background="red"
        }
    }
    return(
        <div id="contenidos" style={{width:"150px", height:"150px", background:"red", margin:"auto"}}
            onMouseOver={(e)=>cambiar(e)}
            onMouseOut={(e)=>cambiar(e)}
            onDoubleClick={(e)=>cambiar(e)}>
            Ejemplo de Eventos
        </div>
    )
}

export default Caja