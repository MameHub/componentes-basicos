"use client"
import { useState } from "react";

export default function AcortaIndividual() {
    const [shorted, setShorted] = useState(false);
    const text = [
        "Ejemplo de texto",
        "Código en React.js",
        "Lista de elementos",
        "Componentes dinámicos",
        "Uso de JavaScript",
        "Texto aleatorio aquí",
        "Probando React Hooks",
        "Estado y propiedades",
        "Creando una función",
        "Elemento de prueba"
    ];

    /**
     * 
     */
    const reduceText = (text) => {
        text.length > 10 ? text.slice(1, 10) + "..." : text;
        setShorted(!shorted);
    };

    return (
        <div className="comp">
            <ol>
                <li>{text[0]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[1]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[2]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[3]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[4]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[5]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[6]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[7]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[8]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...
                <br/>
                <br/>

                <li>{text[9]}</li>
                <input type="checkbox" onChange={reduceText}/> Acorta...

            </ol>
        </div>
    );
}