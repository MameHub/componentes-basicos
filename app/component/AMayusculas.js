"use client"
import { useState } from "react";

export default function AMayusculas() {
    const [text, setText] = useState("");

    return (
        <div className="comp">
            <input type="text" value={text} onChange={(e) => setText(e.target.value.toUpperCase())}/>
        </div>
    );
}