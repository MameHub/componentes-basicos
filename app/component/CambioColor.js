"use client"
import { useState } from "react";

export default function CambioColor() {
    const [color, setColor] = useState("");
    /**
     * @description modifica el color del texto mediante el seleccionado en el desplegable.
     */
    const changeColor = (e) => {
        setColor(e.target.value);
    };

    return (
        <div className="comp">
            <input type="text" style={{color: color}}/>
            <select value={color} onChange={changeColor}>
                <option value={""}>color</option>
                <option value={"red"}>Rojo</option>
                <option value={"green"}>Verde</option>
                <option value={"blue"}>Azul</option>
                <option value={"yellow"}>Amarillo</option>
                <option value={"purple"}>Morado</option>
            </select>
        </div>
    );
}