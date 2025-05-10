"use client"
import { useState } from "react";

export default function AMayusculas() {
    const [text, setText] = useState("");

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value.toUpperCase())}/>
        </div>
    );
}