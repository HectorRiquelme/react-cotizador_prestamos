import React,{ Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;

  if(cargando){

    componente = <Spinner />
  }else if (total === 0) {
    
    componente = <Mensaje />
  }else{
    componente =  <Resultado
                     total={total}
                     plazo={plazo}
                     cantidad={cantidad}
                   />
  }
 
  return (
    <Fragment>

      <Header 
        titulo='prestamos'
        version='v1'
      />

      <div class="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
          total = {total}
          guardarTotal = {guardarTotal}
          guardarCargando = {guardarCargando}
        />
        
        <div className="mensajes">
          {componente}
        </div>

      </div>

    </Fragment>
  );
}

export default App;
