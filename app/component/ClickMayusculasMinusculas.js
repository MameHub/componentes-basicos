"use client"
<<<<<<< HEAD
import { useState } from "react";

export default function ClickMayusculasMinusculas() {
    const [text, setText] = useState("");
    const [upper, setUpper] = useState(false);
    /**
     * @description cambia el texto introducido entre mayúsculas y minúsculas.
     */
    const changeMayus = () => {
        setText(upper ? text.toUpperCase() : text.toLowerCase());
        setUpper(!upper);
=======
import { useState } from 'react';

/**
 * Componente que permite al usuario convertir texto a mayúsculas.
 * @returns {JSX.Element} Un div con un campo de entrada de texto y
 * un botón que convierte el texto entre mayúsculas y minúsculas al
 * hacer clic en el.
 */
export default function ClickMayusculas() {
    const [text, setText] = useState("");
    /**
     * @description alterna entre mayúsculas y minúsculas el texto introducido en el input.
     */
    const onMayus = () => {
        setText(text.toUpperCase());
        setText(text.toLowerCase());

>>>>>>> c8522237c23f6b3fd743524c85e2adc2b44a0a91
    };
    return (
        <div className="comp">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
<<<<<<< HEAD
            <button onClick={changeMayus}>Pulsar</button>
=======
            <button onClick={onMayus}>pulsar</button>
>>>>>>> c8522237c23f6b3fd743524c85e2adc2b44a0a91
        </div>
    );
}