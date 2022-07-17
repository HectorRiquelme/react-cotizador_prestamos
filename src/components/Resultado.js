import React, { Fragment } from "react";

const Resultado = (props) => {
    
    const { total ,plazo ,cantidad } = props;

    return(

        <div className="u-full-with resultado fondo-resultado" >
        <h2>Resumen de cotización:</h2>
        <p>la cantidad solicitada es : <span>$ {cantidad}</span></p>
        <p>a pagar en <span>{plazo}</span> meses</p>
        <p>su pago mensual es de : <span>$ {(total/plazo).toFixed(2)}</span></p>
        <p>total a pagar : <span>$ {total.toFixed(2)}</span></p>
        </div>
    );

}
 
export default Resultado; 