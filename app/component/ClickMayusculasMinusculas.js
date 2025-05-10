"use client"
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
    };
    return (
        <div className="comp">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={changeMayus}>Pulsar</button>
        </div>
    );
}