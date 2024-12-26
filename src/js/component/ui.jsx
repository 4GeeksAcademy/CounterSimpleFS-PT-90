import React from "react";



const  IntefContador=(props)=>{
    return (
        <div className="base">
            <div className="icono">
            <i className="fa-solid fa-clock"></i>
            </div>
            <div>{props.uno}</div>
             <div>{props.dos}</div>
             <div>{props.tres}</div>
            <div>{props.cuatro}</div>
            
           
        </div>
    );
}

export default IntefContador;
