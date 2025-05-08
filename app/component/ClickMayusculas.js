"use client"
import { useState } from 'react';

/**
 * Componente que permite al usuario convertir texto a mayúsculas.
 * @returns {JSX.Element} Un div con un campo de entrada de texto y
 * un botón que convierte el texto a mayúsculas al hacer clic en el.
 */
export default function ClickMayusculas() {
    const [text, setText] = useState("");
    /**
     * @description transforma un texto introducido en un input a mayúsculas.
     */
    const onMayus = () => {
        setText(text.toUpperCase());
    };
    return (
        <div className="comp">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={onMayus}>pulsar</button>
        </div>
    );
}