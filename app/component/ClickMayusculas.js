"use client"
import { useState } from 'react';

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