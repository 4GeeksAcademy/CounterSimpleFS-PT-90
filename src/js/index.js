//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import IntefContador from "./component/ui.jsx" ;

// include your styles into the webpack bundle
import "../styles/index.css";
let segundos=0;

const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    let segundosSt = segundos.toString();
    const posUno = segundosSt[0];
    const posDos = segundosSt[1];
    const posTres= segundosSt[2];
    const posCuatro = segundosSt[3]
       segundos++;

    root.render(<IntefContador uno={posUno} dos={posDos} tres={posTres} cuatro={posCuatro}/>);
}, 1000);






