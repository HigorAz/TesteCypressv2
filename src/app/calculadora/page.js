"use client"
import { useState } from "react"
 
const PaginaCalculadora = () => {
    const [v1, setV1] = useState(0)
    const [v2, setV2] = useState(0)
    const [resultado, setResultado]  = useState(0)

    const realizarCalculo = () => {
        setResultado(parseInt(v1) + parseInt(v2))
    }
 
    return (
        <div className="flex flex-col">
          <label>Informe o primeiro campo</label>
          <input id="campo1"
            onChange={(e) => {
              setV1(e.target.value);
            }}
          />
    
          <label>Informe o segundo campo</label>
          <input id="campo2"
            onChange={(e) => {
              setV2(e.target.value);
            }}
          />
    
          <span id="result">{resultado}</span>
          <button id = "botaoCalcular" onClick={realizarCalculo}>Realizar Cálculo</button>
        </div>
      );
    };
 
export default PaginaCalculadora